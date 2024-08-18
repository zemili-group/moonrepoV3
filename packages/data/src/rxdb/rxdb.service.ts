/**
 * RxDBService: A singleton class for managing an RxDB database with DenoKV storage.
 *
 * Usage example:
 *
 * import { createRxDBService } from "./rxdb.service.ts";
 *
 * const rxdbService = await createRxDBService("myDatabase", "/path/to/kv");
 * const db = rxdbService.getDatabase();
 *
 * // Use the database
 * const myCollection = await db.addCollections({
 *   users: {
 *     schema: mySchema
 *   }
 * });
 *
 * // Perform database operations
 * await myCollection.users.insert({ id: 'user1', name: 'John Doe' });
 *
 * // When done, destroy the database
 * await rxdbService.destroy();
 */
import { createRxDatabase, type RxDatabase } from "npm:rxdb";
import { getRxStorageDenoKV } from "npm:rxdb/plugins/storage-denokv";

class RxDBService {
    private static instance: RxDBService | null = null;
    private db: RxDatabase | null = null;

    private constructor() {}

    public static getInstance(): RxDBService {
        if (!RxDBService.instance) {
            RxDBService.instance = new RxDBService();
        }
        return RxDBService.instance;
    }

    public async initialize(
        name: string,
        kvPath: string = "",
    ): Promise<RxDatabase> {
        if (this.db) {
            console.warn("Database already initialized");
            return this.db;
        }

        this.db = await createRxDatabase({
            name,
            // @ts-ignore: DenoKV types are playing up
            storage: getRxStorageDenoKV({
                consistencyLevel: "strong",
                openKvPath: kvPath,
                batchSize: 100,
            }),
            multiInstance: true,
            eventReduce: true,
        });

        console.log("RxDB initialized with DenoKV storage");
        return this.db;
    }

    public async destroy(): Promise<void> {
        if (this.db) {
            await this.db.destroy();
            this.db = null;
        }
    }
}

export const createRxDBService = async (
    name: string,
    kvPath: string = "",
): Promise<RxDatabase> => {
    try {
        const instance = RxDBService.getInstance();
        return await instance.initialize(name, kvPath);
    } catch (error) {
        console.error("Failed to create RxDB service:", error);
        throw error; // Re-throw the error after logging
    }
};
