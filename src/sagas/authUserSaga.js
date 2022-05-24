import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_LOGIN, GET_USER, UPDATE_USERNAME} from "../store/types/authUserType";
import {
    getUserFailAction,
    getUserFetch,
    getUserSuccessAction,
    loginFailAction,
    loginFetch,
    loginSuccessAction, updateUsernameFailAction, updateUsernameFetch, updateUsernameSuccessAction
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

function* updateUsernameWorker({payload}) {
    try {
        const data = yield call(updateUsernameFetch, payload)
        yield put(updateUsernameSuccessAction(data.data))
    } catch (e) {
        yield put(updateUsernameFailAction(e))
    }
}

export function* authUserSagaWatcher() {
    yield takeEvery(AUTH_LOGIN, authUserSagaWorker);
    yield takeEvery(UPDATE_USERNAME, updateUsernameWorker)
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



