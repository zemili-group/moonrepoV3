import { Route } from "@scope/shared-server"
import { authLoginHandler } from "../handlers/auth/auth-login.handler.ts"
import { authSignupHandler } from "../handlers/auth/auth-signup.handler.ts"

export const routes: Route[] = [
  {
    method: "post",
    path: "/login",
    handler: authLoginHandler,
  },
  {
    method: "post",
    path: "/signup",
    handler: authSignupHandler,
  },
]
