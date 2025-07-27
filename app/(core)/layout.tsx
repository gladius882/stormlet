import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";
import UserDropdown from "@/modules/profile/components/UserDropdown";
import SidebarNavigation from "@/modules/theme/components/SidebarNavigation";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-w-[100vw] min-h-[100vh]">
            <SidebarNavigation />

            <div className="flex flex-col w-full">

                <div className="sticky bg-emerald-800 text-gray-50 flex items-center justify-between px-5">

                    <EnvironmentSelector />
                    <UserDropdown />
                </div>

                <main className="bg-gray-50 h-full">
                    {children}
                </main>

                <footer>
                    footer
                </footer>
            </div>
        </div>
    );
}
