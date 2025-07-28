"use client"

import EnvironmentApiStep from "@/modules/environment/components/EnvironmentApiStep";
import EnvironmentConnectionTypeSelector from "@/modules/environment/components/EnvironmentConnectionTypeSelector";
import { Api, Save } from "@mui/icons-material";
import { Box, Button, Card, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";

type NewEnvironmentData = {
    type: "socket" | "api" | "secure-api",
    name: string,
    socket?: string,
    host?: string,
    port?: number,
    protocol?: "http" | "https",
    ca?: string,
    cert?: string,
    key?: string,
    version?: string
}

export default function () {

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>())

    const [data, setData] = useState<NewEnvironmentData>({
        type: "socket",
        name: "",
    });

    const handleNext = () => {
        let newSkipped = skipped;

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="w-full h-full flex flex-col items-center gap-5">

            <div className="w-[80%] flex flex-col gap-5 py-10">

                <div className="w-full">
                    <h1 className="w-full text-3xl">Add new environment</h1>
                </div>

                <div>

                    <Stepper activeStep={activeStep}>

                        <Step>
                            <StepLabel>Connection type</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Config</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Confirm</StepLabel>
                        </Step>
                    </Stepper>

                    {activeStep === 0 && <EnvironmentConnectionTypeSelector onNext={(type) => {
                        setData({
                            ...data,
                            type
                        })
                        setActiveStep(1);
                    }} />}

                    {activeStep === 1 && data.type == "socket" && (
                        <Fragment>
                            <div className="grid grid-cols-2 pt-10">

                                NOT SUPPORTED YET

                            </div>

                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext}>
                                    Next
                                </Button>
                            </Box>

                        </Fragment>
                    )}

                    {activeStep === 1 && data.type === "api" &&
                        <EnvironmentApiStep
                            onNext={() => {
                                setActiveStep(2);
                            }} 
                            onPrev={() => {
                                setActiveStep(0);
                            }}
                        />
                    }

                    {activeStep === 3 && (
                        <Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset} variant="outlined" color="success">Finish</Button>
                            </Box>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}