// src/lib/api.ts
export async function login(email: string, password: string) {
    const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        return await response.json(); // success
    } else {
        throw new Error("Invalid credentials");
    }
}
