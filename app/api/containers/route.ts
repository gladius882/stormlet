"use server"

import Docker from "dockerode"
import { NextResponse } from "next/server"

export async function GET() {
  const docker = new Docker({
    host: "192.168.0.24",
    port: "2375"
  })
  const containers = await docker.listContainers()
  return NextResponse.json(containers)
}