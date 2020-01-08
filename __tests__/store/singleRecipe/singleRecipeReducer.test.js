import * as types from "../../../store/singleRecipe/singleRecipeActions";
import { singleRecipeReducer } from "../../../store/singleRecipe/singleRecipeReducer";

const initState = {
    recipe: {
        title: null,
        notes: null,
        steps: [],
        ingredients: [],
    },
    isLoading: false,
    error: null,
    editing: false,
};

describe("FETCH actions", () => {
    test("START_FETCH_RECIPE", () => {
        const initialState = {
            ...initState,
            error: "TestError",
        };
        const expectedState = {
            ...initState,
            error: null,
            isLoading: true,
        };

        const returnState = singleRecipeReducer(initialState, {
            type: types.START_FETCH_RECIPE,
        });

        expect(returnState).toEqual(expectedState);
    });
    test("FETCH_RECIPE_SUCCESS", () => {
        const action = {
            type: types.FETCH_RECIPE_SUCCESS,
            payload: {
                title: "testTitle",
                notes: "testNotes",
                steps: [1, 2, 3],
                ingredients: [4, 5, 6],
            },
        };
        const initialState = {
            ...initState,
            isLoading: true,
        };
        const expectedState = {
            ...initState,
            isLoading: false,
            recipe: action.payload,
        };

        const returnState = singleRecipeReducer(initialState, action);

        expect(returnState).toEqual(expectedState);
    });
    test("FETCH_RECIPE_FAILURE", () => {
        const action = {
            type: types.FETCH_RECIPE_FAILURE,
            payload: "testError",
        };
        const initialState = {
            ...initState,
            error: null,
            isLoading: true,
        };
        const expectedState = {
            ...initState,
            error: "testError",
        };

        const returnState = singleRecipeReducer(initialState, action);

        expect(returnState).toEqual(expectedState);
    });
});
