import {
  START_FETCH_COOKBOOK,
  FETCH_COOKBOOK_SUCCESS,
  FETCH_COOKBOOK_FAILURE,
  START_FETCH_ALL_COOKBOOK,
  FETCH_ALL_COOKBOOK_SUCCESS,
  FETCH_ALL_COOKBOOK_FAILURE,
  ADD_COOKBOOK_RECIPE,
  UPDATE_COOKBOOK_RECIPE,
  DELETE_COOKBOOK_RECIPE,
} from './cookbookAction';

const initState = {
  cookbookRecipes: [],
  entireCookbook: [],
  isLoading: false,
  error: null,
};

const splitRecipeByTags = (recipe) => {
  return recipe.tags.map((tag) => {
    return { ...recipe, tags: [tag] };
  });
};
let recipeSplitByTags;

export const cookbookReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCH_COOKBOOK:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_COOKBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cookbookRecipes: action.payload,
      };
    case FETCH_COOKBOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case START_FETCH_ALL_COOKBOOK:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_ALL_COOKBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entireCookbook: action.payload,
      };
    case FETCH_ALL_COOKBOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_COOKBOOK_RECIPE:
      recipeSplitByTags = splitRecipeByTags(action.payload);
      return {
        ...state,
        entireCookbook: [...state.entireCookbook, ...recipeSplitByTags],
      };
    case UPDATE_COOKBOOK_RECIPE:
      const updatedRecipe = action.payload;
      recipeSplitByTags = splitRecipeByTags(updatedRecipe);
      return {
        ...state,
        entireCookbook: [
          ...state.entireCookbook.filter(
            (recipe) => recipe.id !== updatedRecipe.id
          ),
          ...recipeSplitByTags,
        ],
      };
    case DELETE_COOKBOOK_RECIPE:
      return {
        ...state,
        entireCookbook: state.entireCookbook.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
