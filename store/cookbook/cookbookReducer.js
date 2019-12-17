import {
    START_COOKBOOK_RECIPES,
    COOKBOOK_RECIPES_SUCCESS,
    COOKBOOK_RECIPES_FAILURE,
} from "./cookbookAction";

const initState = {
    cookbookRecipes: [],
    isLoading: false,
    error: null,
};

export const cookbookReducer = (state = initState, action) => {
    switch (action.type) {
        case START_COOKBOOK_RECIPES:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case COOKBOOK_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cookbookRecipes: action.payload,
            };
        case COOKBOOK_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
