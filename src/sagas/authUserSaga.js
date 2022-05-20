import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_LOGIN} from "../store/types/authUserType";
import {loginFailAction, loginFetch, loginSuccessAction} from "../store/actions/authUserAction";

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
