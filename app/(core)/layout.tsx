import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";
import UserDropdown from "@/modules/profile/components/UserDropdown";
import SidebarNavigation from "@/modules/theme/components/SidebarNavigation";
import TopMenu from "@/modules/theme/components/TopMenu";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-w-[100vw] min-h-[100vh] p-[30px] gap-[30px]">
            <SidebarNavigation />

            <div className="flex flex-col w-full">
                <TopMenu />

                <main className="h-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
