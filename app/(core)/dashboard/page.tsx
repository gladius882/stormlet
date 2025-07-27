import { listEnvironments } from "@/modules/environment/lib/environment";
import { EnvironmentType } from "@/modules/environment/types";
import { Button } from "@mui/material";
import Link from "next/link";

import { DockerWarningIcon } from "@/icons";
import NoEnvironmentsMessage from "@/modules/environment/components/NoEnvironmentsMessage";

export default async function Dashboard() {

    const envs: EnvironmentType[] = await listEnvironments();

    return (
        <div className="w-full h-full">
            {envs.length === 0 && <NoEnvironmentsMessage />}

        </div>
    )
}