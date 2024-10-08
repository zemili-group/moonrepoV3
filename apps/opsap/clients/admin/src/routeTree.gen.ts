/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as LoginImport } from "./routes/login"

// Create Virtual Routes

const AboutLazyImport = createFileRoute("/about")()
const IndexLazyImport = createFileRoute("/")()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: "/about",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then((d) => d.Route))

const LoginRoute = LoginImport.update({
  path: "/login",
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    "/login": {
      id: "/login"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    "/about": {
      id: "/about"
      path: "/about"
      fullPath: "/about"
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexLazyRoute
  "/login": typeof LoginRoute
  "/about": typeof AboutLazyRoute
}

export interface FileRoutesByTo {
  "/": typeof IndexLazyRoute
  "/login": typeof LoginRoute
  "/about": typeof AboutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/": typeof IndexLazyRoute
  "/login": typeof LoginRoute
  "/about": typeof AboutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: "/" | "/login" | "/about"
  fileRoutesByTo: FileRoutesByTo
  to: "/" | "/login" | "/about"
  id: "__root__" | "/" | "/login" | "/about"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginRoute: typeof LoginRoute
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginRoute: LoginRoute,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
