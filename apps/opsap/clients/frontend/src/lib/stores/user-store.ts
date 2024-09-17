import { writable } from "svelte/store"
import { decodeJwt } from "jose"
import type { User } from "@scope/opsap-data"

interface UserSignupResponse {
  message: string
  data: {
    email: string
    role: string
    username: string
    name: string
    accessToken: string
    refreshToken: string
  }
}

export const userStore = writable<User | null>(null)

/**
 * Updates the user in the store and local storage
 * @param user The user object to update with
 */
const updateUser = (user: User) => {
  userStore.set(user)
  setUserLocalStorage(user)
}

/**
 * Decodes a JWT token
 * @param token The token to decode
 * @returns The decoded token payload
 */
const decodeToken = (token: string) => {
  return decodeJwt(token)
}

/**
 * Validates an access token
 * @param accessToken The access token to validate
 * @returns True if the token is valid and not expired, false otherwise
 */
const validateAccessToken = (accessToken: string) => {
  if (!accessToken) return false
  const decodedToken = decodeToken(accessToken)
  const currentTime = Date.now() / 1000
  return decodedToken.exp !== undefined && decodedToken.exp > currentTime
}

/**
 * Initializes the user store from the access token in local storage
 */
const initializeUserStore = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      const isValid = validateAccessToken(accessToken)
      if (isValid) {
        const decodedToken = decodeToken(accessToken)
        userStore.set(decodedToken as User)
      } else {
        clearUser()
      }
    }
  }
}

// Initialize the user store when the module is imported
initializeUserStore()

/**
 * Gets the user from the store
 * @returns The user object or null if not found
 */
const getUser = () => {
  let user: User | null = null
  userStore.subscribe((value) => {
    user = value
  })()
  return user
}

/**
 * Clears the user from the store and local storage
 */
const clearUser = () => {
  clearUserLocalStorage()
  userStore.set(null)
}

/**
 * Sets the user in local storage
 * @param user The user object to store
 */
const setUserLocalStorage = (user: User) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
  }
}

/**
 * Removes the user and access token from local storage
 */
const clearUserLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }
}

/**
 * Checks the authentication status of the user
 *
 * This function performs the following steps:
 * 1. Retrieves the access token from local storage
 * 2. If no access token is found, it clears the user and returns false
 * 3. If an access token is found, it decodes the token
 * 4. If the token can't be decoded or is expired, it clears the user
 *
 * @returns {boolean} Returns false if no access token is found, undefined otherwise
 */
export const authCheck = () => {
  const accessToken = localStorage.getItem("accessToken")

  if (!accessToken) {
    clearUser()
    return false
  }

  const decodedToken = decodeToken(accessToken)

  if (!decodedToken || isTokenExpired(decodedToken as User)) {
    clearUser()
    return false
  }

  return true
}

const isTokenExpired = (decodedToken: User): boolean => {
  if (!decodedToken.exp) return true
  const currentTime = Math.floor(Date.now() / 1000)
  return decodedToken.exp < currentTime
}

/**
 * Processes the signup response and updates the user store
 * @param response The signup response object
 */
export const processSignupResponse = (response: UserSignupResponse) => {
  const { data } = response
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
  }
  const decodedToken = decodeToken(data.accessToken)
  userStore.set(decodedToken as User)
}

/**
 * Returns an object with user store related functions
 * @returns An object containing userStore and related functions
 */
export const useUserStore = () => {
  return {
    userStore,
    updateUser,
    getUser,
    clearUser,
    processSignupResponse,
  }
}
