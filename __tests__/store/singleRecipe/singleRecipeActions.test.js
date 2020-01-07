import * as actions from "../../../store/singleRecipe/singleRecipeActions";
import axiosWithAuth from "../../../utils/axiosWithAuth";
jest.mock("../../../utils/axiosWithAuth");

beforeEach(() => {
    jest.resetAllMocks();
});

test("axiosWithAuth is mocked", () => {
    // Test to make sure we can mock our axiosWithAuth
    //     function to return an object with a get method
    axiosWithAuth.mockImplementation(() => {
        return {
            get: () => ({}),
        };
    });
    const test = axiosWithAuth();
    expect(typeof test).toBe("object");
    expect(typeof test.get).toBe("function");
    expect(test.get()).toEqual({});
});

describe("startEdit action creator", () => {
    test("Calling function returns START_EDIT type", () => {
        const returnObj = actions.startEdit();

        expect(returnObj).toEqual({ type: actions.START_EDIT });
    });
});

describe("resetRecipe action creator", () => {
    test("Calling function returns RESET_RECIPE type", () => {
        const returnObj = actions.resetRecipe();

        expect(returnObj).toEqual({ type: actions.RESET_RECIPE });
    });
});

describe("fetchRecipe action creator", () => {
    test("dispatches START_FETCH_RECIPE", () => {
        axiosWithAuth.mockImplementation(() => {
            return {
                get: () => ({}),
            };
        });
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action.
        const dispatch = jest.fn();
        actions.fetchRecipe()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_FETCH_RECIPE,
        });
    });

    test("dispatches FETCH_RECIPE_SUCCESS upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.get() function
        const responseData = [{ title: "testRecipe" }];
        axiosWithAuth.mockImplementation(() => {
            return {
                get: () => ({ data: responseData }),
            };
        });

        await actions.fetchRecipe()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_FETCH_RECIPE,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.FETCH_RECIPE_SUCCESS,
            payload: responseData,
        });
    });

    test("dispatches FETCH_RECIPE_FAILURE upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.get() function
        const errorMessage = "testError";
        axiosWithAuth.mockImplementation(() => {
            return {
                get: () => {
                    throw errorMessage;
                },
            };
        });

        await actions.fetchRecipe()(dispatch);

        // expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_FETCH_RECIPE,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.FETCH_RECIPE_FAILURE,
            payload: errorMessage,
        });
    });
});

describe("saveNewRecipe action creator", () => {
    test("dispatches START_SAVE_NEW_RECIPE", () => {
        axiosWithAuth.mockImplementation(() => {
            return {
                post: () => ({}),
            };
        });
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action '' '
        const dispatch = jest.fn();
        actions.saveNewRecipe()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_SAVE_NEW_RECIPE,
        });
    });

    test("dispatches SAVE_NEW_RECIPE_SUCCESS upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        axiosWithAuth.mockImplementation(() => {
            return {
                post: () => ({}),
            };
        });

        await actions.saveNewRecipe()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_SAVE_NEW_RECIPE,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.SAVE_NEW_RECIPE_SUCCESS,
        });
    });

    test("dispatches SAVE_NEW_RECIPE_FAILURE upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const errorMessage = "testError";
        axiosWithAuth.mockImplementation(() => {
            return {
                post: () => {
                    throw errorMessage;
                },
            };
        });

        await actions.saveNewRecipe()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.START_SAVE_NEW_RECIPE,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: actions.SAVE_NEW_RECIPE_FAILURE,
            payload: errorMessage,
        });
    });
});

describe("editTitle action creator", () => {
    test("dispatches object with input value", () => {
        const input = "Charlie horse";
        const expectedDispatch = {
            type: actions.EDIT_TITLE,
            payload: input,
        };
        const dispatch = jest.fn();

        actions.editTitle(input)(dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(expectedDispatch);
    });
    test.skip("dispatches stopEdit() function when last character of the input is '\\n'", () => {
        const input = "Charlie horse\n";
        const dispatch = jest.fn(cb => cb.toString());

        actions.editTitle(input)(dispatch);

        expect(dispatch).toHaveBeenCalled();
        // expect(stopEditSpy).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(actions.stopEdit());
    });
});
