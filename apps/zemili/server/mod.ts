import { Application, Router } from "@oak/oak";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Hello, World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on port 8000");
await app.listen({ port: 8000 });
