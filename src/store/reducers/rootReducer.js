import {combineReducers} from "redux";
import authUserReducer from "./authUserReducer";
import registrationReducer from "./registrationReducer";

export const rootReducer = combineReducers({authUser: authUserReducer, registrationUser: registrationReducer})