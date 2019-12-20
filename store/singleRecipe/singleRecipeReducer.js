import {
    START_FETCH_RECIPE,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
    RESET_RECIPE
} from "./singleRecipeActions";

const initState = {
    recipe: {
        ancestor: null,
        categories: [],
        id: null,
        img: null,
        ingredients: [],
        innovator: null,
        innovator_name: null,
        minutes: null,
        notes: null,
        steps: [],
        title: null,
        total_saves: null,
    },
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
            console.log("ACTION.PAYLOAD", action.payload);
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
        case RESET_RECIPE:
            return initState;

        default:
            return state;
    }
};
