import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo-transparent.png"
import { Divider } from "@mui/material";
import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";

export default function SidebarNavigation() {
    return (
        <nav className="w-[350px] flex flex-col bg-emerald-600 px-5 gap-3 py-5">
            <div className="self-center mb-5">
                <Image width={180} src={logo} alt="" />
            </div>

            <EnvironmentSelector />

            <Divider />

            <Link href="/dashboard" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center hover:bg-emerald">
                <span className="text-gray-200">Dashboard</span>
            </Link>
            <Link href="/containers" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Containers</span>
            </Link>
            <Link href="/images" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Images</span>
            </Link>
            <Link href="/volumes" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Volumes</span>
            </Link>
            <Link href="/networks" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Networks</span>
            </Link>

            <Divider></Divider>

            <Link href="/environments" className="text-gray-900 bg-emerald-800 rounded-full p-2 font-bold text-center">
                <span className="text-gray-200">Environments</span>
            </Link>
        </nav>
    )
}