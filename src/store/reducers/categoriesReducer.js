import {GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../types/categoriesType";


const defaultState = {
    categories: {},
    error: '',
    isLoading: false
}

export default function categoriesReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: {user: 1},
                isLoading: false
            }
        case GET_CATEGORIES_FAIL:
            console.log('fail get categories')
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                error: 'Что то пошло не так'
            }
        default:
            return state
    }
}