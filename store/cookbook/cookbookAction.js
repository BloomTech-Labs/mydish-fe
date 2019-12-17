import axioswithAuth from "../../utils/axiosWithAuth";

export const START_COOKBOOK_RECIPES = "START_COOKBOOK_RECIPES";
export const COOKBOOK_RECIPES_SUCCESS = "COOKBOOK_RECIPES_SUCCESS";
export const COOKBOOK_RECIPES_FAILURE = "COOKBOOK_RECIPES_FAILURE";
export const fetchCookbook = () => dispatch => {
    dispatch({ type: START_COOKBOOK_RECIPES });

    axioswithAuth()
        .get("/cookbook/")
        .then(res => {
            dispatch({ type: COOKBOOK_RECIPES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: COOKBOOK_RECIPES_FAILURE, payload: err });
        });
};
