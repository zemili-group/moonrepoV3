import { createUserAuth } from "@scope/shared-auth"
import { config } from "../config/config.ts"

export const userAuth = await createUserAuth(
  config.getDenoKvUrl()!,
  config.getJwtSecret()!,
  config.getDenoKvToken()!,
)
