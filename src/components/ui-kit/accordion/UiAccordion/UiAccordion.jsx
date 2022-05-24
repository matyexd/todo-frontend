import React, { useState, useEffect, useRef } from 'react'
import './Accordion.css'
import { svgIcon } from '../../../../assets/svg'
import TaskItem from "../../../Todo/RightContent/TaskItem/TaskItem";

export default function UiAccordion({ title = 'hello', tasks, changeActive, changeSelected, deleteTask, selected}) {
	const [toggle, setToggle] = useState(false)
	const [heightEl, setHeightEl] = useState('200px')

	const refHeight = useRef()


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
						<TaskItem
							id={item.id}
							title={item.title}
							description={item.description}
							date={item.date}
							active={item.active}
							selected={selected}
							changeSelected={changeSelected}
							deleteTask={deleteTask}
							changeActive={changeActive}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
