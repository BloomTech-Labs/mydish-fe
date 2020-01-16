import {
    START_FETCH_RECIPE,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
    START_UPDATE_RECIPE,
    UPDATE_RECIPE_FAILURE,
    UPDATE_RECIPE_SUCCESS,
    RESET_RECIPE,
    START_EDIT,
    SET_CURRENT_ACTIVE,
    RESET_CURRENT_ACTIVE,
    EDIT_TITLE,
    EDIT_INGRED,
    EDIT_INSTRUCT,
    EDIT_NOTES,
    ADD_INGREDIENT,
    ADD_INSTRUCTION,
    ADD_NOTE,
    DELETE_INGREDIENT,
    DELETE_NOTE,
    DELETE_INSTRUCT,
    DELETE_RECIPE,
    START_EDIT_MODE,
    STOP_EDIT_MODE
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
        editable: false,
    },
    isLoading: false,
    editMode: false,
    error: null,
    currentActive: { type: null, field: null, index: null, close: null },
};

export const singleRecipeReducer = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case START_EDIT_MODE:
            return {...state, editMode: true}
        case STOP_EDIT_MODE:
            return {...state, editMode: false}

        case START_UPDATE_RECIPE: // UPDATE and FETCH are the same
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case START_FETCH_RECIPE:
            return {
                ...state,
                error: null,
                isLoading: true,
                editMode: false
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
        case SET_CURRENT_ACTIVE:
            return {
                ...state,
                currentActive: action.payload,
            };
        case RESET_CURRENT_ACTIVE:
            return {
                ...state,
                currentActive: initState.currentActive,
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

        case EDIT_NOTES:
            return {
                ...state,
                recipe: { ...state.recipe, notes: action.notes },
            };

        case ADD_INGREDIENT:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    ingredients: [...state.recipe.ingredients, action.payload],
                },
            };

        case ADD_INSTRUCTION:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...state.recipe.steps, action.payload],
                },
            };

        case ADD_NOTE:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    notes: action.payload,
                },
            };

        case DELETE_INGREDIENT:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    ingredients: state.recipe.ingredients.filter(
                        (val, i) => i !== action.payload,
                    ),
                },
            };

        case DELETE_NOTE:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    notes: null,
                },
            };

        case DELETE_INSTRUCT:
            const newSteps = state.recipe.steps
                .filter((val, i) => i !== action.payload)
                .map((step, i) => ({ ...step, ordinal: i + 1 }));
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: newSteps,
                },
            };

        // case DELETE_RECIPE:
        //     return {
        //         ...state,
        //         recipe: {
        //             ...state.recipe,
        //             recipe:
        //         }
        //     };

        case START_EDIT:
            return { ...state, editing: true };

        case RESET_RECIPE:
            return initState;

        default:
            return state;
    }
};
