import {AUTH_LOGIN, AUTH_SUCCESS, AUTH_FAIL, AUTH_CLEAR_STORE} from "../types/authUserType";

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

        default:
            return state
    }
}