"use client"

import { Api, Save } from "@mui/icons-material"
import { Box, Button, Card } from "@mui/material"
import { Fragment } from "react"

type EnvironmentConnectionTypeSelectorProps = {
    onNext?: () => void,

}

export default function (props: EnvironmentConnectionTypeSelectorProps) {
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
                    <input type="radio" name="env_type" className="accent-emerald-300 w-[20px] h-[20px] flex-" />
                </Card>

                <Card className="w-1/3 flex flex-col gap-5 items-center py-5">
                    <Api fontSize="large" />
                    <div className="text-center text-xl">
                        API
                    </div>

                    <div className="text-gray-800">
                        Use TCP API to manage remote docker instance
                    </div>
                    <input type="radio" name="env_type" className="accent-emerald-300 w-[20px] h-[20px]" />
                </Card>

                <Card className="w-1/3 flex flex-col gap-5 items-center py-5">
                    <Api fontSize="large" />
                    <div className="text-center text-xl">
                        Secure API
                    </div>

                    <div className="text-gray-800 text-center">
                        Use TCP API to manage remote docker instance with TLS encryption
                    </div>
                    <input type="radio" value="encrypted" name="env_type" className="accent-emerald-300 w-[20px] h-[20px]" />
                </Card>

            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={true}
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