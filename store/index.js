import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer as auth } from "./auth/authReducer";
import { recipeReducer as allRecipes } from "./recipes/recipeReducer";
import { cookbookReducer as cookbook } from "./cookbook/cookbookReducer";

const rootReducer = combineReducers({ auth, allRecipes, cookbook });

export const store = createStore(rootReducer, applyMiddleware(thunk));
