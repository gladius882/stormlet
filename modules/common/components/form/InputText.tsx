"use client"

import { SearchOutlined } from "@mui/icons-material";
import { useState } from "react"

export default function() {
    const [value, setValue] = useState("");

    return (
        <div className="flex">

            <SearchOutlined />

            <input 
                type="text"
                onChange={(event) => setValue(event.target.value)}
                className=""
            />
        </div>
    )
}