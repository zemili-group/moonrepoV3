// import {
//     createRxDBService,
//     type OPSAPDatabase,
// } from "../../../../../../../packages/opsap/data/src/rxdb/service/rxdb-server.service.ts";

// export const db: OPSAPDatabase = await createRxDBService(
//     "opsap-backend",
//     "https://api.deno.com/databases/d66de98c-8dfc-4e26-a622-442820e8b99b/connect",
// );
// console.log(Object.keys(db));

// // Create (Insert) operations
// const newUser = await db.users.insert({
//     id: "testUser1",
//     name: "John Doe",
//     email: "john@example.com",
// });

// const newCompany = await db.companies.insert({
//     id: "testCompany1",
//     name: "ACME Corp",
//     address: "123 Main St",
// });

// // Read (Query) operations
// const user = await db.users.findOne({
//     selector: { id: "testUser1" },
// }).exec();

// const companies = await db.companies.find({
//     selector: {},
//     limit: 10,
// }).exec();

// // Update operations
// await db.users.findOne({
//     selector: { id: "testUser1" },
// }).update({
//     $set: { name: "John Smith" },
// });

// // Delete operations
// await db.companies.findOne({
//     selector: { id: "testCompany1" },
// }).remove();

// // Complex query
// const recentNotifications = await db.notifications.find({
//     selector: {
//         createdAt: {
//             $gt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
//         },
//     },
//     sort: [{ createdAt: "desc" }],
//     limit: 5,
// }).exec();

// console.log("Test CRUD operations completed");
