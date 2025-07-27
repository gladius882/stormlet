import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {

    const prisma = new PrismaClient();

    const envs = await prisma.environment.findMany();

    return NextResponse.json(envs);
}