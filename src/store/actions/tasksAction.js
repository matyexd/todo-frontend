import {
    ADD_TASKS,
    ADD_TASKS_FAIL,
    ADD_TASKS_SUCCESS,
    DELETE_TASKS_SUCCESS,
    DELETE_TASKS_FAIL,
    DELETE_TASKS,
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_FAIL,
    UPDATE_TASKS, SET_LOADING_TASKS
} from "../types/tasksType";
import $api from "../../http";

export const addTaskAction = (title, description, categoryId, endDate) => ({
    type: ADD_TASKS,
    payload: {title, description, categoryId, endDate}
})

export const addTaskSuccessAction = (payload) => ({
    type: ADD_TASKS_SUCCESS,
    payload: payload,
})

export const addTaskFailAction = (payload) => ({
    type: ADD_TASKS_FAIL,
    payload: payload,
})

export const deleteTaskAction = (id) => ({
    type: DELETE_TASKS,
    payload: {id}
})

export const deleteTaskSuccessAction = (payload) => ({
    type: DELETE_TASKS_SUCCESS,
    payload: payload,
})

export const deleteTaskFailAction = (payload) => ({
    type: DELETE_TASKS_FAIL,
    payload: payload,
})

export const updateTaskAction = (id, title, description, endDate, status) => ({
    type: UPDATE_TASKS,
    payload: {id, title, description, endDate, status}
})

export const updateTaskSuccessAction = (payload) => ({
    type: UPDATE_TASKS_SUCCESS,
    payload: payload,
})

export const updateTaskFailAction = (payload) => ({
    type: UPDATE_TASKS_FAIL,
    payload: payload,
})

export const setLoadingTasksAction = () => ({
    type: SET_LOADING_TASKS
})

export const addTaskFetch = ({title, description, categoryId, endDate}) => {
    console.log(title, description, categoryId, endDate)
    return $api.post('/tasks', {"title" : title, "description" : description, "categoryId" : String(categoryId), "endDate" : endDate, "status" : "CREATED"})
}

export const updateTaskFetch = ({id, title, description, endDate, status}) => {
    return $api.patch('/tasks/' + String(id), {"title" : title, "description" : description, "endDate" : endDate, "status" : status})
}

export const deleteTaskFetch = ({id}) => {
    return $api.delete('/tasks/' + String(id))
}