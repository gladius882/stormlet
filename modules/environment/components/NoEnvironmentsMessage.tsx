import { DockerWarningIcon } from "@/icons";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function () {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="text-center flex flex-col gap-5">
                <div className="flex justify-center">
                    <DockerWarningIcon width={200} height={140} className="fill-emerald-600" />
                </div>

                <div className="text-xl">
                    There is no environemnt defined
                </div>

                <Link href="/environments/new">
                    <Button size="large" variant="outlined" color="success">
                        Add your first environment
                    </Button>
                </Link>
            </div>
        </div>
    )
}