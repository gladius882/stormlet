"use client"

import { Alert, Button, TextField } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/images/logo-transparent.png";

export default function Home() {

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const { data: session, status } = useSession();

	const handleSignIn = async () => {

		setIsLoading(true);

		const res = await signIn("credentials", {
			redirect: false,
			login,
			password
		});

		if (res?.ok) {
			console.log('Signed in');
		} else {
			setIsError(true);
			setIsLoading(false);
		}
	}

	return (
		<div className="h-[100vh] flex flex-col items-center py-10">
			<Image width={200} src={logo} alt="sdad" className="mb-10" />

			<div className="w-1/4 shadow-md flex flex-col p-5 items-center gap-5">

				<TextField
					id="outlined-controlled"
					label="Login"
					value={login}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setLogin(event.target.value);
					}}
					className="w-full"
				/>

				<TextField
					id="outlined-controlled"
					type="password"
					label="Password"
					value={password}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setPassword(event.target.value);
					}}
					className="w-full"
				/>


				<Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					handleSignIn();
				}} className="w-full" variant="contained" color="success">
					Sing in
					{isLoading && "..."}
				</Button>

				<div className="w-full">
					<p>{status}</p>
					{JSON.stringify(session)}
				</div>

				{isError && (
					<Alert severity="error" className="w-full" >
						Invalid credentials
					</Alert>
				)}
			</div>
		</div>
	);
}
