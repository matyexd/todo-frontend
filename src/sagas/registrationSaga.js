import {call, put, takeEvery} from 'redux-saga/effects';
import {
    registrationFailAction,
    registrationFetchAction,
    registrationSuccessAction
} from "../store/actions/registrationAction";
import {REG_LOGIN} from "../store/types/registrationType";

function* registrationWorker({payload}) {
    try {
        const data = yield call(registrationFetchAction, payload);
        console.log('success')
        console.log(data)
        yield put(registrationSuccessAction(data))
    } catch (e) {
        console.log('fail')
        console.log(e)
        yield put(registrationFailAction(e.response.data.errors))
    }
}

export function* registrationWatcher() {
    yield takeEvery(REG_LOGIN, registrationWorker);
}
