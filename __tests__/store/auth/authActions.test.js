import * as authActions from "../../../store/auth/authActions";
import axios from "axios";

describe("LoginUser action creator", () => {
    test("dispatches START_LOGIN", () => {
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action.
        const dispatch = jest.fn();
        axios.post = jest.fn(() => ({}));
        authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
    });

    test("dispatches LOGIN_SUCCESS and a true success upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const responseData = { token: "testToken" };
        axios.post = jest.fn(() => {
            return {
                data: responseData,
            };
        });

        const success = await authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.LOGIN_SUCCESS,
            payload: responseData,
        });
        expect(success).toBe(true);
    });

    test("dispatches LOGIN_FAILURE and a false success upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const errorMessage = "testError";
        axios.post = jest.fn(() => {
            throw {
                response: { data: { message: errorMessage } },
            };
        });

        const success = await authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.LOGIN_FAILURE,
            payload: errorMessage,
        });
        expect(success).toBe(false);
    });
});

describe("registerUser action creator", () => {
    test("dispatches START_REGISTER", () => {
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action.
        const dispatch = jest.fn();
        axios.post = jest.fn(() => ({}));
        authActions.registerUser()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_REGISTER,
        });
    });

    test("dispatches REGISTER_SUCCESS and a true success upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const responseData = { token: "testToken" };
        axios.post = jest.fn(() => {
            return {
                data: responseData,
            };
        });

        const success = await authActions.registerUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_REGISTER,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.REGISTER_SUCCESS,
            payload: responseData,
        });
        expect(success).toBe(true);
    });

    test("dispatches REGISTER_FAILURE and a false success upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const errorMessage = "testError";
        axios.post = jest.fn(() => {
            throw {
                response: { data: { message: errorMessage } },
            };
        });

        const success = await authActions.registerUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_REGISTER,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.REGISTER_FAILURE,
            payload: errorMessage,
        });
        expect(success).toBe(false);
    });
});
