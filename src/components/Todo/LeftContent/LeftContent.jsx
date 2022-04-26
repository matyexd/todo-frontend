import React, {useState} from 'react'
import style from './style.css'
import {svgIcon} from "../../../assets/svg";

const LeftContent = () => {
	const mas = [
		{ id: 1, text: 'Категория 1' },
		{ id: 2, text: 'Категория 2' },
		{ id: 3, text: 'Категория 3' },
		{ id: 4, text: 'Категория 4' },
		{ id: 5, text: 'Категория 5' },
	]
	let [highlighted,setHighlighted] = useState(1);

	return (
		<div className='left-content-container'>
			<div className="left-content-topContainer">
				<div className="left-content__top">
					<div className='left-content__title'>Список категорий</div>
				</div>
				<div className="left-content__middle">
					{mas.map(item => (
						item.id === highlighted ?
						<div className="left-content__item" style={{backgroundColor: "#DBDBDB"}}>
							<div className="left-content__itemImg"><img src={svgIcon.dot} width={12}/></div>
							{item.text}
						</div>
							:
						<div className="left-content__item" onClick={() => setHighlighted(item.id)}>
							<div className="left-content__itemImg"><img src={svgIcon.dot} width={12}/></div>
							{item.text}
						</div>
					))}
				</div>
			</div>
			<div className="left-content-botContainer">
					<div className="left-content__addIcon">
						<img src={svgIcon.plus} width={20}/>
					</div>
					<div className="left-content__addText">Добавить список</div>
				</div>

		</div>

	)

}

export default LeftContent
