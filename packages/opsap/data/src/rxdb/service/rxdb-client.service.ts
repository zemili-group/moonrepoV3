// import { createRxDatabase, type RxDatabase } from "npm:@rxdb/rxdb";
// import { getRxStoragePouch } from "npm:@rxdb/storage-pouch";
// import { syncRest } from "npm:@rxdb/replication-rest";
// import {
//   type CollectionName,
//   type OPSAPDatabaseCollections,
//   schemas,
// } from "../models/models.ts";

// const createRxDBService = async (
//   project: string,
// ): Promise<RxDatabase<OPSAPDatabaseCollections>> => {
//   const db = await createRxDatabase<OPSAPDatabaseCollections>({
//     name: project,
//     storage: getRxStoragePouch("idb"), // IndexedDB storage for browser
//   });

//   // Define your collections and their schemas
//   await db.addCollections(schemas);

//   // Set up REST replication for each collection with the sync service
//   const setupCollectionReplication = (collectionName: CollectionName) => {
//     const replicationState = syncRest({
//       url: `https://opsap-sync-service.deno.dev/db-sync/${collectionName}`, // Pointing to the deployed sync service
//       collection: db[collectionName],
//       live: true, // Keep it live for continuous replication
//       retryTime: 5000, // Retry every 5 seconds if the connection fails
//       pull: {
//         batchSize: 100,
//       },
//       push: {
//         batchSize: 100,
//       },
//     });

//     // Optional: Log replication events
//     replicationState.error$.subscribe((error: any) => {
//       console.error(`Replication error in ${collectionName}:`, error);
//     });

//     replicationState.active$.subscribe((active: boolean) => {
//       console.log(
//         `Replication ${active ? "started" : "stopped"} for ${collectionName}`,
//       );
//     });
//   };

//   // List of collections
//   const collections: CollectionName[] = Object.keys(
//     schemas,
//   ) as CollectionName[];
//   collections.forEach(setupCollectionReplication);

//   console.log(
//     `Client-side database '${project}' initialized and replication started.`,
//   );
//   return db;
// };

// export { createRxDBService };
