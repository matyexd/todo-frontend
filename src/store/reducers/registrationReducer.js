import {REG_CLEAR_STORE, REG_FAIL, REG_LOGIN, REG_SUCCESS} from "../types/registrationType";


const defaultState = {
    isReg: false,
    error: '',
    isLoading: false
}

export default function registrationReducer(state = defaultState, action) {
    switch (action.type) {
        case REG_LOGIN:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case REG_SUCCESS:
            return {
                isReg: true,
                error: '',
                isLoading: false,
            }
        case REG_FAIL:
            let error = ''
            if (action.payload.entityAlreadyExist) {
                error = "Пользователь с таким email уже существует"
            } else {
                error = 'Какая-то ошибка'
            }

            console.log(error)

            return {
                isReg: false,
                error: error,
                isLoading: false
            }
        case REG_CLEAR_STORE:
            return {
                isReg: false,
                error: '',
                isLoading: false
            }
        default:
            return state
    }
}