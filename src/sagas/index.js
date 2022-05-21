import {all} from 'redux-saga/effects'
import {authUserSagaWatcher} from "./authUserSaga";
import {registrationWatcher} from "./registrationSaga";

export function* rootSaga() {
    yield all([authUserSagaWatcher(), registrationWatcher()])
}