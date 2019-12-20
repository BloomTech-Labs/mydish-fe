import axios from "axios";

export const START_FETCH_RECIPE = "START_FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const fetchRecipe = id => dispatch => {
    dispatch({ type: START_FETCH_RECIPE });

    axios
        .get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
        .then(res => {
            dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: FETCH_RECIPE_FAILURE, payload: err }));
};

export const RESET_RECIPE = "RESET_RECIPE";
export const resetRecipe = () => {
    return {
        type: RESET_RECIPE,
    };
};

export const EDIT_RECIPE = "EDIT_RECIPE";
export const editRecipe = (name, value) => {
    return {
        type: EDIT_RECIPE,
        payload: value,
        name,
    };
};

export const STOP_EDIT = "STOP_EDIT";
export const stopEdit = () => ({ type: STOP_EDIT });

export const START_EDIT = "START_EDIT";
export const startEdit = () => ({ type: START_EDIT });