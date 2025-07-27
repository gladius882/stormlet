import { PrismaClient } from "@/app/generated/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: { label: "Login", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.login || !credentials?.password) {
                    return null;
                }

                const prisma = new PrismaClient();
                prisma.$connect();

                const user = await prisma.user.findFirst({
                    where: {
                        login: credentials.login
                    }
                })

                console.log(user);
                

                if (!user) return null;

                
                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                
                console.log(passwordMatch);

                if (!passwordMatch) return null;

                return {
                    id: String(user.id),
                    name: user.login,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/sign-in",
    },
})

export { handler as GET, handler as POST }