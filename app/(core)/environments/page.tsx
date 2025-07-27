import { ApiIcon } from "@/icons";
import { listEnvironments } from "@/modules/environment/lib/environment"
import { EnvironmentType } from "@/modules/environment/types";
import NoEnvironmentsMessage from "@/modules/environment/components/NoEnvironmentsMessage";
import { Add, Key } from "@mui/icons-material";
import { Button, Card, SpeedDial, SpeedDialAction } from "@mui/material";
import Link from "next/link";

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

            <SpeedDial
                ariaLabel="Environments speed dial"
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
                icon={<Add />}
                color="success"
            >
            </SpeedDial>

            <div className="w-[80%] flex flex-col gap-5 py-10">

                <div className="w-full">
                    <h1 className="w-full text-3xl">Configured environments</h1>
                </div>

                {envs.map(e => {
                    return (
                        <Card key={e.id} className="flex p-5">
                            <div className="w-[100px] flex justify-center items-center border-r-2 border-gray-300">
                                <ApiIcon width={80} height={80} className="fill-emerald-600" />
                            </div>

                            <div className="w-6/8 px-5 flex flex-col">
                                <h2 className="text-2xl">
                                    <Link href={`/environments/${e.id}`}>
                                        {e.name}
                                        {e.cert && <Key color="warning" className="ml-3" />}
                                    </Link>
                                </h2>
                                <div>
                                    {e.host}:{e.port}
                                    {e.socket}
                                </div>
                            </div>

                            <div className="w-calc(1/8-100px)">
                                <Button variant="outlined" color="error">Delete</Button>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}