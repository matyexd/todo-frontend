import React, {useEffect, useState} from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'
import {connect} from "react-redux";
import {clearAuthUserStoreAction, getUserAction, loginAction} from "../../store/actions/authUserAction";
import {useNavigate} from "react-router-dom";
import {clearCategoriesStoreAction, getCategories, setActiveCategoryActive} from "../../store/actions/categoriesAction";

const HomePage = (props) => {

	const navigate = useNavigate()
	const [tasks, setTasks] = useState([])
	const [tasksLoading, setTasksLoading] = useState(true)

	useEffect(() => {
		if (!localStorage.getItem('id_user')) {
			navigate('/login')
		} else {
			props.getUser(localStorage.getItem('id_user'))
			props.getCategories()
		}
	}, [])

	useEffect(() => {
		if (!props.categories.isLoading) {
			const newTasksArray = props.categories.categories.find(item => item.id === props.categories.activeCategory)
			console.log(props.categories.categories)
			const newNewTasksArray = newTasksArray ? newTasksArray.tasks.map(item => {
				return { id: item.id, title: item.title, description: !item.discription && '', date: item.endDate, active: item.status === "CREATED" ? true : false}
			}) : []
			setTasksLoading(false)
			setTasks(newNewTasksArray)
		}
	}, [props.categories])


	return (

		<div className='container'>
			<div className='left-content'>
				<LeftContent categories={props.categories} setActiveCategory={props.setActiveCategory}/>
			</div>
			<div className='right-content'>
				<RightContent
					clearAuthUserStore={props.clearAuthUserStore}
					userData={props.authUser}
					tasksFromDB={tasks}
					setActiveCategory={props.setActiveCategory}
					tasksLoading={tasksLoading}
					clearCategoriesStore={props.clearCategoriesStore}
					categories={props.categories}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		authUser: state.authUser,
		categories: state.categories
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveCategory: (id) => dispatch(setActiveCategoryActive(id)),
		login: (email, password) => dispatch(loginAction(email, password)),
		clearAuthUserStore: () => dispatch(clearAuthUserStoreAction()),
		getUser: (id) => dispatch(getUserAction(id)),
		getCategories: () => dispatch(getCategories()),
		clearCategoriesStore: () => dispatch(clearCategoriesStoreAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
