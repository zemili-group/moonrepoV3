export async function getStats(statsId: "users") {
  const url = `http://localhost:3000/stats/${statsId}`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    return result
  } catch (error) {
    console.error("Error:", error)
    return false
  }
}
