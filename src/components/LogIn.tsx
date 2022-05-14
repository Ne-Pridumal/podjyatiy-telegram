import { Button } from '@mui/material'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { FC } from 'react'
import { app } from '../settings/Firebase';

const logo = require('../assets/telega.png')

const LogIn: FC = () => {
	const signIn = () => {
		const auth = getAuth(app)
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result.user;
				// ...
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage)
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}
	return (
		<div className='login'>
			<div className="login__telegram">
				<img src={String(logo)} alt="#telega" />
				<h1>Telegram</h1>
			</div>
			<Button
				onClick={signIn}
				className="login__button">
				Sign In
			</Button>
		</div>
	)
}

export default LogIn