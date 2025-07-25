"use server"

import Docker from "dockerode"
import { NextResponse } from "next/server"

export async function GET() {
  const docker = new Docker({ socketPath: "/var/run/docker.sock" })
  const containers = await docker.listContainers()
  return NextResponse.json(containers)
}