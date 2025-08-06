import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "./jwt"

type VerificationResult = {
  success: boolean,
  message?: string,
  user?: any
}

export function requireBearerToken(req: NextRequest): VerificationResult {
  const auth = req.headers.get("Authorization")

  console.log({
    auth
  })

  if (!auth?.startsWith("Bearer ")) {
    return {
      success: false,
      message: "Missing token"
    }
  }
  
  const token = auth.slice(7)

  try {
    const user = verifyToken(token)
    return {
      success: true,
      user
    }
  } catch (err) {
    return {
      success: false,
      message: "Invalid token"
    }
  }
}
