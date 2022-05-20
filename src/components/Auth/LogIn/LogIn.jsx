import React, {useState} from 'react'
import style from './style.css'
import {Link} from "react-router-dom";

const LogIn = () => {

	return (
		<div className={"LogIn-container"}>
			<div className={"LogIn-topContainer"}>Войти
				<div className={"LogIn-content_top"}>
					<input type="email" placeholder={"почта"}/>
					<input type="password" placeholder={"пароль"}/>
					<button className={"LogIn_Btn"} style={{backgroundColor: "#494949"}}> Вход</button>
					<div className={"LogIn-text"}><Link to={"/signup"}>Нет аккаунта? Зарегистрироваться </Link> </div>
				</div>
			</div>
		</div>
	)
}

export default LogIn
