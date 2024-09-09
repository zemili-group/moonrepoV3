import { createUserAuth } from "@scope/shared-auth"
import { createKvDexService } from "@scope/opsap-data"
import { config } from "../config/config.ts"

const kvdexService = await createKvDexService()

export const userAuth = await createUserAuth(
  config.getJwtSecret()!,
  kvdexService,
)
