import axios from "axios";

export const START_FETCH_RECIPE = "START_FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const fetchRecipe = id => dispatch => {
    dispatch({ type: START_FETCH_RECIPE });

    axios
        .get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
        .then(res => {
            console.log("RECIPE RES.DATA", res.data);
            dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_RECIPE_FAILURE, payload: err }));
};
