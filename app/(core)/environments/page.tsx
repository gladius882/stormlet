import { ApiIcon } from "@/icons";
import { listEnvironments } from "@/modules/environment/lib/environment"
import { EnvironmentType } from "@/modules/environment/types";
import NoEnvironmentsMessage from "@/modules/environment/components/NoEnvironmentsMessage";
import { Add, Key } from "@mui/icons-material";
import { Button, Card, SpeedDial, SpeedDialAction } from "@mui/material";
import Link from "next/link";
import EnvironmentsList from "@/modules/environment/components/EnvironmentsList";

export default async function () {

    const envs: EnvironmentType[] = await listEnvironments();

    if (envs.length === 0) {
        return (
            <div className="w-full h-full">
                {envs.length === 0 && <NoEnvironmentsMessage />}
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center gap-5">

            <div className="w-[80%] flex flex-col gap-5 py-10">

                <div className="w-full">
                    <h1 className="w-full text-3xl">Configured environments</h1>
                </div>

                <EnvironmentsList items={envs} />
            </div>
        </div>
    )
}