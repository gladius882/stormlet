"use client"

import { SearchOutlined } from "@mui/icons-material";
import clsx from "clsx";
import { useState } from "react"

type InputTexpProps = {
    icon?: React.ReactNode,
    className?: string,
    placeholder?: string
}

export default function ({ icon, className, placeholder }: InputTexpProps) {
    const [value, setValue] = useState("");

    return (
        <div className={clsx(
            "flex gap-2 items-center bg-[#060B16] p-3 text-xl rounded-xl",
            className
        )}>

            <div>
                {icon}
            </div>

            <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                className="outline-0 w-full"
                placeholder={placeholder}
            />
        </div>
    )
}