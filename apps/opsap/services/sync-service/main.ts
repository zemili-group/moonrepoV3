import { replicateRxCollection } from "npm:rxdb/plugins/replication"
import { createServerService } from "@scope/shared-server"
import { createRxDBServerService } from "@scope/opsap-data"
import {
  CollectionName,
  OPSAPDatabaseCollections,
  schemas,
} from "@scope/opsap-data"
import { RxDatabase } from "npm:rxdb"

let db: RxDatabase<OPSAPDatabaseCollections>

export const server = createServerService("opsap-sync-service")

// Home route: Displays a simple message indicating the server is running
server.addRoute({
  method: "get",
  path: "/",
  handler: (ctx) => {
    ctx.response.body = `
        🚀🚀🚀 Server is running! 🚀🚀🚀
        `
  },
})

server.addRoute({
  method: "all", // Use POST as the standard for syncing data
  path: "/db-sync/:collectionName",
  handler: async (ctx) => {
    const collectionName = (ctx as any).params?.collectionName as CollectionName

    if (!collectionName) {
      ctx.response.status = 400
      ctx.response.body = "Invalid collection name"
      return
    }

    const collections = Object.keys(schemas)

    if (!collections.includes(collectionName)) {
      ctx.response.status = 400
      ctx.response.body = "Invalid collection name"
      return
    }

    try {
      if (!db) {
        db = await createRxDBServerService(
          "opsap-sync-service",
          "https://api.deno.com/databases/d66de98c-8dfc-4e26-a622-442820e8b99b/connect", // Adjust to your actual connection string
        )
      }

      // Set up replication with standard RxDB logic
      const replicationState = replicateRxCollection({
        collection: db.collections[collectionName],
        replicationIdentifier: `${collectionName}-replication`,
        live: true,
      })

      // Handle replication events
      replicationState.error$.subscribe((error: unknown) => {
        console.error(
          `Replication error for ${collectionName}:`,
          error,
        )
      })

      ctx.response.status = 200
      ctx.response.body = "Sync initiated successfully"
    } catch (error) {
      console.error(`Sync error for ${collectionName}:`, error)
      ctx.response.status = 500
      ctx.response.body = "Sync error"
    }
  },
})

await server.start(3001)
