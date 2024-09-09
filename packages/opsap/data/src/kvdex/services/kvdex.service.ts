import { collection, kvdex, model } from "jsr:@olli/kvdex"
import { UserModel } from "../models/user.model.ts"

/**
 * KvDex Database Configuration and Usage Examples
 *
 * This file sets up the KvDex database and provides examples of how to use it.
 *
 * Usage Examples:
 *
 * 1. Adding a user:
 *    const newUser = {
 *      id: auto-generated by the idGenerator function
 *      email: "user@example.com",
 *      username: "exampleuser",
 *      name: "John Doe",
 *      password_hash: "hashedpassword",
 *      role: "user",
 *      terms_of_service: new Date(),
 *      privacy_policy: new Date(),
 *      created_at: new Date().toISOString(),
 *      updated_at: new Date().toISOString()
 *    }
 *    await db.users.add(newUser)
 *
 * 2. Finding a user by ID:
 *    const user = await db.users.find("some-uuid")
 *
 * 3. Querying users by secondary index:
 *    const adminUsers = await db.users.findBySecondaryIndex("role", "admin")
 *
 * 4. Updating a user:
 *    await db.users.update("some-uuid", { email: "newemail@example.com" })
 *
 * 5. Deleting a user:
 *    await db.users.delete("some-uuid")
 */

// TODO: Replace 'kv' with the actual Deno.Kv instance
let kv: Deno.Kv

export const createKvDexService = async (db?: Deno.Kv) => {
  if (!db) {
    kv = await Deno.openKv()
  }
  return kvdex(kv, {
    numbers: collection(model<number>()),
    serializedStrings: collection(model<string>(), {
      serialize: "json",
    }),
    users: collection(UserModel, {
      idGenerator: () => crypto.randomUUID(),
      history: true,
      indices: {
        id: "primary", // unique, primary index for fast lookups by ID
        email: "secondary", // unique, for efficient querying by email
        username: "secondary", // unique, for efficient querying by username
        role: "secondary", // non-unique, for filtering users by role
        email_verified: "secondary", // non-unique, for filtering verified users
        age: "secondary", // non-unique, for filtering or sorting users by age
        first_language: "secondary", // non-unique, for filtering users by language
        timezone: "secondary", // non-unique, for filtering users by timezone
        currency: "secondary", // non-unique, for filtering users by currency
        "address.country": "secondary", // non-unique, for filtering users by country
        "address.city": "secondary", // non-unique, for filtering users by city
      },
    }),
    // Nested collections
    nested: {
      strings: collection(model<string>()),
    },
  })
}
