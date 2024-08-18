/**
 * ServerService: A singleton class for managing an Oak-based HTTP server.
 *
 * Usage example:
 *
 * import { getServerService, Route } from "./server.service.ts";
 *
 * const server = getServerService();
 *
 * const routes: Route[] = [
 *   {
 *     method: "get",
 *     path: "/api/hello",
 *     handler: (ctx) => {
 *       ctx.response.body = "Hello, World!";
 *     },
 *   },
 *   // ... more routes ...
 * ];
 *
 * server.addRoutes(routes);
 *
 * server.addMiddleware(async (ctx, next) => {
 *   console.log(`Request received: ${ctx.request.method} ${ctx.request.url}`);
 *   await next();
 * });
 *
 * server.start(8000);
 */

import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import type { Context } from "jsr:@oak/oak/context";
import { cors, type CorsOptions } from "@momiji/cors/";

/**
 * Represents a route handler function.
 */
export type RouteHandler = (ctx: Context) => Promise<void> | void;

/**
 * Represents a route configuration.
 */
export interface Route {
    method: "get" | "post" | "put" | "delete" | "patch";
    path: string;
    handler: RouteHandler;
}

/**
 * Default CORS options for the server.
 */
export const corsOptions: CorsOptions = {
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Content-Type", "Authorization"],
};

/**
 * ServerService class for managing the server application.
 */
export class ServerService {
    private static instance: ServerService | null = null;
    private app: Application;
    private router: Router;

    private constructor() {
        this.app = new Application();
        this.router = new Router();

        // Add default middleware
        this.app.use(cors(corsOptions)); // Enable CORS
        this.app.use(async (ctx: Context, next: () => Promise<unknown>) => {
            await next();
            const rt = ctx.response.headers.get("X-Response-Time");
            console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
        });

        this.app.use(async (ctx: Context, next: () => Promise<unknown>) => {
            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            ctx.response.headers.set("X-Response-Time", `${ms}ms`);
        });
    }

    /**
     * Gets the singleton instance of ServerService.
     * @returns The ServerService instance.
     */
    public static getInstance(): ServerService {
        if (!ServerService.instance) {
            ServerService.instance = new ServerService();
        }
        return ServerService.instance;
    }

    /**
     * Adds a single route to the server.
     * @param route The route configuration to add.
     */
    public addRoute(route: Route): void {
        this.router[route.method](route.path, route.handler);
    }

    /**
     * Adds multiple routes to the server.
     * @param routes An array of route configurations to add.
     */
    public addRoutes(routes: Route[]): void {
        routes.forEach((route) => this.addRoute(route));
    }

    /**
     * Adds middleware to the server.
     * @param middleware The middleware function to add.
     */
    public addMiddleware(
        middleware: (
            ctx: Context,
            next: () => Promise<unknown>,
        ) => Promise<void> | void,
    ): void {
        this.app.use(middleware);
    }

    /**
     * Starts the server on the specified port.
     * @param port The port number to listen on.
     */
    public async start(port: number): Promise<void> {
        // Add router middleware
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods());

        console.log(`Server running on http://localhost:${port}`);
        await this.app.listen({ port });
    }
}

/**
 * Gets the ServerService instance.
 * @returns The ServerService instance.
 */
export function getServerService(): ServerService {
    return ServerService.getInstance();
}
