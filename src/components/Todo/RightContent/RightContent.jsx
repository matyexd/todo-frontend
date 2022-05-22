import React, {useState} from 'react'
import style from './style.css'
import ava from '../../../assets/svg/profile-logo.svg'
import { UiAvatar } from '../../ui-kit'
import TaskItem from './TaskItem/TaskItem'
import { svgIcon } from '../../../assets/svg'
import UiAccordion from '../../ui-kit/accordion/UiAccordion/UiAccordion'
import ModalWindow from "./ModalWindow/ModalWindow";

const RightContent = ({clearAuthUserStore, userData}) => {

	const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus rhoncus elit, a rhoncus mi commodo sit amet. Sed tellus nunc, vulputate sit amet viverra ultrices, venenatis vitae tortor. Mauris cursus augue quis nisi tempor eleifend. Mauris mi velit, facilisis ut pharetra eu, dignissim sed nisi. Praesent dapibus pharetra rutrum. Quisque accumsan malesuada nisl sed cursus. Etiam varius metus quam, non posuere diam sodales at. Aenean tincidunt turpis orci. Sed sed lectus ac urna lacinia efficitur nec nec dolor. Duis ex nulla, tempor id gravida iaculis, lobortis vel risus. Sed ac condimentum arcu, et tristique urna. Sed interdum ligula ut sem varius pretium. Vivamus in gravida nisl, id lobortis massa. Duis lacinia augue id ante vestibulum cursus.\n' +
		'\n' +
		'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada aliquam turpis, eget dignissim justo facilisis in. Donec lorem tortor, tempor id arcu ut, aliquam vulputate erat. Proin pharetra bibendum erat, at interdum eros semper ac. Curabitur rhoncus elit orci, quis volutpat eros hendrerit nec. Etiam ultricies neque in tellus vehicula, vitae porttitor mi commodo. Proin posuere purus vitae suscipit efficitur. Fusce lorem lorem, dictum eget commodo vel, malesuada vitae augue. Pellentesque finibus, nulla at euismod maximus, odio dolor cursus mi, vel pharetra sapien mi quis orci. Praesent non enim odio. Mauris ac ex id lacus consequat cursus.'

	const [tasks, setTasks] = useState([
		{ id: 1, title: 'Захватить мир', description: Lorem + Lorem + Lorem, date: '28 января', active: true},
		{ id: 2, title: 'Помыть посуду', description: Lorem, date: '29 января', active: true},
		{ id: 3, title: 'Убраться в комнате', description: Lorem, date: '', active: true},
		{ id: 4, title: 'Купить самолет', description: Lorem, date: '28 января', active: true},
		{ id: 5, title: 'Угнать машину', description: Lorem, date: '', active: true},
		{ id: 101, title: 'Купить танк', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 102, title: 'Починить книгу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 103, title: 'Организовать бой носорогов', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 104, title: 'Заказать такси', description: 'Описание задачи', date: '', active: false },
		{ id: 105, title: 'Почитать старших', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 106, title: 'Устроиться на работу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 107, title: 'Взломать сейф', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 108, title: 'Покоримить крокодила', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 109, title: 'Ловить мух', description: 'Описание задачи', date: '', active: false },
		{ id: 110, title: 'Покрасить зебру', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 111, title: 'Сходить в магазин', description: 'Описание задачи', date: '20 апреля', active: false },
	])

	let activeTasks = tasks.filter(item => item.active === true)
	let completedTasks = tasks.filter(item => item.active !== true)

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

	const deleteTask = (id) => setTasks(tasks.filter(item => item.id !== id))

	const addTask = () => {
		let createdId = Math.random()
		setTasks([...tasks, {id: createdId, title: 'Созданная задача', description: 'Созданная задача', date: '', active: true}])
		setDescr('Созданная задача')
		changeSelected(createdId)
		setTaskName('Созданная задача')
		setEditable(createdId)
	}

	const changeActive = (id) => {
		for (let item of tasks) {
			if (item.id === id) {
				if (item.active === true) {
					item.active = !item.active
					completedTasks.unshift(item)
					activeTasks = activeTasks.filter(item => item.id !== id)
					break
				}
				else {
					item.active = !item.active
					activeTasks.unshift(item)
					completedTasks = completedTasks.filter(item => item.id !== id)
					break
				}
			}
		}
	}

	return (
		<div className='right-content-container'>
			<div className='right-content__top'>
				<div className='right-content__title'>Список задач</div>
				<div>
					<div onClick={() => setModalActive(true)}>
						<UiAvatar src={ava} size={73} />
					</div>
					<ModalWindow active={modalActive} setActive={setModalActive} clearAuthUserStore={clearAuthUserStore} userData={userData}/>
				</div>
			</div>
			<div style={{ marginTop: 40 }}>
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
			/>
		</div>
	)
}

export default RightContent
