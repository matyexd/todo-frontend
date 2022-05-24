import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import HomePage from './pages/private/HomePage'
import LogInPage from './pages/public/LogInPage'
import SignUpPage from './pages/public/SignUpPage'
import {Provider} from "react-redux";
import {store} from "./store/configureStore";

function App() {

	const error = console.error;
	function logError(...parameters) {
		let filter = parameters.find(parameter => {
			return (
				// Filter error because XXX
				// parameter.includes("Warning: %s is deprecated in StrictMode")
				// Another error to filter because of YYYY
				parameter.includes("Warning:")
			);
		});
		if(!filter) error(...parameters);
	}
	console.error  = logError;

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
