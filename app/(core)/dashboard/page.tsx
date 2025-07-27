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
        <div className="flex min-w-[100vw] min-h-[100vh]">
            <SidebarNavigation />

            <div className="flex flex-col w-full">

                <div className="sticky bg-emerald-800 text-gray-50 flex items-center justify-between px-5">

                    <EnvironmentSelector />
                    <UserDropdown />
                </div>

                <main className="bg-gray-50 h-full">
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
                </main>

                <footer>
                    footer
                </footer>
            </div>
        </div>
    )
}