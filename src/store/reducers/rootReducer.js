import {combineReducers} from "redux";
import authUserReducer from "./authUserReducer";

export const rootReducer = combineReducers({authUser: authUserReducer})