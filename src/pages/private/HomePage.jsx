import React from 'react'
import { useLocation } from 'react-router'

const HomePage = () => {
	let location = useLocation()

	return (
		<div>
			<h3>Главная</h3>
		</div>
	)
}

export default HomePage
