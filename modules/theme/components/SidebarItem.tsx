import clsx from "clsx";
import Link from "next/link";

type SidebarItemProps = {
    href: string,
    className?: string,
    text: string
}

export default async function (props: SidebarItemProps) {
    return (
        <Link href={props.href} className={clsx(
            "rounded-full p-2 font-bold text-center h-[50px] flex items-center justify-center",
            props.className
        )}>
            <span>{props.text}</span>
        </Link>
    )
}