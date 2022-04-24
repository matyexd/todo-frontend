import React from 'react'
import style from './style.css'
import RightContent from '../../components/Todo/RightContent'
import LeftContent from '../../components/Todo/LeftContent'

const HomePage = () => {
	return (
		<div className='container'>
			<div className='right-content'>
				<LeftContent />
			</div>
			<div className='left-content'>
				<RightContent />
			</div>
		</div>
	)
}

export default HomePage
