import {
  START_GENERATE_INGREDIENTS,
  GENERATE_INGREDIENTS_SUCCESS,
  GENERATE_INGREDIENTS_FAILURE,
  START_GENERATE_INSTRUCTIONS,
  GENERATE_INSTRUCTIONS_SUCCESS,
  GENERATE_INSTRUCTIONS_FAILURE,
  START_GENERATE_GETTER,
  GENERATE_GETTER_SUCCESS,
  GENERATE_GETTER_FAILURE,
} from './generateRecipeAction.js';

const initState = {
  ingredients: null,
  instructions: null,
  isLoading: false,
  error: null,
};

export const recipeGenerateReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GENERATE_INGREDIENTS:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false,
      };
    case GENERATE_INGREDIENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_GENERATE_INSTRUCTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case GENERATE_INSTRUCTIONS_SUCCESS:
      return {
        ...state,
        instructions: action.payload,
        isLoading: false,
      };
    case GENERATE_INSTRUCTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case START_GENERATE_GETTER:
      return {
        isLoading: true,
      };
    case GENERATE_GETTER_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false,
      };
    case GENERATE_GETTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
