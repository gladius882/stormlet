"use client"

import { Box, Button, TextField } from "@mui/material"
import { Fragment, useState } from "react"

type EnvironmentApiStepProps = {
    onNext?: (data: EnvironmentApiData) => void,
    onPrev?: () => void
}

type EnvironmentApiData = {
    host: string,
    port: number
}

export default function (props: EnvironmentApiStepProps) {

    const [data, setData] = useState<EnvironmentApiData>({
        host: "",
        port: 0
    })

    return (
        <Fragment>
            <div className="grid grid-cols-2 pt-10">

                <div>Host</div>
                <TextField />

                <div>Port</div>
                <TextField />

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
                    props.onNext?.();
                }}>
                    Next
                </Button>
            </Box>

        </Fragment>
    )
}