"use client"

import { useEffect, useState } from "react";
import { EnvironmentType } from "../types";
import Select from "@/modules/common/components/form/Select";

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
            <Select options={envs.map(e => {
                return {
                    key: e.name,
                    value: e.id
                }
            })} />
        </div>
    )
}