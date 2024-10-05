import React from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <p>This is the home page of the OPSAP admin client.</p>
      {/* Add more content for the home page as needed */}
    </div>
  )
}
