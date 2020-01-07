import axiosWithAuth from "../../utils/axiosWithAuth";

export const STOP_EDIT = "STOP_EDIT";
export const stopEdit = () => ({ type: STOP_EDIT });

export const START_EDIT = "START_EDIT";
export const startEdit = () => ({ type: START_EDIT });

export const START_FETCH_RECIPE = "START_FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

export const fetchRecipe = id => async dispatch => {
    dispatch({ type: START_FETCH_RECIPE });

    try {
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.get(`recipes/${id}`);

        dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    }
};

export const START_SAVE_NEW_RECIPE = "START_SAVE_NEW_RECIPE";
export const SAVE_NEW_RECIPE_SUCCESS = "SAVE_NEW_RECIPE_SUCCESS";
export const SAVE_NEW_RECIPE_FAILURE = "SAVE_NEW_RECIPE_FAILURE";

export const saveNewRecipe = recipeInfo => async dispatch => {
    dispatch({ type: START_SAVE_NEW_RECIPE });

    try {
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.post("recipes/");

        dispatch({ type: SAVE_NEW_RECIPE_SUCCESS });
    } catch (err) {
        dispatch({ type: SAVE_NEW_RECIPE_FAILURE, payload: err });
    }
};

export const RESET_RECIPE = "RESET_RECIPE";
export const resetRecipe = () => {
    return {
        type: RESET_RECIPE,
    };
};

export const EDIT_TITLE = "EDIT_TITLE";
export const editTitle = value => {
    if (value.charCodeAt(value.length - 1) === 10) {
        return {
            type: STOP_EDIT,
        };
    }
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
    if (value.body.charCodeAt(value.body.length - 1) === 10) {
        return {
            type: STOP_EDIT,
        };
    }

    return {
        type: EDIT_INSTRUCT,
        payload: value,
        index: index,
    };
};
