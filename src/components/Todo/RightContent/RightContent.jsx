import React, {useState} from 'react'
import style from './style.css'
import ava from '../../../assets/svg/profile-logo.svg'
import { UiAvatar } from '../../ui-kit'
import TaskItem from './TaskItem/TaskItem'
import { svgIcon } from '../../../assets/svg'
import UiAccordion from '../../ui-kit/accordion/UiAccordion/UiAccordion'
import ModalWindow from "./ModalWindow/ModalWindow";

const RightContent = () => {
	const indexes = [1, 2, 3, 4]

	const completedTaskItem = title => {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: 20,
					marginLeft: 5,
				}}
			>
				<img src={svgIcon.checkMark} alt='' width={20} />
				<div style={{ marginLeft: 20 }}>
					<s>{title}</s>
				</div>
			</div>
		)
	}

	const arr = [
		{ id: 1, text: 'Задача 1' },
		{ id: 2, text: 'Задача 2' },
		{ id: 3, text: 'Задача 3' },
		{ id: 4, text: 'Задача 1' },
		{ id: 5, text: 'Задача 2' },
		{ id: 6, text: 'Задача 3' },
		{ id: 7, text: 'Задача 1' },
		{ id: 8, text: 'Задача 2' },
		{ id: 9, text: 'Задача 3' },
		{ id: 10, text: 'Задача 3' },
		{ id: 11, text: 'Задача 3' },
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
				{indexes.map(item => (
					<TaskItem idI={item} />
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
				title={'65 задач выполнено'}
				tasks={arr}
				renderItem={completedTaskItem}
			/>
		</div>
	)
}

export default RightContent
