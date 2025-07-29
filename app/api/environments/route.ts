import { PrismaClient } from "@/app/generated/prisma";
import { EnvironmentType } from "@/modules/environment/types";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: Request) => {

    const prisma = new PrismaClient();

    const envs = await prisma.environment.findMany();

    return NextResponse.json(envs);
}

export const POST = async (req: NextRequest) => {
    const prisma = new PrismaClient();
    const body = await req.json() as Partial<EnvironmentType>;

    if (!body.name) {
        return NextResponse.json({
            error: true,
            message: "There is no `name` property in body"
        });
    }

    const result = await prisma.environment.create({
        data: {
            ...body,
            id: undefined,
            name: body.name
        }
    })

    if (!result) {
        return NextResponse.json({
            error: true,
            message: "Error while adding new environment"
        })
    }

    return NextResponse.json({ ...result }, {
        status: 201
    });
}