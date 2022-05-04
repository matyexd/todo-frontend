import React from 'react'
import style from './style.css'
const LogIn = () => {

	return (
		<div className={"LogIn-container"}>
			<div className={"LogIn-topContainer"}>Войти
				<div className={"LogIn-content_top"}>
					<input type="email" placeholder={"почта"}/>
					<input type="password" placeholder={"пароль"}/>
					<button className={"LogIn_Btn"} style={{backgroundColor: "#494949"}}> Вход</button>
					<div className={"LogIn-text"}>  Нет аккаунта? Зарегистрироваться </div>
				</div>
			</div>
		</div>
	)
}

export default LogIn
