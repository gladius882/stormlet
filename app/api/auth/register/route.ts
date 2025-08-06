import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@/app/generated/prisma";

export async function POST(req: Request) {
    const body = await req.json();
    const { login, password, email } = body;

    if (!login) {
        return NextResponse.json({ error: "No login provided" }, { status: 400 });
    }

    if (!password) {
        return NextResponse.json({ error: "No password provided" }, { status: 400 });
    }
    if (!email) {
        return NextResponse.json({ error: "No email provided" }, { status: 400 });
    }



    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst({
        where: {
            login
        }
    })

    if (user) {
        return NextResponse.json({ error: "User if that login already exist" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name: login,
            email: email,
            login: login,
            password: hashed
        }
    })

    return NextResponse.json({ success: true });
}
