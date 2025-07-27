import SidebarNavigation from "@/modules/theme/components/SidebarNavigation";
import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";
import UserDropdown from "@/modules/profile/components/UserDropdown";
import { listEnvironments } from "@/modules/environment/lib/environment";
import { EnvironmentType } from "@/modules/environment/types";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function Dashboard() {

    const envs: EnvironmentType[] = await listEnvironments();

    return (
        <div className="w-full h-full">
            {envs.length === 0 && (
                <div className="w-full h-full flex justify-center items-center">
                    <div className="text-center">
                        <div className="text-xl mb-3">
                            There is no environemnt defined
                        </div>
                        <Link href="/environments/new">
                            <Button size="large" variant="outlined" color="success">
                                Add your first environment
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}