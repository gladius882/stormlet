"use client"

import { Api, LockOutline, Save } from "@mui/icons-material"
import { Box, Button, Card } from "@mui/material"
import { ChangeEvent, Fragment, useState } from "react"

type EnvironmentConnectionTypeSelectorProps = {
    onNext?: (type: "socket" | "api" | "secure-api") => void,
}

export default function (props: EnvironmentConnectionTypeSelectorProps) {

    const [type, setType] = useState<"socket" | "api" | "secure-api">("socket");

    return (
        <Fragment>

            <div className="flex gap-10 p-5">
                <Card className="w-1/3 flex flex-col gap-5 items-center py-5">
                    <Save fontSize="large" />
                    <div className="text-center text-xl">
                        Socket
                    </div>

                    <div className="text-gray-800">
                        Specify path to docker.sock
                    </div>
                    <input
                        checked={type == "socket"} type="radio" 
                        value="socket" name="env_type" 
                        className="accent-emerald-300 w-[20px] h-[20px] flex-" 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            if(event.target.checked) {
                                setType("socket")
                            }
                        }}
                    />
                </Card>

                <Card className="w-1/3 flex flex-col gap-5 items-center py-5">
                    <Api fontSize="large" />
                    <div className="text-center text-xl">
                        API
                    </div>

                    <div className="text-gray-800">
                        Use TCP API to manage remote docker instance
                    </div>
                    <input 
                        checked={type == "api"} type="radio" 
                        value="api" name="env_type" 
                        className="accent-emerald-300 w-[20px] h-[20px]" 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            if(event.target.checked) {
                                setType("api")
                            }
                        }}
                    />
                </Card>

                <Card className="w-1/3 flex flex-col gap-5 items-center py-5">
                    <LockOutline fontSize="large" />
                    <div className="text-center text-xl">
                        Secure API
                    </div>

                    <div className="text-gray-800 text-center">
                        Use TCP API to manage remote docker instance with TLS encryption
                    </div>
                    <input 
                        checked={type == "secure-api"} type="radio" 
                        value="secure-api" name="env_type" 
                        className="accent-emerald-300 w-[20px] h-[20px]" 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            if(event.target.checked) {
                                setType("secure-api")
                            }
                        }}
                    />
                </Card>

            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    variant="outlined"
                    disabled={true}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button variant="outlined" color="success" onClick={() => {
                    props.onNext?.(type);
                }}>
                    Next
                </Button>
            </Box>
        </Fragment>
    )
}