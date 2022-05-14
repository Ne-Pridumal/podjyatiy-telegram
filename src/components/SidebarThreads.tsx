import { Avatar } from '@mui/material'
import React, { FC, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { setMessage } from '../store/reducers/messageSlice';

interface SidebarProps {
	id: number | string,
	threadName: string,
}

const SidebarThreads: FC<SidebarProps> =
	({ ...props }) => {
		const dispatch = useAppDispatch();
		const setThread = () => {
			console.log(props.id);
			dispatch(setMessage({
				id: props.id,
				name: props.threadName
			}))
		}
		return (
			<div className='thread' onClick={setThread}>
				<Avatar />
				<div className="thread__details">
					<h3>{props.threadName}</h3>
					<p>info</p>
					<small className='thread__timestamp'>props.timestamp</small>
				</div>
			</div>
		)
	}

export default SidebarThreads