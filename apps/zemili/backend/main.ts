import { createServerService } from "@scope/server";

export const server = createServerService("zemili-backend");

server.addRoute({
  method: "get",
  path: "/",
  handler: (ctx) => {
    ctx.response.body = `
        🚀🚀🚀 Server is running! 🚀🚀🚀
        `;
  },
});

await server.start(3000);
