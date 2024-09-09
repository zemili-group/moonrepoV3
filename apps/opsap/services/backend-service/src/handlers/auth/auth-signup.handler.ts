import { Context } from "@oak/oak"
import { userAuth } from "../../services/user-auth.service.ts"

export const authSignupHandler = async (ctx: Context) => {
  const { email, password } = await ctx.request.body.json()

  try {
    const user = await userAuth.signup(email, password)

    ctx.response.status = 201
    ctx.response.body = { message: "User registered successfully", data: user }
  } catch (error: any) {
    ctx.response.status = 400
    ctx.response.body = { message: "Registration failed", error: error.message }
  }
}
