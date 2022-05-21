import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_LOGIN, GET_USER} from "../store/types/authUserType";
import {
    getUserFailAction,
    getUserFetch,
    getUserSuccessAction,
    loginFailAction,
    loginFetch,
    loginSuccessAction
} from "../store/actions/authUserAction";

function* authUserSagaWorker({payload}) {
    try {
        const data = yield call(loginFetch, payload);
        console.log(data.data)
        yield put(loginSuccessAction(data.data))
    } catch (e) {
        yield put(loginFailAction(e.response.data))
    }
}

export function* authUserSagaWatcher() {
    yield takeEvery(AUTH_LOGIN, authUserSagaWorker);
}

function* getUserSagaWorker({payload}) {
    try {
        const data = yield call(getUserFetch, payload);
        yield put(getUserSuccessAction(data.data))
    } catch (e) {
        yield put(getUserFailAction(e.response.data))
    }
}

export function* getUserSagaWatcher() {
    yield takeEvery(GET_USER, getUserSagaWorker);
}


