import React, {useState, useEffect} from 'react'
import style from './style.css'
import ava from '../../../assets/svg/profile-logo.svg'
import { UiAvatar } from '../../ui-kit'
import TaskItem from './TaskItem/TaskItem'
import { svgIcon } from '../../../assets/svg'
import UiAccordion from '../../ui-kit/accordion/UiAccordion/UiAccordion'
import ModalWindow from "./ModalWindow/ModalWindow";

const RightContent = ({
  	clearAuthUserStore,
  	userData,
  	tasksFromDB,
  	setActiveCategory,
  	tasksLoading,
  	clearCategoriesStore,
  	categories,
	addTaskOnServer,
	deleteTaskOnServer,
	updateTaskOnServer, toggleLoadingTasks, getCategories
}) => {

	const [tasks, setTasks] = useState([])
	const [activeTasks, setActiveTasks] = useState([])
	const [completedTasks, setCompletedTasks] = useState([])
	const [taskLoading, setTaskLoading] = useState(false)
	const [taskAddLoading, setTaskAddLoading] = useState(false)
	const [taskDeleteLoading, setTaskDeleteLoading] = useState(false)

	console.log(tasksFromDB)

	useEffect(() => {
		if (!tasksLoading && !taskLoading) {
			if (taskAddLoading && tasksFromDB.length > 0) {
				setEditable(tasksFromDB[tasksFromDB.length - 1].id)
				changeSelected(tasksFromDB[tasksFromDB.length - 1].id)
				setTaskAddLoading(false)
				// setTasks(tasksFromDB)
			}
			if (taskDeleteLoading) {
				setTaskDeleteLoading(false)
			} else {
				setTasks(tasksFromDB)
			}
		}
		if (!categories.isLoadingTasks) {
			toggleLoadingTasks()
			getCategories()
			setTaskLoading(false)
		}
		// if (taskAddLoading) {
		// 	// setTaskAddLoading(false)
		// 	setEditable(tasksFromDB[tasksFromDB.length-1].id)
		// }
	}, [tasksFromDB])

	useEffect(() => {
		setActiveTasks(tasks.filter(item => item.active === true))
		setCompletedTasks(tasks.filter(item => item.active !== true))
	}, [tasks])


	const [modalActive, setModalActive] = useState(false)
	const [selected, setSelected] = useState(0)
	let [editable, setEditable] = useState(-1)
	let [taskName, setTaskName] = useState('')
	let [descr, setDescr] = useState('')
	let [taskDate, setTaskDate] = useState('')

	const removeFuncTaskName = (id) => {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === id) {
				tasks[i].title = taskName;
			}
		}
		setTasks([...tasks]);
		setEditable("-1")
	}

	const removeFuncDescr = (id) => {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === id) {
				tasks[i].description = descr;
			}
		}
		setTasks([...tasks]);
		setEditable("-1")
	}

	const removeFuncDate = (id) => {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === id) {
				tasks[i].date = taskDate;
			}
		}
		setTasks([...tasks]);
		setEditable("-1")
	}

	const changeSelected = (id) => setSelected(id)

	const deleteTask = (id) => {
		setTasks(tasks.filter(item => item.id !== id))
		setTaskDeleteLoading(true)
		deleteTaskOnServer(id)
	}

	const getDate = () => {
		let date = new Date()

		let years = date.getFullYear()
		let mounth = date.getMonth()+1
		let day = date.getDate()
		if (mounth < 10) {
			mounth = '0'+mounth
		}
		if (day < 10) {
			day = '0'+day
		}
		let gettingDate = years+'-'+mounth+'-'+day


		return gettingDate
	}

	const addTask = () => {
		let createdId = Math.random()
		setTasks([...tasks, {id: createdId, title: 'Созданная задача', description: 'Созданная задача', date: getDate(), active: true}])
		setDescr('Созданная задача')
		setTaskDate(getDate())
		changeSelected(createdId)
		setTaskName('Созданная задача')
		setEditable(createdId)
		addTaskOnServer('Созданная задача', 'Созданная задача', categories.activeCategory, getDate())
		setTaskLoading(true)
		setTaskAddLoading(true)
	}

	const changeActive = (id) => {
		// for (let item of tasks) {
		// 	if (item.id === id) {
		// 		if (item.active === true) {
		// 			console.log('ya ebal')
		// 			item.active = !item.active
		// 			completedTasks.unshift(item)
		// 			activeTasks = activeTasks.filter(item => item.id !== id)
		// 			console.log(completedTasks)
		// 			break
		// 		}
		// 		else {
		// 			item.active = !item.active
		// 			activeTasks.unshift(item)
		// 			completedTasks = completedTasks.filter(item => item.id !== id)
		// 			break
		// 		}
		// 	}
		// }

		const newArray = tasks.map((item) => {
			if (item.id === id) {
				if (item.active === true) {
					updateTaskOnServer(item.id, item.title, item.discription, item.date, "COMPLETED")
					setTaskLoading(true)
					return {...item, active: false}

				} else {
					updateTaskOnServer(item.id, item.title, item.discription, item.date, "CREATED")
					setTaskLoading(true)
					return {...item, active: true}
				}
			} else {
				return item
			}
		})

		setTasks(newArray)

	}

	return (
		<div className='right-content-container'>
			<div className='right-content__top'>
				<div className='right-content__title'>Список задач</div>
				<div>
					<div onClick={() => setModalActive(true)}>
						<UiAvatar src={ava} size={73} />
					</div>
					<ModalWindow active={modalActive} setActive={setModalActive} clearAuthUserStore={clearAuthUserStore} userData={userData} clearCategoriesStore={clearCategoriesStore}/>
				</div>
			</div>
			{categories.activeCategory !== -1 ?
				<div>
					{activeTasks.length !== 0 ?
						<div style={{marginTop: 40}}>
							{activeTasks.map(item => (
								<TaskItem
									key={item.id}
									id={item.id}
									title={item.title}
									description={item.description}
									date={item.date}
									active={item.active}
									selected={selected}
									changeSelected={changeSelected}
									deleteTask={deleteTask}
									changeActive={changeActive}
									editable={editable}
									changeEditable={setEditable}
									removeFuncTaskName={removeFuncTaskName}
									taskName={taskName}
									setTaskName={setTaskName}
									descr={descr}
									setDescr={setDescr}
									removeFuncDescr={removeFuncDescr}
									taskDate={taskDate}
									setTaskDate={setTaskDate}
									removeFuncDate={removeFuncDate}
								/>
							))}
						</div>
						:
						<div className={'empty-tasks-block'}>
							Нет активных задач
						</div>
					}
					<div className='add-task-btn'>
						<img src={svgIcon.plus} width={20} onClick={addTask}/>
						<div style={{ marginLeft: 15 }} onClick={addTask}>
							Добавить задачу
						</div>
					</div>
					<div>
						<hr color='#C4C4C4' size='1' style={{ marginTop: 30 }} />
					</div>
					<UiAccordion
						title={completedTasks.length + ' задач выполнено'}
						tasks={completedTasks}
						selected={selected}
						changeSelected={changeSelected}
						deleteTask={deleteTask}
						changeActive={changeActive}
					/>
				</div>
				:
				<div className={'tips'}>
					Для начала работы создайте категорию
				</div>
			}
		</div>
	)
}

export default RightContent
