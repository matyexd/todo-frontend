import React, {useEffect} from 'react'
import style from './style.scss'
import RightContent from '../../components/Todo/RightContent/RightContent'
import LeftContent from '../../components/Todo/LeftContent/LeftContent'
import {connect} from "react-redux";
import {clearAuthUserStoreAction, loginAction} from "../../store/actions/authUserAction";
import {useNavigate} from "react-router-dom";

const HomePage = (props) => {

	const navigate = useNavigate()

	useEffect(() => {
		if (!localStorage.getItem('id_user')) {
			navigate('/login')
		}
	}, [])

	console.log(props.authUser)

	return (
		<div className='container'>
			<div className='left-content'>
				<LeftContent />
			</div>
			<div className='right-content'>
				<RightContent clearAuthUserStore={props.clearAuthUserStore}/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		authUser: state.authUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(loginAction(email, password)),
		clearAuthUserStore: () => dispatch(clearAuthUserStoreAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
