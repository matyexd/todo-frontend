import {
    AUTH_SUCCESS,
    AUTH_CLEAR_STORE,
    AUTH_LOGIN,
    AUTH_FAIL,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    UPDATE_USERNAME, UPDATE_USERNAME_SUCCESS, UPDATE_USERNAME_FAIL
} from "../types/authUserType";
import $api from "../../http";

export const loginAction = (email, password) => ({
    type: AUTH_LOGIN,
    payload: {email, password}
})

export const loginSuccessAction = (payload) => ({
    type: AUTH_SUCCESS,
    payload: payload
})

export const loginFailAction = (payload) => ({
    type: AUTH_FAIL,
    payload: payload
})

export const clearAuthUserStoreAction = () => ({
    type: AUTH_CLEAR_STORE
})

// при обновлении страницы эти экшены

export const getUserAction = (id) => ({
    type: GET_USER,
    payload: {id}
})

export const getUserSuccessAction = (payload) => ({
    type: GET_USER_SUCCESS,
    payload: payload
})

export const getUserFailAction = (payload) => ({
    type: GET_USER_FAIL,
    payload: payload
})

export const updateUsernameAction = (id, newUsername) => ({
    type: UPDATE_USERNAME,
    payload: {id, newUsername}
})

export const updateUsernameSuccessAction = (payload) => ({
    type: UPDATE_USERNAME_SUCCESS,
    payload: payload
})

export const updateUsernameFailAction = (payload) => ({
    type: UPDATE_USERNAME_FAIL,
    payload: payload
})


export const loginFetch = ({email, password}) => {
    return $api.post('/auth/sign-in', {"email" : email, "password" : password})
}

export const getUserFetch = ({id}) => {
    return $api.get('/users/' + id)
}

export const updateUsernameFetch = ({id, newUsername}) => {
    return $api.patch('/users/'+String(id), {"username" : newUsername})
}

