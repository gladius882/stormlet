import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo-transparent.png"
import { Divider } from "@mui/material";
import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";

export default function SidebarNavigation() {
    return (
        <nav className="w-[350px] flex flex-col bg-[#060B16] rounded-[30px] gap-2 px-3 py-5">
            <div className="self-center mb-5">
                <Image width={180} src={logo} alt="" />
            </div>

            <Divider />

            <Link href="/dashboard" className="rounded-full p-2 font-bold text-center hover:bg-emerald">
                <span className="text-gray-200">Dashboard</span>
            </Link>
            <Link href="/containers" className="rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Containers</span>
            </Link>
            <Link href="/images" className="rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Images</span>
            </Link>
            <Link href="/volumes" className="rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Volumes</span>
            </Link>
            <Link href="/networks" className="rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Networks</span>
            </Link>

            <Divider></Divider>

            <Link href="/environments" className="rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Environments</span>
            </Link>
        </nav>
    )
}