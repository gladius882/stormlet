import { PrismaClient } from "@/app/generated/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";

export const nextAuth = {
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
    callbacks: {
        async session({ session, token }) {

            const prisma = new PrismaClient();
            prisma.$connect();

            const personalToken = await prisma.personalToken.findFirst({
                where: {
                    user_id: parseInt(token.id)
                }
            })

            if (!personalToken) return session;

            session.token = personalToken.token;

            return session;
        },
        async jwt({ token, user }) {

            const prisma = new PrismaClient();
            prisma.$connect();

            if (user) {
                const personalToken = await prisma.personalToken.findFirst({
                    where: {
                        user_id: token.id
                    }
                })
                token.id = user.id;
                token.token = personalToken?.token || null
            }

            return token;
        }
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/",
    },
} as AuthOptions