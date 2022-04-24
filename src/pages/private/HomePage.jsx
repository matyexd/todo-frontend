import React from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'

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
