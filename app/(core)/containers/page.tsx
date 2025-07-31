"use client"

import { useEffect, useState } from "react"

export default function ContainersList() {

    const [containers, setContainers] = useState()

    useEffect(() => {
        fetch(`/api/containers?env=2`)
            .then(data => data.json())
            .then(data => setContainers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            Containers

            <div>
                {JSON.stringify(containers)}
            </div>
        </div>
    )
}