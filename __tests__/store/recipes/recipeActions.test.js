import * as recipeActions from "../../../store/recipes/recipeActions";
import axios from "axios";

describe("fetchRecipes action creator", () => {
    test("dispatches START_FETCH_RECIPES", () => {
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action.
        const dispatch = jest.fn();
        axios.get = jest.fn(() => new Promise(res => res()));
        recipeActions.fetchRecipes()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: recipeActions.START_FETCH_RECIPES,
        });
    });

    test("dispatches FETCH_RECIPES_SUCCESS upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.get() function
        const responseData = [{ title: "testRecipe" }];
        axios.get = jest.fn(() => {
            return Promise.resolve({
                data: responseData,
            });
        });

        await recipeActions.fetchRecipes()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: recipeActions.START_FETCH_RECIPES,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: recipeActions.FETCH_RECIPES_SUCCESS,
            payload: responseData,
        });
    });

    test("dispatches FETCH_RECIPES_FAILURE upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.get() function
        const errorMessage = "testError";
        axios.get = jest.fn(() => {
            Promise.reject(errorMessage);
        });

        await recipeActions.fetchRecipes()(dispatch);

        // expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: recipeActions.START_FETCH_RECIPES,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: recipeActions.FETCH_RECIPES_FAILURE,
            payload: errorMessage,
        });
    });
});
