"use client"

import { NewEnvironmentData } from "@/app/(core)/environments/new/page"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Fragment } from "react"

type EnvironmentSummaryStepProps = {
    data: NewEnvironmentData,
    onPrev?: () => void,
    onFinish?: () => void
}

export default function EnvironmentSummaryStep(props: EnvironmentSummaryStepProps) {
    return (
        <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
            </Typography>

            <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 w-[80%] gap-5">


                    <div>Type</div>
                    <TextField defaultValue={props.data.type} disabled={true} />

                    <div>Name</div>
                    <TextField defaultValue={props.data.name} disabled={true} />

                    {props.data.type !== "socket" && (
                        <>
                            <div>Host</div>
                            <TextField defaultValue={props.data.host} disabled={true} />

                            <div>Port</div>
                            <TextField defaultValue={props.data.port} disabled={true} />

                            {props.data.type === "secure-api" && (
                                <>
                                    <div>Protocol</div>
                                    <TextField defaultValue={props.data.protocol} disabled={true} />

                                    <div>Version</div>
                                    <TextField defaultValue={props.data.version} disabled={true} />

                                    <div>CA</div>
                                    <TextField defaultValue={props.data.ca} disabled={true} />

                                    <div>CERT</div>
                                    <TextField defaultValue={props.data.cert} disabled={true} />

                                    <div>KEY</div>
                                    <TextField defaultValue={props.data.key} disabled={true} />
                                </>
                            )}
                        </>
                    )}

                </div>
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
                    props.onFinish?.();
                }}>
                    Next
                </Button>
            </Box>
        </Fragment>
    )
}