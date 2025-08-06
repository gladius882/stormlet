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

    const [isValidName, setIsValidName] = useState(true);
    const [isValidHost, setIsValidHost] = useState(true);
    const [isValidPort, setIsValidPort] = useState(true);
    const [data, setData] = useState<EnvironmentApiData>({
        name: "",
        host: "",
        port: 0
    })

    const validate = (): boolean => {

        let result = true;

        if(data.name.trim().length == 0) {
            setIsValidName(false);
            result = false;
        } else {
            setIsValidName(true);
        }

        if(data.host.trim().length == 0) {
            setIsValidHost(false);
            result = false;
        } else {
            setIsValidHost(true);
        }
        
        if(data.port < 1 || data.port > 65535 || !data.port) {
            setIsValidPort(false);
            result = false;
        } else {
            setIsValidPort(true);
        }

        return result;
    }

    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-4 pt-10">

                <div>Name</div>
                <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        name: event.target.value
                    })
                }} error={!isValidName}/>

                <div>Host</div>
                <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        host: event.target.value
                    })
                }} error={!isValidHost}/>

                <div>Port</div>
                <TextField type="number" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setData({
                        ...data,
                        port: parseInt(event.target.value)
                    })
                }} error={!isValidPort}/>

            </div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    variant="outlined"
                    onClick={() => {
                        props.onPrev?.();
                    }}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button variant="outlined" color="success" onClick={() => {
                    if(validate() === false) return;
                    props.onNext?.(data);
                }}>
                    Next
                </Button>
            </Box>

        </Fragment>
    )
}