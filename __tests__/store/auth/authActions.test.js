import * as authActions from "../../../store/auth/authActions";
import axios from "axios";

describe("LoginUser action creator", () => {
    test("dispatches START_LOGIN", () => {
        // Turn dispatch into a simple jest function.
        // This means that we won't dash to our reducer, and
        //     we can instead check for our dispatch
        //     "toHaveBeenCalledWith" the correct action.
        const dispatch = jest.fn();
        authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
    });

    test("dispatches LOGIN_SUCCESS upon a successful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const responseData = { token: "testToken" };
        axios.post = jest.fn(() => {
            return {
                data: responseData,
            };
        });

        await authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.LOGIN_SUCCESS,
            payload: responseData,
        });
    });

    test("dispatches LOGIN_FAILURE upon an unsuccessful request", async () => {
        const dispatch = jest.fn();

        // Our test responseData, and our mocked axios.post() function
        const errorMessage = "testError";
        axios.post = jest.fn(() => {
            throw {
                response: { data: { message: errorMessage } },
            };
        });

        await authActions.loginUser()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.START_LOGIN,
        });
        expect(dispatch).toHaveBeenCalledWith({
            type: authActions.LOGIN_FAILURE,
            payload: errorMessage,
        });
    });
});
