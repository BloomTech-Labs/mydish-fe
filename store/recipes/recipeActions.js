import axiosWithAuth from "../../utils/axiosWithAuth";

export const START_FETCH_RECIPES = "START_FETCH_RECIPES";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";
export const fetchRecipes = searchQuery => async dispatch => {
    dispatch({ type: START_FETCH_RECIPES });

    try {
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.get(`recipes?title=${searchQuery}`);

        dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: FETCH_RECIPES_FAILURE, payload: err });
    }
};
