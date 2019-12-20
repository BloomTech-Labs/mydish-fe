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

export const EDIT_TITLE = "EDIT_TITLE";
export const editTitle = value => {
    return {
        type: EDIT_TITLE,
        payload: value,
    };
};

export const EDIT_INGRED = "EDIT_INGRED";
export const editIngred = (index, value) => {
    console.log(value);
    return {
        type: EDIT_INGRED,
        payload: value,
        index: index,
    };
};

export const EDIT_INSTRUCT = "EDIT_INSTRUCT";
export const editInstruct = (index, value) => {
    console.log(value);
    return {
        type: EDIT_INSTRUCT,
        payload: value,
        index: index,
    };
};

export const STOP_EDIT = "STOP_EDIT";
export const stopEdit = () => ({ type: STOP_EDIT });

export const START_EDIT = "START_EDIT";
export const startEdit = () => ({ type: START_EDIT });
