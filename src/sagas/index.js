import {all} from 'redux-saga/effects'
import {authUserSagaWatcher} from "./authUserSaga";

export function* rootSaga() {
    yield all([authUserSagaWatcher()])
}