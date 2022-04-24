import React from 'react'
import style from './style.scss'

const TaskItem = ({ idI }) => {
	const handleCheckBox = () => {}

	return (
		<div style={{ display: 'flex', marginBottom: 25 }}>
			<div className='checkbox'>
				<input type='checkbox' id={idI + '__label'} defaultChecked={false} />
				<label htmlFor={idI + '__label'} onClick={() => handleCheckBox()}>
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
					Задача {idI}
				</div>
				<div style={{ fontFamily: 'Roboto', fontSize: 12, color: '#363636' }}>
					До 28 февраля
				</div>
			</div>
		</div>
	)
}

export default TaskItem
