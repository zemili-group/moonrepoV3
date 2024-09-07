/**
 * RxDBService: A singleton class for managing an RxDB database with DenoKV storage and replication.
 *
 * This service uses DenoKV for storage and includes automatic replication with a server.
 * It provides a centralized database management system for the OPSAP application.
 *
 * The service handles initialization of the database, collection management,
 * and provides methods for database operations and destruction.
 *
 * Usage on the server:
 * 1. Import the createRxDBService function:
 *    import { createRxDBService } from "./rxdb-server.service.ts";
 *
 * 2. Initialize the database:
 *    const db = await createRxDBService("your-project-name", "http://your-server-url");
 *
 * 3. Use the database instance to perform operations:
 *    const usersCollection = db.collections.users;
 *    const allUsers = await usersCollection.find().exec();
 *
 * 4. The database will automatically handle replication with the specified server URL.
 *
 * 5. To destroy the database when no longer needed:
 *    await RxDBService.getInstance().destroy();
 *
 * Note: Ensure that the server URL provided matches the endpoint where your replication
 * server is running. Each collection will be synchronized with a corresponding endpoint
 * at ${serverUrl}/{collectionName}.
 */

import {
  createRxDatabase,
  type RxCollectionCreator,
  type RxDatabase,
} from "npm:rxdb"
import { getRxStorageDenoKV } from "npm:rxdb/plugins/storage-denokv"
import { replicateRxCollection } from "npm:rxdb/plugins/replication"
import { schemas } from "../models/models.ts"
import type {
  CollectionName,
  OPSAPDatabaseCollections,
} from "../models/models.ts"

export type OPSAPDatabase = RxDatabase<OPSAPDatabaseCollections>

class RxDBService {
  private static instance: RxDBService | null = null
  private db: RxDatabase<OPSAPDatabaseCollections> | null = null

  private constructor() {}

  public static getInstance(): RxDBService {
    if (!RxDBService.instance) {
      RxDBService.instance = new RxDBService()
    }
    return RxDBService.instance
  }

  public async initialize(
    project: string,
    serverUrl: string,
  ): Promise<RxDatabase<OPSAPDatabaseCollections>> {
    if (this.db) {
      console.warn("Database already initialized")
      return this.db
    }

    console.log("Initializing RxDB with:", { project, serverUrl })

    try {
      const storage = getRxStorageDenoKV()

      this.db = await createRxDatabase<OPSAPDatabaseCollections>({
        name: project,
        storage,
        multiInstance: true,
        eventReduce: true,
      }) // Set up replication for each collection

      // Convert schemas to RxCollectionCreator objects
      const collections: { [K in CollectionName]: RxCollectionCreator } = {
        users: schemas.users,
        companies: schemas.companies,
        log_drafts: schemas.log_drafts,
        certifications: schemas.certifications,
        notifications: schemas.notifications,
        activity_feed: schemas.activity_feed,
      } as const

      // Use the converted collections object
      await this.db.addCollections(collections)

      Object.keys(schemas).forEach((collectionName) => {
        const replicationState = replicateRxCollection({
          collection: this.db!.collections[collectionName as CollectionName],
          replicationIdentifier: `${collectionName}-replication`,
          live: true,
        })

        // Handle replication events
        replicationState.error$.subscribe((error: Error) => {
          console.error(
            `Replication error for ${collectionName}:`,
            error,
          )
        })

        replicationState.canceled$.subscribe(() => {
          console.log(
            `Replication canceled for ${collectionName}`,
          )
        })
      })

      console.log(
        `RxDB '${project}' initialized with DenoKV storage and server replication`,
      )

      return this.db
    } catch (error) {
      console.error("Error initializing RxDB:", error)
      throw error
    }
  }

  public async destroy(): Promise<void> {
    if (this.db) {
      await this.db.destroy()
      this.db = null
    }
  }
}

export const createRxDBServerService = async (
  project: string,
  serverUrl: string,
): Promise<RxDatabase<OPSAPDatabaseCollections>> => {
  try {
    console.log("Creating RxDB service with:", { project, serverUrl })
    const instance = RxDBService.getInstance()
    return await instance.initialize(project, serverUrl)
  } catch (error) {
    console.error("Failed to create RxDB service:", error)
    throw error
  }
}
