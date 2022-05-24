import {combineReducers} from "redux";
import authUserReducer from "./authUserReducer";
import registrationReducer from "./registrationReducer";
import categoriesReducer from "./categoriesReducer";


export const rootReducer = combineReducers({authUser: authUserReducer, registrationUser: registrationReducer, categories: categoriesReducer})