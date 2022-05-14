import SearchIcon from '@mui/icons-material/Search';
import { BorderColorOutlined, PhoneOutlined, QuestionAnswerOutlined, SettingsOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import SidebarThreads from './SidebarThreads';
import { FC, useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { app, db } from '../settings/Firebase'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from '../store/reducers/userSlice';
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { IThread, IThreadData } from '../interfaces/IThread';

const Sidebar: FC = () => {
	const { uid } = useAppSelector(state => state.user)
	const [threads, setThreads] = useState<any[]>([]) //fix that
	const dispatch = useAppDispatch()
	useEffect(() => {
		const q = query(collection(db, 'threads'))
		onSnapshot(q, (snapshot) =>
			setThreads(snapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data(),
			})))
		)
	}, [])
	const SignOut = () => {
		const auth = getAuth(app);
		signOut(auth).then(() => {
			dispatch(logout())
		}).catch((error) => {
			// An error happened.
		});
	}
	const addThread = async () => {
		const threadName = prompt('Enter a thread');
		if (threadName) {
			await addDoc(collection(db, 'threads'), {
				threadName: threadName
			})
		}
	}
	return (
		<div className='sidebar' >
			<div className="sidebar__header">
				<div className="sidebar__search">
					<SearchIcon className='sidebar__searchIcon' />
					<input type="text" placeholder='Search' className="sidebar__input" />
				</div>
				<IconButton className='sidebar__button' onClick={addThread}>
					<BorderColorOutlined htmlColor='#fff' />
				</IconButton>
			</div>
			<div className="sidebar__threads">
				{
					threads.map(({ id, data: { threadName } }) => (
						<SidebarThreads
							key={id}
							id={id}
							threadName={threadName} />
					))
				}
			</div>
			<div
				className="sidebar__bottom"
				onClick={SignOut}
			>
				<Avatar />
				<IconButton>
					<PhoneOutlined />
				</IconButton>
				<IconButton>
					<QuestionAnswerOutlined />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
			</div>
		</div>
	)
}

export default Sidebar