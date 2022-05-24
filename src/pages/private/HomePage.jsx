import React, {useEffect, useState} from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'
import {connect} from "react-redux";
import {
	clearAuthUserStoreAction,
	getUserAction,
	loginAction,
	updateUsernameAction
} from "../../store/actions/authUserAction";
import {useNavigate} from "react-router-dom";
import {
	addCategoryAction,
	clearCategoriesStoreAction, deleteCategoryAction,
	getCategories,
	setActiveCategoryActive, toggleLoadingCategory, updateCategoryAction
} from "../../store/actions/categoriesAction";
import {
	addTaskAction,
	updateTaskAction,
	deleteTaskAction,
	setLoadingTasksAction
} from "../../store/actions/tasksAction";

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
				<LeftContent
					categories={props.categories}
					setActiveCategory={props.setActiveCategory}
					addCategory={props.addCategory}
					deleteCategory={props.deleteCategory}
					updateCategory={props.updateCategory}
					getCategories={props.getCategories}
					toggleLoadingCategory={props.toggleLoadingCategory}
				/>
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
					addTaskOnServer={props.addTask}
					deleteTaskOnServer={props.deleteTask}
					updateTaskOnServer={props.updateTask}
					toggleLoadingTasks={props.toggleLoadingTasks}
					getCategories={props.getCategories}
					updateUsername={props.updateUsername}
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
		clearCategoriesStore: () => dispatch(clearCategoriesStoreAction()),
		addCategory: (userId, title) => dispatch(addCategoryAction(userId, title)),
		deleteCategory: (id) => dispatch(deleteCategoryAction(id)),
		updateCategory: (id, title) => dispatch(updateCategoryAction(id, title)),
		toggleLoadingCategory: () => dispatch(toggleLoadingCategory()),
		addTask: (title, description, categoryId, endDate) => dispatch(addTaskAction(title, description, categoryId, endDate)),
		deleteTask: (id) => dispatch(deleteTaskAction(id)),
		updateTask: (id, title, description, endDate, status) => dispatch(updateTaskAction(id, title, description, endDate, status)),
		toggleLoadingTasks: () => dispatch(setLoadingTasksAction()),
		updateUsername: (id, newUsername) => dispatch(updateUsernameAction(id, newUsername))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
