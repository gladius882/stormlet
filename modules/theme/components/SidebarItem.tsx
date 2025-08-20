"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
    href: string,
    className?: string,
    text: string
}

export default function (props: SidebarItemProps) {

    const pathname = usePathname()

    return (
        <Link href={props.href} className={clsx(
            "rounded-full p-2 font-bold text-center h-[55px] flex items-center justify-center duration-300",
            pathname === props.href ? "bg-linear-to-r from-[#114B47] to-[#011C1A]" : "",
            "hover:bg-linear-to-r from-[#114B47] to-[#011C1A]",
            props.className
        )}>
            <span>{props.text}</span>
        </Link>
    )
}