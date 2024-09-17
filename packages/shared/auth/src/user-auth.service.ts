/**
 * @file user-auth.ts
 * @description This file contains the UserAuthService class, which provides functionality for user authentication and JWT token management.
 *
 * Example usage:
 *
 * ```typescript
 * import { createUserAuth } from "./user-auth.service.ts";
 *
 * // Create an instance of UserAuthService
 * const userAuth = await createUserAuth("kv://my-kv-store", "my-secret-key");
 *
 * // Sign up a new user
 * await userAuth.signup("user@example.com", "password123");
 *
 * // Log in a user
 * const tokens = await userAuth.login("user@example.com", "password123");
 * if (tokens) {
 *   console.log("Access Token:", tokens.accessToken);
 *   console.log("Refresh Token:", tokens.refreshToken);
 * }
 *
 * // Verify a token
 * const email = await userAuth.verifyToken(tokens.accessToken);
 * if (email) {
 *   console.log("Token is valid for user:", email);
 * }
 *
 * // Refresh tokens
 * const newTokens = await userAuth.refresh(tokens.refreshToken);
 * if (newTokens) {
 *   console.log("New Access Token:", newTokens.accessToken);
 *   console.log("New Refresh Token:", newTokens.refreshToken);
 * }
 * ```
 */
import { hash, verify } from "@ts-rex/bcrypt"

import {
  create,
  verify as jwtVerify,
} from "https://deno.land/x/djwt@v2.8/mod.ts"

interface UserAuthDatabase {
  users: {
    add: (user: any) => Promise<void>
    findBySecondaryIndex: (
      key: string,
      value: any,
    ) => Promise<{ result: any }>
  }
}
/**
 * UserAuthService class for handling user authentication operations.
 */
export class UserAuthService {
  private static instance: UserAuthService | null = null
  private jwtSecret: CryptoKey
  private db: UserAuthDatabase

  /**
   * Private constructor to enforce singleton pattern.
   * @param kv - Deno.Kv instance for key-value storage.
   * @param jwtSecret - CryptoKey for JWT operations.
   * @param db - KvDex database instance.
   */
  private constructor(
    jwtSecret: CryptoKey,
    dbService: UserAuthDatabase,
  ) {
    this.jwtSecret = jwtSecret
    this.db = dbService
  }

  /**
   * Get or create an instance of UserAuthService.
   * @param jwtSecret - Secret key for JWT operations.
   * @param dbService - KvDex database instance.
   * @returns Promise resolving to an UserAuthService instance.
   */
  public static async getInstance(
    jwtSecret: string,
    dbService: UserAuthDatabase,
  ): Promise<UserAuthService> {
    if (!UserAuthService.instance) {
      // jwt needed
      if (!jwtSecret) {
        throw new Error("JWT_SECRET is not set")
      }

      const cryptoKey = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(jwtSecret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign", "verify"],
      )
      UserAuthService.instance = new UserAuthService(
        cryptoKey,
        dbService,
      )
    }
    return UserAuthService.instance
  }

  /**
   * Sign up a new user.
   * @param name - User's name.
   * @param email - User's email.
   * @param password - User's password.
   */
  async signup(
    name: string,
    email: string,
    password: string,
  ) {
    const user = await this.findUserByEmail(email)
    if (user) throw Error(`409 user already exists`)

    const hashedPassword = await hash(password)

    const avatarUrl = `https://ui-avatars.com/api/?name=${
      encodeURIComponent(name.charAt(0))
    }`

    const newUser = {
      name,
      email,
      role: "user",
      username: email,
      avatar_url: avatarUrl,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    await this.db.users.add({
      ...newUser,
      password_hash: hashedPassword,
      terms_of_service: new Date(),
      privacy_policy: new Date(),
      acceptable_use_policy: new Date(),
      data_proccessing_policy: new Date(),
    })

    const accessToken = await this.createToken(newUser, "15m")
    const refreshToken = await this.createToken(newUser, "7d")

    return {
      email,
      role: "user",
      username: email,
      name: name || email,
      accessToken,
      refreshToken,
    }
  }

  /**
   * Log in a user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns Promise resolving to access and refresh tokens if login is successful, null otherwise.
   */
  async login(email: string, password: string) {
    const user = await this.findUserByEmail(email)
    if (!user) return null

    const isValid = await verify(
      password,
      user.password_hash,
    )
    if (!isValid) return null

    const accessToken = await this.createToken(user, "15m")
    const refreshToken = await this.createToken(user, "7d")

    return { accessToken, refreshToken }
  }

  private async findUserByEmail(email: string) {
    const { result } = await this.db.users.findBySecondaryIndex(
      "email",
      email,
    )

    if (!result) return null
    console.log(result)

    return result[0]?.value as { password_hash: string } ?? null
  }

  /**
   * Create a JWT token.
   * @param email - User's email.
   * @param expiresIn - Token expiration time.
   * @param avatarUrl - User's avatar URL.
   * @returns Promise resolving to the created JWT token.
   */
  private async createToken(
    user: unknown,
    expiresIn: string,
  ) {
    const exp = this.getExpirationTime(expiresIn)
    return await create(
      { alg: "HS256", typ: "JWT" },
      { user, exp },
      this.jwtSecret,
    )
  }

  /**
   * Calculate the expiration time for a token.
   * @param duration - Duration string (e.g., "15m", "7d").
   * @returns Expiration time in seconds.
   */
  private getExpirationTime(duration: string): number {
    const now = Math.floor(Date.now() / 1000)
    const [value, unit] = duration.match(/(\d+)([mhd])/)?.slice(1) || []
    const seconds = {
      m: 60,
      h: 3600,
      d: 86400,
    }[unit as "m" | "h" | "d"] || 0
    return now + parseInt(value) * seconds
  }

  /**
   * Verify a JWT token.
   * @param token - JWT token to verify.
   * @returns Promise resolving to the email in the token payload if valid, null otherwise.
   */
  async verifyToken(token: string) {
    try {
      const payload = await jwtVerify(token, this.jwtSecret)
      return payload.email as string
    } catch {
      return null
    }
  }

  /**
   * Refresh access and refresh tokens.
   * @param refreshToken - Current refresh token.
   * @returns Promise resolving to new access and refresh tokens if successful, null otherwise.
   */
  async refresh(refreshToken: string) {
    const email = await this.verifyToken(refreshToken)
    if (!email) return null

    const newAccessToken = await this.createToken(email, "15m")
    const newRefreshToken = await this.createToken(email, "7d")

    return { accessToken: newAccessToken, refreshToken: newRefreshToken }
  }
}

/**
 * Create an instance of UserAuthService.
 * @param kvUrl - URL for the key-value store.
 * @param jwtSecret - Secret key for JWT operations.
 * @returns Promise resolving to an UserAuthService instance.
 */
export async function createUserAuth(
  jwtSecret: string,
  dbService: any,
): Promise<UserAuthService> {
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not set")
  }
  return await UserAuthService.getInstance(jwtSecret, dbService)
}
