import axiosWithAuth from "../../utils/axiosWithAuth";
import { AsyncStorage } from "react-native";

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginUser = userInfo => async dispatch => {
    dispatch({ type: START_LOGIN });
    let success = false;

    try {
        const res = await axiosWithAuth().post("cooks/login", userInfo);

        AsyncStorage.setItem("userToken", res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });

        success = true;
    } catch (err) {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    } finally {
        return success;
    }
};

export const START_REGISTER = "START_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerUser = userInfo => async dispatch => {
    dispatch({ type: START_REGISTER });
    let success = false;

    try {
        const res = await axiosWithAuth().post("cooks/register", userInfo);

        AsyncStorage.setItem("userToken", res.data.token);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });

        success = true;
    } catch (err) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: err.response.data.message,
        });
    } finally {
        return success;
    }
};

export const START_LOGOUT = "START_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const logoutUser = () => dispatch => {};
