import React, {useEffect} from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'
import {connect} from "react-redux";
import {clearAuthUserStoreAction, getUserAction, loginAction} from "../../store/actions/authUserAction";
import {useNavigate} from "react-router-dom";
import {getCategories} from "../../store/actions/categoriesAction";

const HomePage = (props) => {

	const navigate = useNavigate()

	useEffect(() => {
		if (!localStorage.getItem('id_user')) {
			navigate('/login')
		} else {
			props.getUser(localStorage.getItem('id_user'))
			props.getCategories()
		}
	}, [])

	return (
		<div className='container'>
			<div className='left-content'>
				<LeftContent categories={props.categories}/>
			</div>
			<div className='right-content'>
				<RightContent clearAuthUserStore={props.clearAuthUserStore} userData={props.authUser}/>
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
		login: (email, password) => dispatch(loginAction(email, password)),
		clearAuthUserStore: () => dispatch(clearAuthUserStoreAction()),
		getUser: (id) => dispatch(getUserAction(id)),
		getCategories: () => dispatch(getCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
