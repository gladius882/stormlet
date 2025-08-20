import Image from "next/image";

import logo from "@/images/logo-transparent.png"
import { Divider } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function SidebarNavigation() {
    return (
        <nav className="w-[350px] flex flex-col bg-[#060B16] rounded-[30px] gap-2 px-3 py-5">
            <div className="self-center mb-5">
                <Image width={180} src={logo} alt="" />
            </div>

            <Divider />

            <SidebarItem href="/dashboard" text="Dashboard" />
            <SidebarItem href="/containers" text="Containers" />
            <SidebarItem href="/volumes" text="Volumes" />
            <SidebarItem href="/networks" text="Networks" />

            <Divider></Divider>

            <SidebarItem href="/environments" text="Environments" />
        </nav>
    )
}