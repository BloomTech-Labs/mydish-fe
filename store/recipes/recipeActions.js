import axios from "axios";

export const START_FETCH_RECIPES = "START_FETCH_RECIPES";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";
export const fetchRecipes = searchQuery => dispatch => {
    dispatch({ type: START_FETCH_RECIPES });

    axios
        .get(
            `https://recipeshare-development.herokuapp.com/recipes?title=${searchQuery}`,
        )
        .then(res => {
            dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_RECIPES_SUCCESS, payload: err }));
};
