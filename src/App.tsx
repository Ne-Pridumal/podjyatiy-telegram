import React, { FC, useEffect } from 'react'
import Telegram from './components/Telegram'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './styles/index.scss'
import { app } from './settings/Firebase'
import { login } from './store/reducers/userSlice'
import LogIn from './components/LogIn'


const App: FC = () => {
	const { uid } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	useEffect(() => {
		const auth = getAuth(app)
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				dispatch(login({
					uid: authUser.uid,
					photo: authUser.photoURL,
					email: authUser.email,
					displayName: authUser.displayName,
				}))
			} else {
			}
		})
	}, [])
	return (
		<>
			{uid ? <Telegram /> : <LogIn />}
		</>
	)
}

export default App