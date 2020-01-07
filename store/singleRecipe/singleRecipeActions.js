import axiosWithAuth from "../../utils/axiosWithAuth";

export const STOP_EDIT = "STOP_EDIT";
export const START_UPDATE_RECIPE = "START_UPDATE_RECIPE"
export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS"
export const UPDATE_RECIPE_FAILURE = "UPDATE_RECIPE_FAILURE"
let calling = false;
export const stopEdit = () => async (dispatch, getState) => {
    dispatch({ type: STOP_EDIT });
    
    // We call this function a few times in our components to make sure we stop editing.
    // The calling variable makes sure that, if we're allready in this axios call, we won't 
    // call multiple times until we're done with the current call.
    if (calling) return;
    calling = true;
    dispatch({ type: START_UPDATE_RECIPE });

    try {
        const { recipe } = getState().singleRecipe;
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.put(`recipes`, recipe);

        dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data });
    } catch (err) {
        console.log(err);
        if (err.response.status > 400 && err.response.status < 500) {
            dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err, recipe });
        }
        dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err });
    } finally {
        calling = false;
    }
};

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
