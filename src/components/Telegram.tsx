import React, { FC } from 'react'
import MainArea from './MainArea'
import Sidebar from './Sidebar'

const Telegram: FC = () => {
	return (
		<div className="telegram">
			<Sidebar />
			<MainArea />
		</div>
	)
}

export default Telegram