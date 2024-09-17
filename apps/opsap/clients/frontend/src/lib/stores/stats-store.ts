import { writable } from "svelte/store"
import type { UserStats } from "@scope/opsap-data"

export const statsStore = writable<{ userStats: UserStats }>({
  userStats: null,
})
