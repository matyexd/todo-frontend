import React, {useEffect, useState} from 'react'
import SignUp from '../../components/Auth/SignUp/SignUp'
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {clearAuthUserStoreAction, loginAction} from "../../store/actions/authUserAction";
import {clearRegistrationStoreAction, registrationAction} from "../../store/actions/registrationAction";

const SignUpPage = (props) => {

	const navigate = useNavigate()
	const [email , setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [errors, setErrors] = useState([])

	useEffect(() => {
		if (localStorage.getItem('id_user')) {
			navigate('/')
		}
	},[])

	useEffect(() => {
		const {isReg, error, isLoading} = props.registrationUser
		if (error) {
			setErrors([error])
		}
		if (!error && isReg && !isLoading) {
			props.clearStore()
			navigate('/login')
		}
	}, [props.registrationUser])


	const handleButtonRegistration = () => {
		const dataError = []
		if (!email) {
			dataError.push('Введите email')
		}

		if (!password) {
			dataError.push('Введите пароль')
		}

		if (!repeatPassword) {
			dataError.push('Введите пароль повторно')
		}

		if (password !== repeatPassword) {
			dataError.push('Пароли не совпадают')
		}

		if (dataError.length) {
			setErrors(dataError)
		} else if (email && password) {
			props.register(email, password)
		}
	}

	const handleFocusInput = () => {
		setErrors([])
		props.clearStore()
	}

	return (
		<div className={"SignUp-container"}>
			<div className={"SignUp-topContainer"}>Регистрация
				<div className={"SignUp-content_top"}>
					<input type="email" placeholder={"почта"} onFocus={() => handleFocusInput()} value={email} onChange={(e) => setEmail(e.target.value)}/>
					<input type="password" placeholder={"пароль"} onFocus={() => handleFocusInput()} value={password} onChange={(e) => setPassword(e.target.value)}/>
					<input type="password" placeholder={"пароль"} onFocus={() => handleFocusInput()} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
					<button className={"SignUp_Btn"} style={{backgroundColor: "#494949"}} onClick={() => handleButtonRegistration()}>Регистрация</button>
					<div className={"SignUp-text"}><Link to={'/login'}>Войти</Link></div>
				</div>
			</div>
			<ul className="errors">
				{
					errors.map((error) => <li className="error" key={error.length}>{error}</li>)
				}
			</ul>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		registrationUser: state.registrationUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register: (email, password) => dispatch(registrationAction(email, password)),
		clearStore: () => dispatch(clearRegistrationStoreAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
