import {AUTH_SUCCESS,AUTH_CLEAR_STORE,AUTH_LOGIN,AUTH_FAIL} from "../types/authUserType";
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

export const loginFetch = ({email, password}) => {
    return $api.post('/auth/sign-in', {"email" : email, "password" : password})
}

