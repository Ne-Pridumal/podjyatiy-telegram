import { Avatar } from '@mui/material'
import React, { FC } from 'react'
import { useAppSelector } from '../hooks/redux'
import { IThread } from '../interfaces/IThread'

const Message: FC<IThread> = ({ ...props }) => {
	const user = useAppSelector(state => state.user)
	return (
		<div
			className={`message ${user.email === props.data.email && 'message__sender'}`}
		>
			<Avatar className='message__photo' />
			<div className="message__container">
				<p>{props.data.message}</p>
				<small>{
					new Date(props.data.timestamp?.toDate())
				}</small>
			</div>
		</div>
	)
}

export default Message