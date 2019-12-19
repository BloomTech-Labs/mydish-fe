import {
    START_FETCH_RECIPE,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
} from "./singleRecipeActions";

const initState = {
    recipe: null,
    isLoading: false,
    error: null,
};

export const singleRecipeReducer = (state = initState, action) => {
    switch (action.type) {
        case START_FETCH_RECIPE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipe: action.payload,
            };
        case FETCH_RECIPE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
