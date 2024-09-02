import { createServerService } from "@scope/shared/server";
import { createRxDBService, OPSAPDatabase } from "@scope/opsap/data";
import { CollectionName } from "@scope/opsap/data/src/rxdb/models/models";

let db: OPSAPDatabase;

export const server = createServerService("opsap-sync-service");

// Home route: Displays a simple message indicating the server is running
server.addRoute({
  method: "GET",
  path: "/",
  handler: (ctx) => {
    ctx.response.body = `
        🚀🚀🚀 Server is running! 🚀🚀🚀
        `;
  },
});

erver.addRoute({
  method: "POST", // Use POST as the standard for syncing data
  path: "/db-sync/:collectionName",
  handler: async (ctx) => {
    const collectionName = ctx.params?.collectionName as CollectionName;
    const collections = Object.values(CollectionName);

    if (!collections.includes(collectionName)) {
      ctx.response.status = 400;
      ctx.response.body = "Invalid collection name";
      return;
    }

    try {
      if (!db) {
        db = await createRxDBService(
          "opsap-sync-service",
          "https://api.deno.com/databases/d66de98c-8dfc-4e26-a622-442820e8b99b/connect", // Adjust to your actual connection string
        );
      }

      // Set up replication with standard RxDB logic
      const replicationState = db.collections[collectionName]
        .replicateWithServer({
          url: `https://opsap-sync-service.deno.dev/db-sync/${collectionName}`, // Match this to your client sync URL
          live: true,
          pull: {
            batchSize: 100,
          },
          push: {
            batchSize: 100,
          },
        });

      // Handle replication events
      replicationState.error$.subscribe((error) => {
        console.error(`Replication error for ${collectionName}:`, error);
      });

      ctx.response.status = 200;
      ctx.response.body = "Sync initiated successfully";
    } catch (error) {
      console.error(`Sync error for ${collectionName}:`, error);
      ctx.response.status = 500;
      ctx.response.body = "Sync error";
    }
  },
});

await server.start(3000);
