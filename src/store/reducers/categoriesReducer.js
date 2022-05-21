import {GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../types/categoriesType";


const defaultState = {
    categories: [],
    error: '',
    isLoading: true
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

const categoriesFilter = (categories) => {
    let userId = localStorage.getItem('id_user')
    const newArray = categories.filter((item) => {
        return Number(item.userId.id) === Number(userId)
    })
    return newArray.map(item => ({id: item.id, text: item.title}))
}