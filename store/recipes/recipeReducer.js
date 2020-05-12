import {
  START_FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
} from './recipeActions';

const initState = {
  recipeList: [],
  isLoading: true,
  isSubmitting: false,
  error: null,
};

export const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCH_RECIPES:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipeList: action.payload,
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };
    case UPDATE_RECIPE:
      const updatedRecipe = action.payload;
      return {
        ...state,
        recipeList: state.recipeList.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
      };
    case DELETE_RECIPE_START:
      return {
        ...state,
        isSubmitting: true,
        isLoading: true,
        error: null,
      };

    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        recipeList: state.recipeList.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };

    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
