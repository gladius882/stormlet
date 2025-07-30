"use server"

import { PrismaClient } from "@/app/generated/prisma";
import Docker from "dockerode"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

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

	const containers = await docker.listContainers()
	return NextResponse.json(containers)
}