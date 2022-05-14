import { MicNoneOutlined, MoreHoriz, SendRounded, TimerOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { setDoc, doc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { useRef, MouseEvent, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { db } from '../settings/Firebase'
import { serverTimestamp } from 'firebase/firestore'
import { IThread, IThreadData } from '../interfaces/IThread'

const MainArea = () => {
	const messageArea = useRef<HTMLInputElement>(null)
	const [messages, setMessages] = useState<IThread[]>([]);
	const { id: threadId, name: threadName } = useAppSelector(state => state.message)
	const user = useAppSelector(state => state.user)
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (threadId) {
			onSnapshot(
				query(collection(db, 'threads/messages'), orderBy('timestamp')),
				(snapshot) =>
					setMessages(snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data() as IThreadData,
					})))
			)
		}
	}, [threadId])
	const sendMessage = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		await setDoc(doc(db, `threads/${threadId}/messages`), {
			timestamp: serverTimestamp(),
			message: messageArea.current?.value,
			uid: user.uid,
			photo: user.photo,
			email: user.email,
			displayName: user.displayName,
		})
	}

	return (
		<div className='main-area'>
			<div className="main-header">
				<div className="main-header__content">
					<Avatar />
					<div className="main-header__info">
						<h4>Name</h4>
						<h5>last seen</h5>
					</div>
				</div>
				<IconButton>
					<MoreHoriz className='main-header__details' />
				</IconButton>
			</div>
			<div className="main-area__messages">

			</div>
			<div className="main-area__input">
				<form action="">
					<input ref={messageArea} type="text" placeholder='Write a message...' />
					<IconButton>
						<TimerOutlined />
					</IconButton>
					<IconButton onClick={sendMessage}>
						<SendRounded />
					</IconButton>
					<IconButton>
						<MicNoneOutlined />
					</IconButton>
				</form>
			</div>
		</div>
	)
}

export default MainArea
