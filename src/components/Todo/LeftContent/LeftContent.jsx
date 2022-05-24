import React, { useState, useEffect } from 'react'
import style from './style.css'
import { svgIcon } from '../../../assets/svg'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'

const LeftContent = ({categories, setActiveCategory, addCategory, deleteCategory, updateCategory, getCategories, toggleLoadingCategory}) => {
	const [mas, changeMas] = useState([])
	let [highlighted, setHighlighted] = useState(1)
	let [editable, setEditable] = useState(-1)
	let [categoryName, setCategoryName] = useState('')
	const [addCategoryLoading, setAddCategoryLoading] = useState(false)

	const handleAddCategory = () => {
		let text = 'Новая категория'
		if (mas.length >= 1) {
			changeMas([...mas, { id: mas[mas.length - 1].id + 1, text: text}])
		}
		else {
			changeMas([...mas, {id: 1, text: text}])
		}
		addCategory(localStorage.getItem('id_user'), text)
		setAddCategoryLoading(true)
	}

	console.log(categories)

	useEffect(() => {
		if (!categories.isLoading && !addCategoryLoading) {
			setHighlighted(categories.activeCategory)
			changeMas(categories.categories)
		}
		if (!categories.isLoadingAddCategory) {
			toggleLoadingCategory()
			getCategories()
			setAddCategoryLoading(false)
		}

	}, [categories])

	const removeFunc = (id) => {
		for (let i = 0; i < mas.length; i++) {
			if (mas[i].id === id) {
				if (categoryName) {
					updateCategory(id, categoryName)
					mas[i].text = categoryName;
				}
			}
		}
		changeMas([...mas]);
		setEditable("-1")
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			console.log('enter press here! ')
		}
	}

	const handleChangeCategory = (id) => {
		setHighlighted(id)
		if (!id) {
			setActiveCategory(-1)
		} else {
			setActiveCategory(id)
		}

	}

	return (
		<div className='left-content-container'>
			<div className='left-content-topContainer'>
				<div className='left-content__top'>
					<div className='left-content__title'>Список категорий</div>
				</div>
				{mas.length !== 0 ?
					<div className='left-content__middle'>
						{mas.map(item =>
							item.id === highlighted ? (
								<div className='left-content__item__highlighted' style={{backgroundColor: '#DBDBDB'}}
									 key={item.id}>
									<div>
										<div className='left-content__flex-box'>
											<div className='left-content__itemImg'>
												<img src={svgIcon.dot} width={12}/>
											</div>
											{item.id === editable ? (
												<form className="item-text" id="form"
													  onSubmit={() => removeFunc(item.id)}>
													<input className='item-text-input' type="text" value={categoryName}
														   onChange={(e) => setCategoryName(e.target.value)}/>
												</form>
											) : (
												<div className="item-text" onDoubleClick={() => {
													setCategoryName(item.text);
													setEditable(item.id)
												}}>{item.text}</div>)
											}
										</div>
									</div>
									<div
										className="close"
										onClick={() => {
											if (window.confirm('Вы точно хотите удалить эту категорию?')) {
												for (let i = 0; i < mas.length; i++) {
													if (mas[i].id === item.id) {
														mas.splice(i--, 1);
													}
												}
                        deleteCategory(item.id)
												changeMas([...mas])
											}
										}}
									>
									</div>
								</div>
							) : (
								<div
									key={item.id}
									className='left-content__item'
									onClick={() => handleChangeCategory(item.id)}
								>
									<div className='left-content__itemImg'>
										<img src={svgIcon.dot} width={12}/>
									</div>
									{item.text}
								</div>
							)
						)}
					</div>
					:
					<div className={'tips-category'}>Список пуст</div>
				}
			</div>
			<div className='left-content-botContainer' onClick={() => handleAddCategory()}>
				<div className='left-content__addIcon'>
					<img src={svgIcon.plus} width={20} />
				</div>
				<div className='left-content__addText'>Добавить список</div>
			</div>
		</div>
	)
}

export default LeftContent
