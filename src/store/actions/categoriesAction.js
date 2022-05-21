import {GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../types/categoriesType";
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

export const getCategoriesFetch = () => {
    return $api.get('/categories')
}