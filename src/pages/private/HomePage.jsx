import React from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'

const HomePage = () => {
	return (
		<div className='container'>
			<div className='left-content'>
				<LeftContent />
			</div>
			<div className='right-content'>
				<RightContent />
			</div>
		</div>
	)
}

export default HomePage
