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

    try {
        const result = await prisma.environment.delete({
            where: {
                id: parseInt(id)
            }
        })
    } catch(err) {
        return NextResponse.json({
            ...err
        }, {
            status: err.code === "P2025" ? 404 : 400
        })
    }

    return NextResponse.json({
        message: "OK"
    })
}