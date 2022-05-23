import {
    CLEAR_CATEGORIES_STORE,
    GET_CATEGORIES,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY
} from "../types/categoriesType";


const defaultState = {
    categories: [],
    error: '',
    isLoading: true,
    activeCategory: -1,
}

export default function categoriesReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CATEGORIES_SUCCESS:
            console.log('success get categories')
            // console.log(action.payload)

            const categories = categoriesFilter(action.payload)
            return {
                ...state,
                categories: categories,
                isLoading: false,
                activeCategory: categories.length > 0 ? categories[0].id : -1
            }
        case GET_CATEGORIES_FAIL:
            console.log('fail get categories')
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                error: 'Что то пошло не так'
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        case CLEAR_CATEGORIES_STORE:
            return {
                categories: [],
                error: '',
                isLoading: true,
                activeCategory: -1,
            }
        default:
            return state
    }
}

const categoriesFilter = (categories) => {
    let userId = localStorage.getItem('id_user')
    const newArray = categories.filter((item) => {
        return Number(item.userId.id) === Number(userId)
    })
    return newArray.map(item => {
        return {id: item.id, text: item.title, tasks: item.tasks}
    })
}