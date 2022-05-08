import React, {useState} from 'react'
import style from './style.css'
import ava from '../../../assets/svg/profile-logo.svg'
import { UiAvatar } from '../../ui-kit'
import TaskItem from './TaskItem/TaskItem'
import { svgIcon } from '../../../assets/svg'
import UiAccordion from '../../ui-kit/accordion/UiAccordion/UiAccordion'
import ModalWindow from "./ModalWindow/ModalWindow";

const RightContent = () => {

	const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus rhoncus elit, a rhoncus mi commodo sit amet. Sed tellus nunc, vulputate sit amet viverra ultrices, venenatis vitae tortor. Mauris cursus augue quis nisi tempor eleifend. Mauris mi velit, facilisis ut pharetra eu, dignissim sed nisi. Praesent dapibus pharetra rutrum. Quisque accumsan malesuada nisl sed cursus. Etiam varius metus quam, non posuere diam sodales at. Aenean tincidunt turpis orci. Sed sed lectus ac urna lacinia efficitur nec nec dolor. Duis ex nulla, tempor id gravida iaculis, lobortis vel risus. Sed ac condimentum arcu, et tristique urna. Sed interdum ligula ut sem varius pretium. Vivamus in gravida nisl, id lobortis massa. Duis lacinia augue id ante vestibulum cursus.\n' +
		'\n' +
		'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada aliquam turpis, eget dignissim justo facilisis in. Donec lorem tortor, tempor id arcu ut, aliquam vulputate erat. Proin pharetra bibendum erat, at interdum eros semper ac. Curabitur rhoncus elit orci, quis volutpat eros hendrerit nec. Etiam ultricies neque in tellus vehicula, vitae porttitor mi commodo. Proin posuere purus vitae suscipit efficitur. Fusce lorem lorem, dictum eget commodo vel, malesuada vitae augue. Pellentesque finibus, nulla at euismod maximus, odio dolor cursus mi, vel pharetra sapien mi quis orci. Praesent non enim odio. Mauris ac ex id lacus consequat cursus.'

	const activeTasks = [
		{ id: 1, title: 'Захватить мир', description: Lorem + Lorem + Lorem, date: '28 января', active: true},
		{ id: 2, title: 'Помыть посуду', description: Lorem, date: '29 января', active: true},
		{ id: 3, title: 'Убраться в комнате', description: Lorem, date: '', active: true},
		{ id: 4, title: 'Купить самолет', description: Lorem, date: '28 января', active: true},
		{ id: 5, title: 'Угнать машину', description: Lorem, date: '', active: true},
	]

	const completedTasks = [
		{ id: 1, title: 'Купить танк', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 2, title: 'Починить книгу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 3, title: 'Организовать бой носорогов', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 4, title: 'Заказать такси', description: 'Описание задачи', date: '', active: false },
		{ id: 5, title: 'Почитать старших', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 6, title: 'Устроиться на работу', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 7, title: 'Взломать сейф', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 8, title: 'Покоримить крокодила', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 9, title: 'Ловить мух', description: 'Описание задачи', date: '', active: false },
		{ id: 10, title: 'Покрасить зебру', description: 'Описание задачи', date: '20 апреля', active: false },
		{ id: 11, title: 'Сходить в магазин', description: 'Описание задачи', date: '20 апреля', active: false },
	]

	const [modalActive, setModalActive] = useState(false)
	const [selected, setSelected] = useState(0)
	const changeSelected = (id) => {
		setSelected(id)
	}

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
					<TaskItem
						id={item.id}
						title={item.title}
						description={item.description}
						date={item.date}
						active={item.active}
						selected={selected}
						changeSelected={changeSelected}
					/>
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
