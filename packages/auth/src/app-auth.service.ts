/**
 * @file app-auth.ts
 * @description This file contains the AppAuthService class, which provides functionality for managing API keys.
 *
 * Example usage:
 *
 * ```typescript
 * import { createAppAuthService } from "./app-auth.service.ts";
 *
 * // Create an instance of AppAuthService
 * const appAuth = await createAppAuthService("kv://my-kv-store");
 *
 * // Generate a new API key
 * const apiKey = await appAuth.generateApiKey("MyService");
 * console.log("Generated API key:", apiKey);
 *
 * // Validate an API key
 * const isValid = await appAuth.validateApiKey(apiKey);
 * console.log("Is API key valid?", isValid);
 *
 * // List all API keys
 * const apiKeys = await appAuth.listApiKeys();
 * console.log("All API keys:", apiKeys);
 *
 * // Revoke an API key
 * const revoked = await appAuth.revokeApiKey(apiKey);
 * console.log("API key revoked:", revoked);
 * ```
 */

import { hash, verify } from "@ts-rex/bcrypt";

/**
 * AppAuthService class for handling API key operations.
 */
export class AppAuthService {
    private static instance: AppAuthService | null = null;
    private kv: Deno.Kv;

    /**
     * Private constructor to enforce singleton pattern.
     * @param kv - Deno.Kv instance for key-value storage.
     */
    private constructor(kv: Deno.Kv) {
        this.kv = kv;
    }

    /**
     * Get or create an instance of AppAuthService.
     * @param kvUrl - URL for the key-value store.
     * @returns Promise resolving to an AppAuthService instance.
     */
    public static async getInstance(kvUrl: string): Promise<AppAuthService> {
        if (!AppAuthService.instance) {
            const kv = await Deno.openKv(kvUrl);
            AppAuthService.instance = new AppAuthService(kv);
        }
        return AppAuthService.instance;
    }

    /**
     * Generate a new API key for a service.
     * @param serviceName - Name of the service requesting the API key.
     * @returns Promise resolving to the generated API key.
     */
    async generateApiKey(serviceName: string): Promise<string> {
        const apiKey = crypto.randomUUID();
        const hashedApiKey = await hash(apiKey);
        await this.kv.set(["api_keys", hashedApiKey], {
            serviceName,
            createdAt: Date.now(),
        });
        return apiKey;
    }

    /**
     * Validate an API key.
     * @param apiKey - The API key to validate.
     * @returns Promise resolving to a boolean indicating if the API key is valid.
     */
    async validateApiKey(apiKey: string): Promise<boolean> {
        const apiKeys = this.kv.list<
            { serviceName: string; createdAt: number }
        >({ prefix: ["api_keys"] });
        for await (const entry of apiKeys) {
            const [_, hashedApiKey] = entry.key;
            if (await verify(apiKey, hashedApiKey as string)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Revoke an API key.
     * @param apiKey - The API key to revoke.
     * @returns Promise resolving to a boolean indicating if the API key was successfully revoked.
     */
    async revokeApiKey(apiKey: string): Promise<boolean> {
        const apiKeys = this.kv.list<
            { serviceName: string; createdAt: number }
        >({ prefix: ["api_keys"] });
        for await (const entry of apiKeys) {
            const [_, hashedApiKey] = entry.key;
            if (await verify(apiKey, hashedApiKey as string)) {
                await this.kv.delete(["api_keys", hashedApiKey]);
                return true;
            }
        }
        return false;
    }

    /**
     * List all API keys.
     * @returns Promise resolving to an array of API key information.
     */
    async listApiKeys(): Promise<
        Array<{ serviceName: string; createdAt: number }>
    > {
        const apiKeys = this.kv.list<
            { serviceName: string; createdAt: number }
        >({ prefix: ["api_keys"] });
        const result = [];
        for await (const entry of apiKeys) {
            result.push(entry.value);
        }
        return result;
    }
}

/**
 * Create an instance of AppAuthService.
 * @param kvUrl - URL for the key-value store.
 * @returns Promise resolving to an AppAuthService instance.
 */
export async function createAppAuthService(
    kvUrl: string,
): Promise<AppAuthService> {
    return await AppAuthService.getInstance(kvUrl);
}
