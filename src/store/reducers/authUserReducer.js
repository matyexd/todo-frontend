import {
    AUTH_LOGIN,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_CLEAR_STORE,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    UPDATE_USERNAME,
    UPDATE_USERNAME_SUCCESS,
    UPDATE_USERNAME_FAIL
} from "../types/authUserType";

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
                user: {
                    id: -1,
                    email: '',
                    username: '',
                },
                isAuth: false,
                error: '',
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

        case UPDATE_USERNAME:
            return {
                ...state,
                isLoading: true,
            }

        case UPDATE_USERNAME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    username: action.payload.username
                }
            }
        case UPDATE_USERNAME_FAIL:
            return {
                ...state,
                isLoading: false,
                error: 'Какая то ошибка'
            }

        default:
            return state
    }
}