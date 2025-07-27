import logo from "@/images/logo-transparent.png"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="flex min-w-[100vh]">
            <nav className="w-[280px] flex flex-col bg-emerald-600 px-5 h-full gap-3">
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

            <div className="flex flex-col w-full">

                <div className="sticky bg-emerald-800 text-gray-50 flex items-center justify-between px-5">

                    <div className="flex items-center">
                        <div>ENV:</div>
                        <select className="bg-emerald-300 h-full text-gray-900 rounded-sm p-2">
                            <option>NO ENVIRONMENT</option>
                            <option>local</option>
                            <option>proxmox</option>
                            <option>orangepi</option>
                        </select>
                    </div>

                    <div className="item">
                        admin
                    </div>
                </div>

                <main className="bg-gray-50">
                    Content
                </main>

                <footer>
                    footer
                </footer>
            </div>
        </div>
    )
}