import { createServerService } from "@scope/shared-server"

export const server = createServerService("zemili-backend")

// testing change detection

server.addRoute({
  method: "get",
  path: "/",
  handler: (ctx) => {
    ctx.response.body = `
        🚀🚀🚀 Server is running! 🚀🚀🚀
        `
  },
})

await server.start(3000)
