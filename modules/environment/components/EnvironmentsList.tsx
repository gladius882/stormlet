"use client"

import { Button, Card, SpeedDial } from "@mui/material"
import { EnvironmentType } from "../types"
import Link from "next/link"
import { Add, Cloud, Key } from "@mui/icons-material"

type EnvironmentsListProps = {
    items: EnvironmentType[]
}

export default function (props: EnvironmentsListProps) {

    return (
        <>
            <SpeedDial
                ariaLabel="Environments speed dial"
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
                icon={<Add />}
                color="success"
                onClick={() => {
                    alert('add')
                }}
            >
            </SpeedDial>

            {props.items.map(e => {
                return (
                    <Card key={e.id} className="flex p-5">
                        <div className="w-[100px] flex justify-center items-center border-r-2 border-gray-300">
                            <Cloud fontSize="large" color="action" />
                        </div>

                        <div className="w-6/8 px-5 flex flex-col">
                            <h2 className="text-2xl">
                                <Link href={`/environments/${e.id}`}>
                                    {e.name}
                                    {e.cert && <Key color="warning" className="ml-3" />}
                                </Link>
                            </h2>
                            <div className="text-sm text-gray-800">
                                {e.host}:{e.port}
                                {e.socket}
                            </div>
                        </div>

                        <div className="w-calc(1/8-100px)">
                            <Button variant="outlined" color="error">Delete</Button>
                        </div>
                    </Card>
                )
            })}
        </>
    )
}