import { createServerService } from "@scope/shared-server"
import { routes } from "./src/routes/routes.ts"

export const server = createServerService("zemili-backend")

server.addRoute({
  method: "get",
  path: "/",
  handler: (ctx) => {
    ctx.response.body = `
        🚀🚀🚀 Server is running! 🚀🚀🚀
        `
  },
})

server.addRoutes(routes)

await server.start(3000)
