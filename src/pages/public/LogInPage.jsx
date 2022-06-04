import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {clearAuthUserStoreAction, loginAction} from "../../store/actions/authUserAction";
import {Link, useNavigate} from "react-router-dom";
import style from '../../components/Auth/LogIn/style.css'


const LogInPage = (props) => {
	const navigate = useNavigate();

	const [email , setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState([])

	const handleButtonLogin = () => {
		const dataError = []
		if (!email) {
			dataError.push('Введите email')
		}
		if (!password) {
			dataError.push('Введите пароль')
		}

		if (dataError.length) {
			setErrors(dataError)
		} else if (email && password) {
			props.login(email, password)
		}
	}

	const handleOnFocus = () => {
		setErrors([])
		props.clearAuthUserStore()
	}


	useEffect(() => {
		if (localStorage.getItem('id_user')) {
			navigate('/')
		}
	}, [])

	useEffect(() => {
		console.log(props.authUser)
		const {user, isAuth, error, isLoading} = props.authUser
		if (error) {
			setErrors([error])
		}
		if (!error && isAuth && !isLoading) {
			navigate('/')
		}
	}, [props.authUser])

	return (
			<div className={"LogIn-container"}>
				<div className={"LogIn-topContainer"}>Войти
					<div className={"LogIn-content_top"} style={{marginTop: 20}}>
						<input onFocus={() => handleOnFocus()} type="email" placeholder={"почта"} value={email} onChange={(e) => setEmail(e.target.value)}/>
						<input onFocus={() => handleOnFocus()} type="password" placeholder={"пароль"} value={password} onChange={(e) => setPassword(e.target.value)} style={{marginTop: 20}}/>
						<button className={"LogIn_Btn"} style={{backgroundColor: "#494949", marginTop: 20}} onClick={() => handleButtonLogin()}> Вход</button>
						<div className={"LogIn-text"}><Link to={"/signup"}>Нет аккаунта? Зарегистрироваться </Link> </div>
					</div>
				</div>
				{(errors.length !== 0) &&
				<ul className="errors">
					{
						errors.map((error) => <li className="error" key={error.length}>{error}</li>)
					}
				</ul>
				}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)
