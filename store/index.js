import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { authReducer as auth } from './auth/authReducer';
import { recipeReducer as allRecipes } from './recipes/recipeReducer';
import { cookbookReducer as cookbook } from './cookbook/cookbookReducer';
import { singleRecipeReducer as singleRecipe } from './singleRecipe/singleRecipeReducer';
import { versionControlRecucer as versionsList } from './version-control/versionControlReducer';
import { navigationReducer as navigation } from './navigation/navigationReducer';
import { ingredientPredictionReducer as ingredientPrediction } from './ingredientPrediction/ingredientPredictionReducer';
import { usersReducer as users } from './users/usersReducer';
import { recipeGenerateReducer as generateRecipe } from './generate/generateRecipeReducer';

const rootReducer = combineReducers({
  auth,
  allRecipes,
  cookbook,
  singleRecipe,
  versionsList,
  navigation,
  ingredientPrediction,
  users,
  generateRecipe,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
