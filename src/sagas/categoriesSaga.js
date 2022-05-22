import {call, put, takeEvery} from 'redux-saga/effects';
import {
    registrationFailAction,
    registrationFetchAction,
    registrationSuccessAction
} from "../store/actions/registrationAction";
import {REG_LOGIN} from "../store/types/registrationType";
import {getCategoriesFail, getCategoriesFetch, getCategoriesSuccess} from "../store/actions/categoriesAction";
import {GET_CATEGORIES} from "../store/types/categoriesType";

function* categoriesWorker() {
    try {
        const data = yield call(getCategoriesFetch);
        yield put(getCategoriesSuccess(data.data))
    } catch (e) {
        yield put(getCategoriesFail(e.response.data))
    }
}

export function* categoriesWatcher() {
    yield takeEvery(GET_CATEGORIES, categoriesWorker);
}
