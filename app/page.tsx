"use client"

import { Button, TextField } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const { data: session, status } = useSession();

	const handleSignIn = async () => {

		const res = await signIn("credentials", {
			redirect: false,
			login,
			password
		});

		if(res?.ok) {
			console.log('Signed in');
		} else {
			console.log("Error");
		}
	}

	return (
		<div className="h-[100vh] flex justify-center items-center">
			<div className="w-1/3 shadow-md flex flex-col bg-transparent">
				<div className="text-center bg-gray-300 text-emerald-500 text-xl">
					stormlet
				</div>

				<div className="flex gap-0">
					<TextField
						id="outlined-controlled"
						label="Login"
						value={login}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setLogin(event.target.value);
						}}
					/>
				</div>

				<div>
					<TextField
						id="outlined-controlled"
						type="password"
						label="Password"
						value={password}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setPassword(event.target.value);
						}}
					/>
				</div>

				<div>
					<Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
						handleSignIn();
					}} className="w-1/2" variant="contained" color="success">Sing in</Button>
				</div>

				<div>
					<p>{status}</p>
					{JSON.stringify(session)}
				</div>
			</div>

			
		</div>
	);
}
