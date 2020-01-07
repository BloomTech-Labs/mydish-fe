import {
    START_FETCH_RECIPE,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
    START_UPDATE_RECIPE,
    UPDATE_RECIPE_FAILURE,
    UPDATE_RECIPE_SUCCESS,
    RESET_RECIPE,
    START_EDIT,
    STOP_EDIT,
    EDIT_TITLE,
    EDIT_INGRED,
    EDIT_INSTRUCT,
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
    editing: false,
};

export const singleRecipeReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case START_UPDATE_RECIPE: // UPDATE and FETCH are the same
        case START_FETCH_RECIPE:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case UPDATE_RECIPE_SUCCESS: // UPDATE and FETCH are the same
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
        case UPDATE_RECIPE_FAILURE:
            return {
                ...state,
                recipe: action.recipe || state.recipe,
                isLoading: false,
                error: action.payload,
            };
        case EDIT_INGRED:
            const ingredients = state.recipe.ingredients.map((val, i) => {
                if (i === action.index) {
                    return action.payload;
                } else return val;
            });
            return { ...state, recipe: { ...state.recipe, ingredients } };
        case EDIT_INSTRUCT:
            const steps = state.recipe.steps.map((val, i) => {
                if (i === action.index) {
                    return action.payload;
                } else return val;
            });
            return { ...state, recipe: { ...state.recipe, steps } };
        case EDIT_TITLE:
            return {
                ...state,
                recipe: { ...state.recipe, title: action.payload },
            };
        case START_EDIT:
            return { ...state, editing: true };
        case STOP_EDIT:
            return { ...state, editing: false };
        case RESET_RECIPE:
            return initState;

        default:
            return state;
    }
};
