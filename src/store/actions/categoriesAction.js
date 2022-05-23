import {
    ADD_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAIL,
    CLEAR_CATEGORIES_STORE,
    GET_CATEGORIES,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY,
    TOGGLE_LOADING_CATEGORY
} from "../types/categoriesType";
import $api from "../../http";

export const getCategories = () => ({
    type: GET_CATEGORIES,
})

export const getCategoriesSuccess = (payload) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: payload
})

export const getCategoriesFail = (payload) => ({
    type: GET_CATEGORIES_FAIL,
    payload: payload
})

export const setActiveCategoryActive = (id) => ({
    type: SET_ACTIVE_CATEGORY,
    payload: id
})

export const clearCategoriesStoreAction = () => ({type: CLEAR_CATEGORIES_STORE})


export const addCategoryAction = (userId, title) => ({
    type: ADD_CATEGORY,
    payload: {userId, title}
})

export const addCategorySuccessAction = (payload) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: payload
})

export const addCategoryFailAction = (payload) => ({
    type: ADD_CATEGORY_FAIL,
    payload: payload
})


export const deleteCategoryAction = (id) => ({
    type: DELETE_CATEGORY,
    payload: {id}
})

export const deleteCategorySuccessAction = (payload) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: payload
})

export const deleteCategoryFailAction = (payload) => ({
    type: DELETE_CATEGORY_FAIL,
    payload: payload
})


export const updateCategoryAction = (id, title) => ({
    type: UPDATE_CATEGORY,
    payload: {id, title}
})

export const updateCategorySuccessAction = (payload) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: payload
})

export const updateCategoryFailAction = (payload) => ({
    type: UPDATE_CATEGORY_FAIL,
    payload: payload
})

export const getCategoriesFetch = () => {
    return $api.get('/categories')
}

export const addCategoryFetch = ({userId, title}) => {
    return $api.post('/categories', {"title" : title, "userId" : userId})
}

export const deleteCategoryFetch = ({id}) => {
    return $api.delete('/categories/' + String(id))
}

export const updateCategoryFetch = ({id, title}) => {
    return $api.patch('/categories/'+ String(id) , {"title" : title})
}

export const toggleLoadingCategory = () => ({
    type: TOGGLE_LOADING_CATEGORY
})