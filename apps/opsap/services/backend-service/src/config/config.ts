import "jsr:@std/dotenv/load"

class Config {
  private static instance: Config

  private constructor() {}

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config()
    }
    return Config.instance
  }

  getDenoKvUrl(): string {
    return Deno.env.get("DENO_KV_URL") || ""
  }

  getJwtSecret(): string {
    return Deno.env.get("JWT_SECRET") || ""
  }

  getDenoKvToken(): string {
    return Deno.env.get("DENO_KV_TOKEN") || ""
  }
}

export const config = Config.getInstance()
