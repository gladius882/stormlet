import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo-transparent.png"

export default function () {
    return (
        <nav className="w-[350px] flex flex-col bg-emerald-600 px-5 gap-3">
            <div className="self-center mb-10">
                <Image width={180} src={logo} alt="" />
            </div>

            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Dashboard
            </Link>
            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Containers
            </Link>
            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Images
            </Link>
            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Volumes
            </Link>
            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Networks
            </Link>
            <Link href="/" className="text-gray-900 bg-emerald-300 rounded-full p-2 font-bold text-center">
                Dashboard
            </Link>
        </nav>
    )
}