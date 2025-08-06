"use server"

import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server"
import Docker from "dockerode"

export async function GET(req: NextRequest) {

	const params = req.nextUrl.searchParams;

	if (params.has('env') === false) {
		return NextResponse.json({
			error: true,
			message: "There is no `env` param query"
		}, { status: 400 })
	}

	const env_id = params.get('env') as string;

	const prisma = new PrismaClient();

	const env = await prisma.environment.findFirst({
		where: {
			id: parseInt(env_id)
		}
	})

	if (env === null) {
		return NextResponse.json({
			error: true,
			message: `Can't load environment with ID ${env_id}`,
		}, { status: 400 })
	}

	const docker = new Docker({
		host: env.host as string,
		port: env.port as number
	})

	const info = await docker.info()
	return NextResponse.json(info)
}