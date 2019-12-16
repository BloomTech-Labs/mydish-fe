import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer as auth } from "./auth/authReducer";
import { recipeReducer as allRecipes } from "./auth/recipeReducer";

const rootReducer = combineReducers({ auth, allRecipes });

export const store = createStore(rootReducer, applyMiddleware(thunk));
