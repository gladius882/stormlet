"use client"

import { SearchOutlined } from "@mui/icons-material";
import { useState } from "react"

type InputTexpProps = {
    icon?: React.ReactNode
}

export default function ({ icon }: InputTexpProps) {
    const [value, setValue] = useState("");

    return (
        <div className="flex">

            <div>
                {icon}
            </div>

            <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
                className=""
            />
        </div>
    )
}