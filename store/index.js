import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer as auth } from "./auth/authReducer";

const rootReducer = combineReducers({ auth });

export const store = createStore(rootReducer, applyMiddleware(thunk));
