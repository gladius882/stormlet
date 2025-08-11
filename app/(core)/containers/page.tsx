"use client"

import { Card } from "@mui/material"
import { ContainerInfo } from "dockerode"
import { useEffect, useState } from "react"

export default function ContainersList() {

    const [containers, setContainers] = useState<ContainerInfo[]>([])

    useEffect(() => {
        fetch(`/api/containers?env=2`)
            .then(data => data.json())
            .then(data => setContainers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="text-black">
            Containers

            <div className="">
                {containers.map(c => {
                    return (
                        <Card key={c.Id}>
                            <div>{c.Names[0]}</div>
                            <div>{c.Mounts.length}</div>
                            <div>{c.State}</div>
                            <div>{c.Status}</div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}