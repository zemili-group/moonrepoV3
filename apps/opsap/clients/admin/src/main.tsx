import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { createRouter, RouterProvider } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen.ts"

// Create a new router instance
const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </React.StrictMode>,
)
