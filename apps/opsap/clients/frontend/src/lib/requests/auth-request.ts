export async function signup(name: string, email: string, password: string) {
	console.log("Name:", name)
	console.log("Email:", email)
	console.log("Password:", password)

	const url = "http://localhost:3000/signup"

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
				// company,
				// selectedOptions
			}),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const result = await response.json()

		console.log("Server Response:", result)

		return result
	} catch (error) {
		console.error("Error:", error)
		return false
	}
}

export async function login(email: string, password: string) {
	const url = "http://localhost:3000/login"

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const result = await response.json()

		console.log("Server Response:", result)

		return result
	} catch (error) {
		console.error("Error:", error)
		return false
	}
}
