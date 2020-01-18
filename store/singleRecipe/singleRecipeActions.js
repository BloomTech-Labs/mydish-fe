import axiosWithAuth from "../../utils/axiosWithAuth";

export const START_UPDATE_RECIPE = "START_UPDATE_RECIPE";
export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAILURE = "UPDATE_RECIPE_FAILURE";

let calling = false;
export const stopEdit = () => async (dispatch, getState) => {
    // We call this stopEdit() function a few times in our components to make sure we stop editing.
    // The "calling" variable makes sure that, if we're allready in this axios call, we won't
    // call the database multiple times until we're done with our current call '' '
    if (calling) return;
    calling = true;
    dispatch({ type: START_UPDATE_RECIPE });

    const { recipe } = getState().singleRecipe; // grabbing the store from redux
    try {
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.put(`recipes`, recipe);

        dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data });
    } catch (err) {
        const data = err.response.data;
        // If we fail to update a recipe, there are many reasons why.
        // One of the reasons could be that we're trying to update a recipe that isn't our own. (401, 403)
        // If that's the case, the server returns a currentRecipe property so we can restore any
        //      edited values back to their original.
        // If we have a property called currentRecipe, we will use that to reset our store '' '
        if (data.currentRecipe) {
            dispatch({
                type: UPDATE_RECIPE_FAILURE,
                payload: err,
                recipe: data.currentRecipe,
            });
        } else {
            dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err });
        }
    } finally {
        calling = false;
    }
};

export const START_SUBMIT_EDITED_RECIPE = "START_SUBMIT_EDITED_RECIPE";
export const SUBMIT_EDITED_RECIPE_SUCCESS = "SUBMIT_EDITED_RECIPE_SUCCESS";
export const SUBMIT_EDITED_RECIPE_FAILURE = "SUBMIT_EDITED_RECIPE_FAILURE";
export const submitEditedRecipe = () => async (dispatch, getState) => {
    dispatch({ type: START_SUBMIT_EDITED_RECIPE });

    const { recipe } = getState().singleRecipe;
    console.log("recipe", recipe);

    try {
        const axiosCustom = await axiosWithAuth();
        const res = await axiosCustom.put("recipes", recipe);

        console.log("res.data", res.data);

        dispatch({ type: SUBMIT_EDITED_RECIPE_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: SUBMIT_EDITED_RECIPE_FAILURE, payload: err });
    }
};

export const START_EDIT_MODE = "START_EDIT_MODE";
export const startEditMode = () => ({ type: START_EDIT_MODE });

export const STOP_EDIT_MODE = "STOP_EDIT_MODE";
export const stopEditMode = () => ({ type: STOP_EDIT_MODE });

export const START_FETCH_RECIPE = "START_FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const DELETE_NOTE = "DELETE_NOTE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const DELETE_INSTRUCT = "DELETE_INSTRUCT";

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

export const deleteIngredient = ing_index => dispatch => {
    dispatch({ type: DELETE_INGREDIENT, payload: ing_index });
    dispatch(stopEdit());
};

export const deleteNote = () => dispatch => {
    dispatch({ type: DELETE_NOTE });
    dispatch(stopEdit());
};

export const deleteInstruction = ins_index => dispatch => {
    dispatch({ type: DELETE_INSTRUCT, payload: ins_index });
    dispatch(stopEdit());
};

// export const deleteRecipe = recipe => dispatch => {
//     dispatch({ type: DELETE_RECIPE, payload: recipe});
//     dispatch(recipe());
// };

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

// currentActive indicates a recipe field that is currently swiped/open. It is set
// onSwipeableOpen and given 3 properties: the field name, an index, and a close function.
// Each component has a check to see if the current active is another field and if
// it is, when swiping, the close function of the currentActive is called, closing the
// currently active field.
export const SET_CURRENT_ACTIVE = "SET_CURRENT_ACTIVE";
export const setCurrentActive = field => dispatch => {
    dispatch({
        type: SET_CURRENT_ACTIVE,
        payload: field,
    });
};

export const RESET_CURRENT_ACTIVE = "RESET_CURRENT_ACTIVE";
export const resetCurrentActive = () => dispatch => {
    dispatch({
        type: RESET_CURRENT_ACTIVE,
    });
};

// When editing our individual recipe, if we ever stop editing
// - The title
// - An ingredient
// - An instruction
// We want to make sure that we call our stopEdit() function in order to:
// 1. return the STOP_EDIT action
// 2. Call the database to update whatever edit we just made
// Whenever we have "dispatch(stopEdit())",
//     that's when we stop editing the recipe and call the database '' '
export const EDIT_TITLE = "EDIT_TITLE";
export const editTitle = value => dispatch => {
    // if (value.charCodeAt(value.length - 1) === 10) dispatch(stopEdit());
    // else {
    dispatch({
        type: EDIT_TITLE,
        payload: value,
    });
    // }
};

export const EDIT_INGRED = "EDIT_INGRED";
export const editIngred = (index, value) => dispatch => {
    // if (value.name.charCodeAt(value.length - 1) === 10) dispatch(stopEdit());
    // else {
    dispatch({
        type: EDIT_INGRED,
        payload: value,
        index,
    });
    // }
};

export const EDIT_INSTRUCT = "EDIT_INSTRUCT";
export const editInstruct = (index, value) => dispatch => {
    // if (value.body.charCodeAt(value.body.length - 1) === 10)
    //     dispatch(stopEdit());
    // else {
    dispatch({
        type: EDIT_INSTRUCT,
        payload: value,
        index,
    });
    // }
};

export const EDIT_NOTES = "EDIT_NOTES";
export const editNotes = notes => dispatch => {
    // if (notes.charCodeAt(notes.length - 1) === 10) dispatch(stopEdit());
    // else {
    dispatch({
        type: EDIT_NOTES,
        notes: notes,
    });
    // }
};

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const addIngredient = ingredient => dispatch => {
    dispatch({
        type: ADD_INGREDIENT,
        payload: ingredient,
    });
    // dispatch(stopEdit());
};

export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const addInstruction = instruction => dispatch => {
    dispatch({
        type: ADD_INSTRUCTION,
        payload: instruction,
    });
    // dispatch(stopEdit());
};

export const ADD_NOTE = "ADD_NOTE";
export const addNote = note => dispatch => {
    dispatch({
        type: ADD_NOTE,
        payload: note,
    });
};
