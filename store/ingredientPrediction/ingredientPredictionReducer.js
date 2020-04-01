import {
    START_FETCH_INGREDIENTS,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE,
} from "./ingredientPredictionActions";

const initState = {
    ingredients: [],
    error: null,
    isLoading: false,
};

export const ingredientPredictionReducer = (state = initState, action) => {
    switch (action.type) {
        case START_FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: [],
                error: null,
                isLoading: true,
            };
        case FETCH_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.payload,
                error: null,
                isLoading: false,
            };
        case FETCH_INGREDIENTS_FAILURE:
            return {
                ...state,
                ingredients: [],
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};
