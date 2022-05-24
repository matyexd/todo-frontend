import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_TASKS, DELETE_TASKS, UPDATE_TASKS} from "../store/types/tasksType";
import {
    addTaskFailAction,
    addTaskFetch,
    addTaskSuccessAction, updateTaskFailAction,
    updateTaskFetch,
    updateTaskSuccessAction,
    deleteTaskFetch,
    deleteTaskFailAction,
    deleteTaskSuccessAction,
} from "../store/actions/tasksAction";


function* addTasksWorker({payload}) {
    try {
        const data = yield call(addTaskFetch, payload);
        yield put(addTaskSuccessAction(data.data))
    } catch (e) {
        console.log(e)
        yield put(addTaskFailAction(e))
    }
}

function* editTasksWorker({payload}) {
    try {
        const data = yield call(updateTaskFetch, payload);
        yield put(updateTaskSuccessAction(data.data))
    } catch (e) {
        console.log(e)
        yield put(updateTaskFailAction(e))
    }
}

function* deleteTasksWorker({payload}) {
    try {
        const data = yield call(deleteTaskFetch, payload);
        yield put(deleteTaskSuccessAction(data.data))
    } catch (e) {
        console.log(e)
        yield put(deleteTaskFailAction(e.response.data))
    }
}

export function* tasksWatcher() {
    yield takeEvery(ADD_TASKS, addTasksWorker);
    yield takeEvery(DELETE_TASKS, deleteTasksWorker);
    yield takeEvery(UPDATE_TASKS, editTasksWorker);
}
