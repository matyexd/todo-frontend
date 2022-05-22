import {all} from 'redux-saga/effects'
import {authUserSagaWatcher, getUserSagaWatcher} from "./authUserSaga";
import {registrationWatcher} from "./registrationSaga";
import {categoriesWatcher} from "./categoriesSaga";

export function* rootSaga() {
    yield all([authUserSagaWatcher(), registrationWatcher(), getUserSagaWatcher(), categoriesWatcher()])
}