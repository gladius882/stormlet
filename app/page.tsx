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
		<div className="h-[100vh] flex items-center justify-center">

			<div className="flex flex-col gap-5 bg-[#060B16] items-center p-10 rounded-3xl w-[400px]">
				<Image width={200} src={logo} alt="sdad" className="mb-10" />


				<input
					id="outlined-controlled"
					value={login}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setLogin(event.target.value);
					}}
					placeholder="Login"
					className="w-full bg-white p-2 rounded-md placeholder-[#4E4E4E] text-[#1E1E1E]"
				/>

				<input
					id="outlined-controlled"
					type="password"
					value={password}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setPassword(event.target.value);
					}}
					placeholder="Password"
					className="w-full bg-white p-2 rounded-md placeholder-[#4E4E4E] text-[#1E1E1E]"
				/>


				<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					handleSignIn();
				}} 
					className="w-full bg-[#114B47] p-2 rounded-md">
					Unleash a storm
					{isLoading && "..."}
				</button>

				{/* <div className="w-full">
						<p>{status}</p>
						{JSON.stringify(session)}
					</div> */}

				{isError && (
					<Alert severity="error" className="w-full" >
						Invalid credentials
					</Alert>
				)}
			</div>

		</div>
	);
}
