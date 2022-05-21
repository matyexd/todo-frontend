import {REG_CLEAR_STORE, REG_FAIL, REG_LOGIN, REG_SUCCESS} from "../types/registrationType";
import $api from "../../http";

export const registrationAction = (email, password) => ({
    type: REG_LOGIN,
    payload: {email, password}
})

export const registrationSuccessAction = () => ({
    type: REG_SUCCESS
})

export const registrationFailAction = (payload) => ({
    type: REG_FAIL,
    payload: payload
})

export const clearRegistrationStoreAction = () => ({
    type: REG_CLEAR_STORE,
})

export const registrationFetchAction = ({email, password}) => {
    return $api.post('/auth/sign-up', {"email" : email, "password" : password})
}