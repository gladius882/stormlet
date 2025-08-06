import { signToken } from "@/lib/jwt";

export const listEnvironments = async() => {

    const headers = new Headers();
    headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImxvZ2luIjoiYWRtaW4iLCJpYXQiOjE3NTM4OTYyNDQsImV4cCI6MTc1Mzg5OTg0NH0.9U0nLVgoSnZEWk5JRQLvaTnKMOJgdIwt-AauU4CWSvI")

    const res = await fetch("http://localhost:3000/api/environments", {
        headers
    })

    return res.json();
}