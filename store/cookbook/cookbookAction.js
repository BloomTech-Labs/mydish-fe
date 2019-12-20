import axiosWithAuth from "../../utils/axiosWithAuth";

export const START_FETCH_COOKBOOK = "START_COOKBOOK_RECIPES";
export const FETCH_COOKBOOK_SUCCESS = "FETCH_COOKBOOK_SUCCESS";
export const FETCH_COOKBOOK_FAILURE = "FETCH_COOKBOOK_FAILURE";
export const fetchCookbook = () => async dispatch => {
    dispatch({ type: START_FETCH_COOKBOOK });

    try {
        const res = await axiosWithAuth().get("cookbook/");

        dispatch({ type: FETCH_COOKBOOK_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: FETCH_COOKBOOK_FAILURE, payload: err });
    }
};
