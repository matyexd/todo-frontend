import React from 'react'
import style from './style.css'

const TaskItem = ({ id, title, description, date, active, selected, changeSelected}) => {
	const handleCheckBox = () => {}

	return (
		<div
			 onClick={id === selected ? () => changeSelected(0) : () => changeSelected(id)}
			 className={selected === id? 'item selected' : 'item'}
		>
			<div className='checkbox'>
				<input type='checkbox' id={id + '__label'} defaultChecked={!active} />
				<label htmlFor={id + '__label'} onClick={() => handleCheckBox()}>
					<svg width='11' height='8' viewBox='0 0 11 8' fill='none'>
						<path
							d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
							stroke='white'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</label>
			</div>
			<div style={{ marginLeft: 15 }}>
				<div style={{ fontFamily: 'Roboto', fontSize: 18, marginBottom: 5 }}>
					{active? title : <s>{title}</s>}
				</div>
				<div style={{ fontFamily: 'Roboto', fontSize: 12, color: '#363636' }}>
					До {date}
				</div>
			</div>
		</div>
	)
}

export default TaskItem
