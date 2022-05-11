import React, { useState } from 'react'
import style from './style.css'
import { svgIcon } from '../../../assets/svg'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'

const LeftContent = () => {
	const [mas, changeMas] = useState([
		{
			id: 1,
			text: 'Категория 1',
		},
		{ id: 2, text: 'Категория 2' },
		{ id: 3, text: 'Категория 3' },
		{ id: 4, text: 'Категория 4' },
		{ id: 5, text: 'Категория 5' },
	])
	let [highlighted, setHighlighted] = useState(1)
	
	return (
		<div className='left-content-container'>
			<div className='left-content-topContainer'>
				<div className='left-content__top'>
					<div className='left-content__title'>Список категорий</div>
				</div>
				<div className='left-content__middle'>
					{mas.map(item =>
						item.id === highlighted ? (
							<div
								className='left-content__item'
								style={{ backgroundColor: '#DBDBDB' }}
							>
								<div className='left-content__itemImg'>
									<img src={svgIcon.dot} width={12} />
								</div>
								{item.text}
								<a href="#" class="close" 
									onClick= {() => 
										{
											if (window.confirm('Вы точно хотите удалить эту категорию?')) {
												for (let i = 0; i < mas.length; i++) {
													if (mas[i].id === item.id) {
														mas.splice(i--, 1);
													}
												}
												changeMas([...mas])
											};
										}
									}
								></a>
							</div>
						) : (
							<div
								className='left-content__item'
								onClick={() => setHighlighted(item.id)}
							>
								<div className='left-content__itemImg'>
									<img src={svgIcon.dot} width={12} />
								</div>
								{item.text}
							</div>
						)
					)}
				</div>
			</div>
			<div className='left-content-botContainer' onClick={() => changeMas([...mas, { id: mas[mas.length - 1].id + 1, text:"Категория " + (mas[mas.length - 1].id + 1)}])}>
				<div className='left-content__addIcon'>
					<img src={svgIcon.plus} width={20} />
				</div>
				<div className='left-content__addText'>Добавить список</div>
			</div>
		</div>
	)
}

export default LeftContent
