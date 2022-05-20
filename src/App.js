import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import HomePage from './pages/private/HomePage'
import LogInPage from './pages/public/LogInPage'
import SignUpPage from './pages/public/SignUpPage'
import {Provider} from "react-redux";
import {store} from "./store/configureStore";

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='login' element={<LogInPage />} />
					<Route path='signup' element={<SignUpPage />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
		</Provider>
	)
}

export default App
