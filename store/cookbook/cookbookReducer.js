import {
    START_FETCH_COOKBOOK,
    FETCH_COOKBOOK_SUCCESS,
    FETCH_COOKBOOK_FAILURE,
    START_FETCH_ALL_COOKBOOK,
    FETCH_ALL_COOKBOOK_SUCCESS,
    FETCH_ALL_COOKBOOK_FAILURE,
} from "./cookbookAction";

const initState = {
    cookbookRecipes: [],
    entireCookbook: [],
    isLoading: false,
    error: null,
};

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

        default:
            return state;
    }
};
