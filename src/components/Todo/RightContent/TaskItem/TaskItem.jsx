import React from 'react'
import style from './style.css'
import calendar from '../../../../assets/svg/calendar-symbol.svg'

const TaskItem = ({ id, title, description, date, active, selected, changeSelected, deleteTask }) => {
	const handleCheckBox = () => {}

	return (
		<div>
			<div className={selected === id? 'item selected' : 'item'}
				 onClick={id === selected ? () => changeSelected(0) : () => changeSelected(id)}>
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
				<div className='task-name'>
					{active? title : <s>{title}</s>}
				</div>
			</div>
			<div className='task-date' style={selected === id? {display: 'none'} : {}}>
				{date ? 'до ' + date : ''}
			</div>
			<div className='task-additionally' style={selected === id? {marginTop: 10} : {display: 'none'}}>
				<div className='task-description' style={{padding: 20, backgroundColor: '#F1F1F1'}}>
					{description}
				</div>
				<div className='task-additionally-bottom'>
					<div style={{color: '#FF5F5F'}} onClick={() => deleteTask(id)}>
						Удалить задачу
					</div>
					<div>
						<div style={{display: 'flex', alignItems: 'center'}}>
							<img src={calendar} alt="" style={{marginRight: 10}}/>
							<span>{date ? 'до ' + date : 'Назначить дату'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TaskItem
