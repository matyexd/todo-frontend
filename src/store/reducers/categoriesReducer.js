import {
    ADD_CATEGORY,
    CLEAR_CATEGORIES_STORE,
    GET_CATEGORIES,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY,
    DELETE_CATEGORY_FAIL,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS, TOGGLE_LOADING_CATEGORY,
} from "../types/categoriesType";

import {
    ADD_TASKS,
    ADD_TASKS_FAIL,
    ADD_TASKS_SUCCESS,
    UPDATE_TASKS_FAIL,
    DELETE_TASKS_FAIL,
    UPDATE_TASKS_SUCCESS,
    DELETE_TASKS,
    DELETE_TASKS_SUCCESS,
    UPDATE_TASKS, SET_LOADING_TASKS
} from "../types/tasksType";


const defaultState = {
    categories: [],
    error: '',
    isLoading: true,
    isLoadingAddCategory: true,
    isLoadingTasks: true,
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
                isLoadingAddCategory: true,
                activeCategory: -1,
            }

        // CRUD категорий
        case ADD_CATEGORY:
            return {
                ...state,
                isLoading: true,
                isLoadingAddCategory: true,
                error: ''
            }
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadingAddCategory: false,
                error: ''
            }
        case ADD_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoadingAddCategory: false,
                error: 'Что-то пошло не так'
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: 'Что-то пошло не так'
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                activeCategory: -1,
            }
        case DELETE_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: 'Что-то пошло не так'
            }
        case TOGGLE_LOADING_CATEGORY:
            return {
                ...state,
                isLoadingAddCategory: true,
            }

            // CRUD задач
        case ADD_TASKS:
            return {
                ...state,
                isLoading: true,
                isLoadingTasks: true,
                error: ''
            }

        case ADD_TASKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: '',
            }

        case ADD_TASKS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: 'Что-то пошло не так'
            }

        case UPDATE_TASKS:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case UPDATE_TASKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: '',
            }

        case UPDATE_TASKS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: 'Что-то пошло не так'
            }

        case DELETE_TASKS:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case DELETE_TASKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: '',
            }

        case DELETE_TASKS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoadingTasks: false,
                error: 'Что-то пошло не так'
            }

        case SET_LOADING_TASKS:
            return {
                ...state,
                isLoadingTasks: true,
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