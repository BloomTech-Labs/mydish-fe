import axios from "axios";

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginUser = (username, password) => async dispatch => {
    dispatch({ type: START_LOGIN });
    try {
        const res = await axios.post(
            "https://recipeshare-development.herokuapp.com/cooks/login",
            login,
        );

        AsyncStorage.setItem("userToken", res.data.toekn);
        //navigate to App
    } catch (err) {
        dispatch((type: LOGIN_FAILURE), (payload: err));
    }
};

export const START_REGISTER = "START_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerUser = registerUser => dispatch => {};

export const START_LOGOUT = "START_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const logoutUser = () => dispatch => {};
