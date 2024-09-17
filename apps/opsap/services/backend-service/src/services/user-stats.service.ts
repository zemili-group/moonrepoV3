import { createKvDexService } from "@scope/opsap-data"
import { type UserStats } from "@scope/opsap-data"

export const kvdexService = createKvDexService()

export class UserStatsService {
  private static readonly STATS_ID = "user-stats"

  constructor(
    private kvdexService: Awaited<ReturnType<typeof createKvDexService>>,
  ) {}

  async incrementTotalUsers(): Promise<void> {
    try {
      const stats = await this.kvdexService.userStats.getOne()
      const currentStats = stats?.value as UserStats | undefined

      if (!currentStats) {
        await this.initializeStats()
        return
      } else {
        await this.kvdexService.userStats.updateOne({
          total_users: currentStats.total_users + 1,
          unverified_users: currentStats?.unverified_users + 1,
          last_updated: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error("Error incrementing total users:", error)
      throw new Error("Failed to increment total users")
    }
  }

  async getUserStats(): Promise<UserStats | undefined> {
    try {
      const stats = await this.kvdexService.userStats.getOne()
      return stats?.value as UserStats | undefined
    } catch (error) {
      console.error("Error getting user stats:", error)
      throw new Error("Failed to get user stats")
    }
  }

  private async initializeStats(): Promise<void> {
    await this.kvdexService.userStats.add({
      id: UserStatsService.STATS_ID,
      total_users: 1,
      active_users: 0,
      verified_users: 0,
      unverified_users: 1,
      last_updated: new Date().toISOString(),
    })
  }
}

export const userStatsService = new UserStatsService(await kvdexService)
