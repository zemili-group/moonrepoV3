import { Context } from "@oak/oak"
import { userStatsService } from "../../services/user-stats.service.ts"

export const getUserStatsHandler = async (ctx: Context) => {
  try {
    const stats = await userStatsService.getUserStats()

    ctx.response.status = 200
    ctx.response.body = {
      message: "User stats retrieved successfully",
      data: stats,
    }
  } catch (error) {
    console.error("Error retrieving user stats:", error)
    ctx.response.status = 500
    ctx.response.body = {
      message: "Failed to retrieve user stats",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
