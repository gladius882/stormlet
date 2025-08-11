import { PrismaClient } from "@/app/generated/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { nextAuth } from "@/lib/nextAuthOptions";

const handler = NextAuth(nextAuth)

export { handler as GET, handler as POST }