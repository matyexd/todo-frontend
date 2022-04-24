import React, { useState, useEffect, useRef } from 'react'
import './Accordion.css'
import { svgIcon } from '../../../../assets/svg'

export default function UiAccordion({ title = 'hello', tasks, renderItem }) {
	const [toggle, setToggle] = useState(false)
	const [heightEl, setHeightEl] = useState()

	const refHeight = useRef()

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`)
	}, [])

	const toggleState = () => {
		setToggle(!toggle)
	}

	return (
		<div className='accordion'>
			<button onClick={toggleState} className='accordion-visible'>
				<span>{title}</span>
				<img className={toggle && 'active'} src={svgIcon.arrow} />
			</button>

			<div
				className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
				style={{ height: toggle ? `${heightEl}` : '0px' }}
				ref={refHeight}
			>
				{tasks.map(item => (
					<div key={item.id} aria-hidden={toggle ? 'true' : 'false'}>
						{renderItem(item.text)}
					</div>
				))}
			</div>
		</div>
	)
}
