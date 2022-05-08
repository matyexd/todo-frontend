import React, {useState} from 'react'
import style from './style.css'
import ava from '../../../assets/svg/profile-logo.svg'
import { UiAvatar } from '../../ui-kit'
import TaskItem from './TaskItem/TaskItem'
import { svgIcon } from '../../../assets/svg'
import UiAccordion from '../../ui-kit/accordion/UiAccordion/UiAccordion'
import ModalWindow from "./ModalWindow/ModalWindow";

const RightContent = () => {

	const activeTasks = [
		{ id: 1, title: 'Захватить мир', description: 'Описание задачи 1', date: '28 января', active: true},
		{ id: 2, title: 'Помыть посуду', description: 'Описание задачи 2', date: '29 января', active: true},
		{ id: 3, title: 'Убраться в комнате', description: 'Описание задачи 3', date: '30 января', active: true},
		{ id: 4, title: 'Купить самолет', description: 'Описание задачи 4', date: '28 января', active: true},
		{ id: 5, title: 'Угнать машину', description: 'Описание задачи 5', date: '29 января', active: true},
	]

	const completedTasks = [
		{ id: 1, title: 'Купить танк', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 2, title: 'Починить книгу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 3, title: 'Организовать бой носорогов', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 4, title: 'Заказать такси', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 5, title: 'Почитать старших', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 6, title: 'Устроиться на работу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 7, title: 'Взломать сейф', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 8, title: 'Покоримить крокодила', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 9, title: 'Ловить мух', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 10, title: 'Покрасить зебру', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 11, title: 'Сходить в магазин', description: 'Описание задачи', date: '20 апреля', active: false },
	]

	const [modalActive, setModalActive] = useState(false)

	return (
		<div className='right-content-container'>
			<div className='right-content__top'>
				<div className='right-content__title'>Заголовок</div>
				<div>
					<div onClick={() => setModalActive(true)}>
						<UiAvatar src={ava} size={73} />
					</div>
					<ModalWindow active={modalActive} setActive={setModalActive} />
				</div>
			</div>
			<div style={{ marginTop: 40 }}>
				{activeTasks.map(item => (
					<TaskItem id={item.id} title={item.title} description={item.description} date={item.date} active={item.active}/>
				))}
			</div>
			<div style={{ display: 'flex', marginLeft: 7, marginTop: 40 }}>
				<img src={svgIcon.plus} width={20} />
				<div style={{ marginLeft: 15 }}>Добавить задачу</div>
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
