import { userAuth } from "../../services/user-auth.service.ts"
import { Context } from "@oak/oak"

export const authLoginHandler = async (ctx: Context) => {
  try {
    const { email, password } = await ctx.request.body.json()

    const tokens = await userAuth.login(email, password)

    if (!tokens) {
      ctx.response.status = 401
      ctx.response.body = { message: "Invalid credentials" }
      return
    }

    ctx.response.status = 200
    ctx.response.body = {
      message: "Login successful",
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }
  } catch (error) {
    console.error(error)
    ctx.response.status = 500
    ctx.response.body = { message: "Internal server error" }
  }
}
