import React from 'react'
import style from './style.css'
import {Link} from "react-router-dom";
const SignUp = () => {

	return (
		<div className={"SignUp-container"}>
			<div className={"SignUp-topContainer"}>Регистрация
				<div className={"SignUp-content_top"}>
					<input type="email" placeholder={"почта"}/>
					<input type="password" placeholder={"пароль"}/>
					<input type="password" placeholder={"пароль"}/>
					<button className={"SignUp_Btn"} style={{backgroundColor: "#494949"}}>Регистрация</button>
					<div className={"SignUp-text"}><Link to={'/login'}>Войти</Link></div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
