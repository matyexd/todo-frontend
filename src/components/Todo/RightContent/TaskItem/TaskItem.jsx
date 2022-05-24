import React from 'react'
import style from './style.css'
import calendar from '../../../../assets/svg/calendar-symbol.svg'

const TaskItem = ({ id, title, description, date, active, selected, changeSelected, deleteTask, changeActive,
					  editable, changeEditable, removeFuncTaskName, taskName, setTaskName,
					  descr, setDescr, removeFuncDescr, taskDate, setTaskDate, removeFuncDate}) => {
	const handleCheckBox = () => {}

	return (
		<div>
			<div
				className={selected === id? 'item selected' : 'item'}
				onClick={ id === selected ? () => {changeSelected(0); changeEditable(-1)} : () => {changeSelected(id); changeEditable(-1)} }
			>
				<div className='checkbox'>
					<input
						type='checkbox' id={id + '__label'}
						checked={!active}
						onClick={() => changeActive(id)}
					/>
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
				{active ?
					<div>
						{editable === id?
							<form className="" id="form" onSubmit={() => removeFuncTaskName(id)}>
								<input
									className='task-title-input' type="text" value={taskName}
									onChange={(e) => setTaskName(e.target.value)}
									onClick={e => e.stopPropagation()}
								/>
							</form>
							:
							<div
								className={selected === id? 'task-name-selected' : 'task-name'}
								onClick={selected === id? e => e.stopPropagation() : e => {}}
								onDoubleClick={() => {setTaskDate(date); setTaskName(title); setDescr(description); changeEditable(id)}}
							>
								{title}
							</div>
						}
					</div>
					:
					<div
						className={selected === id? 'task-name-selected' : 'task-name'}
					>
						{title}
					</div>
				}
			</div>
			<div className='task-date' style={selected === id? {display: 'none'} : {}}>
				<div style={active? {}:{marginTop: -20}}>
					{date ? 'до ' + date : ''}
				</div>
			</div>
			<div className='task-additionally' style={selected === id? {marginTop: 10} : {display: 'none'}}>
				{editable === id ?
					<form className="" id="form" onSubmit={() => removeFuncDescr(id)}>
						<textarea
							className='task-description-textarea' value={descr}
							onChange={(e) => setDescr(e.target.value)}
						/>
					</form>
					:
					<div
						className='task-description' style={{padding: 20, paddingBottom: 5, backgroundColor: '#F1F1F1'}}
						onDoubleClick={e => {setTaskDate(date); setTaskName(title); setDescr(description); changeEditable(id)}}
					>
						{
							description.split('\n').map(item => (
								<p style={{marginTop: 0}}>{item}</p>
							))
						}
					</div>
				}
				<div className='task-additionally-bottom'>
					{editable === id ?
						<div style={{color: '#468EFF'}} onClick={() => {removeFuncDate(id); removeFuncDescr(id); removeFuncTaskName(taskName); changeSelected(-1)}}>
							Сохранить
						</div>
						:
						<div style={{color: '#FF5F5F'}} onClick={() => deleteTask(id)}>
							Удалить задачу
						</div>
					}
					<div>
						<div style={{display: 'flex', alignItems: 'center'}}>
							<img src={calendar} alt="" style={{marginRight: 10}}/>
							{editable === id ?
								<div style={{marginRight: -20}}>
									<span>До </span>
									<input
										className='task-date-input' type="text" value={taskDate}
										onChange={(e) => setTaskDate(e.target.value)}
										onClick={e => e.stopPropagation()}
									/>
								</div>
								:
								<span
									onDoubleClick={e => {setTaskDate(date); setTaskName(title); setDescr(description); changeEditable(id)}}
								>
									{date ? 'до ' + date : 'Назначить дату'}
								</span>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TaskItem
