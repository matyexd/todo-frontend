import React from 'react'
import style from './style.css'

const UiAvatar = ({ src, size }) => {
	return (
		<img className='image-ava' width={size} height={size} src={src} alt='Ava' />
	)
}

export default UiAvatar
