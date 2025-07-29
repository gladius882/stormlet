import { PrismaClient } from "@/app/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    request: Request,
    { params }: { params: { 
        id: string 
    } 
}) {
    const id = params.id;

    const prisma = new PrismaClient();

    const result = await prisma.environment.delete({
        where: {
            id: parseInt(id)
        }
    })

    if(!result) {
        return NextResponse.json({
            error: true,
            message: `Cant' delete encironment #${id}`
        })
    }

    return NextResponse.json({
        message: "OK"
    })
}