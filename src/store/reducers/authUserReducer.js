import {AUTH_LOGIN, AUTH_SUCCESS, AUTH_FAIL, AUTH_CLEAR_STORE, GET_USER, GET_USER_FAIL, GET_USER_SUCCESS} from "../types/authUserType";

const defaultState = {
    user: {
        id: -1,
        email: '',
        username: '',
    },
    isAuth: false,
    error: '',
    isLoading: false
}

export default function authUserReducer(state = defaultState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case AUTH_SUCCESS:
            console.log('lox')
            localStorage.setItem('id_user', action.payload.id)
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    email: action.payload.email,
                    username: action.payload.username,
                },
                isAuth: true,
                error: '',
                isLoading: false
            }
        case AUTH_FAIL:
            let error
            if (action.payload.errors.email) {
                error = 'Неправильный формат email'
            }
            if (action.payload.errors.incorrectEmailOrPassword) {
                error = 'Неверный логин или пароль'
            }

            return {
                ...state,
                isAuth: false,
                error: error,
                isLoading: false
            }


        case AUTH_CLEAR_STORE:
            localStorage.removeItem('id_user')
            return {
                ...state,
                user: {
                    id: -1,
                    email: '',
                    username: '',
                },
                isAuth: false,
                error: '',
                isLoading: false
            }

        case GET_USER:
            return {
                ...state,
                isLoading: true,
            }
        case GET_USER_SUCCESS:
            console.log('success get user')
            console.log(action.payload)
            return {
                ...state,
                isAuth: true,
                error: '',
                isLoading: false,
                user: action.payload
            }
        case GET_USER_FAIL:
            console.log('fail get user')
            console.log(action.payload)
            return {
                ...state,
                error: 'Что то не так',
                isLoading: false,
                isAuth: false,
            }

        default:
            return state
    }
}