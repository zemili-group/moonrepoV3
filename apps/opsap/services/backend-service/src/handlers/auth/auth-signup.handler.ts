import { Context } from "@oak/oak"
import { userAuth } from "../../services/user-auth.service.ts"
import { userStatsService } from "../../services/user-stats.service.ts"

export const authSignupHandler = async (ctx: Context) => {
  const { name, email, password } = await ctx.request.body.json()

  try {
    const user = await userAuth.signup(name, email, password)
    await userStatsService.incrementTotalUsers()

    ctx.response.status = 201
    ctx.response.body = { message: "User registered successfully", data: user }
  } catch (error) {
    ctx.response.status = 400
    ctx.response.body = {
      message: "Registration failed",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
