"use client"

import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, Fragment, useState } from "react"

type EnvironmentApiStepProps = {
    onNext?: (data: EnvironmentApiData) => void,
    onPrev?: () => void
}

type EnvironmentApiData = {
    name: string,
    host: string,
    port: number
}

export default function EnvironmentApiStep(props: EnvironmentApiStepProps) {

    const [data, setData] = useState<EnvironmentApiData>({
        name: "",
        host: "",
        port: 0
    })

    return (
        <Fragment>
            <div className="grid grid-cols-2 pt-10">

                <div>Name</div>
                <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        name: event.target.value
                    })
                }}/>

                <div>Host</div>
                <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        host: event.target.value
                    })
                }}/>

                <div>Port</div>
                <TextField type="number" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        port: parseInt(event.target.value)
                    })
                }}/>

            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    onClick={() => {
                        props.onPrev?.();
                    }}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={() => {
                    props.onNext?.(data);
                }}>
                    Next
                </Button>
            </Box>

        </Fragment>
    )
}