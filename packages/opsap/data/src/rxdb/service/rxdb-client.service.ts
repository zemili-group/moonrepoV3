import { createRxDatabase, type RxDatabase } from "npm:rxdb"
import { getRxStorageDexie } from "npm:rxdb/plugins/storage-dexie"
import { replicateRxCollection } from "npm:rxdb/plugins/replication"
import {
  type CollectionName,
  type OPSAPDatabaseCollections,
  schemas,
} from "../models/models.ts"

const createRxDBClientService = async (
  project: string,
): Promise<RxDatabase<OPSAPDatabaseCollections>> => {
  const db = await createRxDatabase<OPSAPDatabaseCollections>({
    name: project,
    storage: getRxStorageDexie(), // IndexedDB storage for browser
  })

  // Define your collections and their schemas
  await db.addCollections(schemas)

  // Set up REST replication for each collection with the sync service
  const setupCollectionReplication = (collectionName: CollectionName) => {
    const replicationState = replicateRxCollection({
      replicationIdentifier:
        `https://opsap-sync-service.deno.dev/db-sync/${collectionName}`, // Pointing to the deployed sync service
      collection: db[collectionName],
      live: true, // Keep it live for continuous replication
      retryTime: 5000, // Retry every 5 seconds if the connection fails
    })

    // Optional: Log replication events
    replicationState.error$.subscribe((error: Error) => {
      console.error(`Replication error in ${collectionName}:`, error)
    })

    replicationState.active$.subscribe((active: boolean) => {
      console.log(
        `Replication ${active ? "started" : "stopped"} for ${collectionName}`,
      )
    })
  }

  // List of collections
  const collections = Object.keys(schemas) as (keyof typeof schemas)[]
  collections.forEach(setupCollectionReplication)

  console.log(
    `Client-side database '${project}' initialized and replication started.`,
  )
  return db
}

export { createRxDBClientService }
