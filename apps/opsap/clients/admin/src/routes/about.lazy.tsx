import React from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      <h1>About OPSAP Admin</h1>
      <h2>Our Mission</h2>
      <p>Empowering administrators with efficient tools.</p>
    </div>
  )
}
