import {call, put, takeEvery} from 'redux-saga/effects';
import {REG_LOGIN} from "../store/types/registrationType";
import {
    addCategoryFetch,
    addCategorySuccessAction,
    deleteCategoryFetch,
    getCategoriesFail,
    getCategoriesFetch,
    getCategoriesSuccess,
    updateCategoryFetch,
    updateCategorySuccessAction,
    deleteCategorySuccessAction,
    deleteCategoryFailAction, updateCategoryFailAction, addCategoryFailAction
} from "../store/actions/categoriesAction";
import {ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY} from "../store/types/categoriesType";

function* getCategoriesWorker() {
    try {
        const data = yield call(getCategoriesFetch);
        yield put(getCategoriesSuccess(data.data))
    } catch (e) {
        yield put(getCategoriesFail(e.response.data))
    }
}

function* addCategoriesWorker({payload}) {
    try {
        const data = yield call(addCategoryFetch, payload);
        yield put(addCategorySuccessAction(data.data))
    } catch (e) {
        console.log(e)
        yield put(addCategoryFailAction(e.response.data))
    }
}

function* editCategoriesWorker({payload}) {
    try {
        const data = yield call(updateCategoryFetch, payload);
        yield put(updateCategorySuccessAction(data.data))
    } catch (e) {
        yield put(updateCategoryFailAction(e.response.data))
    }
}

function* deleteCategoriesWorker({payload}) {
    try {
        const data = yield call(deleteCategoryFetch, payload);
        yield put(deleteCategorySuccessAction(data.data))
    } catch (e) {
        yield put(deleteCategoryFailAction(e.response.data))
    }
}

export function* categoriesWatcher() {
    yield takeEvery(GET_CATEGORIES, getCategoriesWorker);
    yield takeEvery(ADD_CATEGORY, addCategoriesWorker);
    yield takeEvery(DELETE_CATEGORY, deleteCategoriesWorker);
    yield takeEvery(UPDATE_CATEGORY, editCategoriesWorker);
}
