"use client"

import { useEffect, useState } from "react";
import { EnvironmentType } from "../types";

export default function EnvironmentSelector() {

    const [envs, setEnvs] = useState<EnvironmentType[]>([]);

    useEffect(() => {
        fetch("/api/environments")
            .then((res) => res.json())
            .then((data) => {
                setEnvs(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="flex gap-2 items-center min-w-[240px]">
            <select className="bg-emerald-300 h-full w-full text-gray-900 rounded-sm p-2">
                {envs.length === 0 && <option key={0} value="0">NO ENVIRONMENT</option>}
                {envs.map(e => {
                    return (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    )
                })}
            </select>
        </div>
    )
}