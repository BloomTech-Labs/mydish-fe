import axiosWithAuth from '../../utils/axiosWithAuth';
import { postImage } from '../../utils/helperFunctions/postImage';
import { fetchAllVersionHistory } from '../version-control/versionControlActions';

export const START_UPDATE_RECIPE = 'START_UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE';

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

export const START_SUBMIT_EDITED_RECIPE = 'START_SUBMIT_EDITED_RECIPE';
export const SUBMIT_EDITED_RECIPE_SUCCESS = 'SUBMIT_EDITED_RECIPE_SUCCESS';
export const SUBMIT_EDITED_RECIPE_FAILURE = 'SUBMIT_EDITED_RECIPE_FAILURE';
export const submitEditedRecipe = (author_comment) => async (
  dispatch,
  getState
) => {
  dispatch({ type: START_SUBMIT_EDITED_RECIPE });

  const { recipe } = getState().singleRecipe;
  let img = '';
  //Check if recipe.img is defined.
  if (recipe.img) {
    // Check if recipe.img is an AWS URL, indicating it is NOT a newly uploaded image.
    if (recipe.img.includes('amazonaws')) {
      img = recipe.img;
      // If recipe.img is not an AWS link, post to S3 and store the returned URL.
    } else {
      img = await postImage(recipe.img);
    }
  }

  const newRecipe = { ...recipe, img, author_comment };

  try {
    const axiosCustom = await axiosWithAuth();

    const res = await axiosCustom.put(`recipes/${newRecipe.id}`, newRecipe);

    dispatch({ type: SUBMIT_EDITED_RECIPE_SUCCESS, payload: res.data });
    dispatch(fetchAllVersionHistory(newRecipe.id)); //Causes "Other versions" link to appear as soon as first edit on a recipe has been completed.
  } catch (err) {
    dispatch({ type: SUBMIT_EDITED_RECIPE_FAILURE, payload: err.response });
  }
};

export const START_EDIT_MODE = 'START_EDIT_MODE';
export const startEditMode = () => ({ type: START_EDIT_MODE });

export const STOP_EDIT_MODE = 'STOP_EDIT_MODE';
export const stopEditMode = () => ({ type: STOP_EDIT_MODE });

export const START_FETCH_RECIPE = 'START_FETCH_RECIPE';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_INSTRUCT = 'DELETE_INSTRUCT';

export const fetchRecipe = (id) => async (dispatch) => {
  dispatch({ type: START_FETCH_RECIPE });

  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.get(`recipes/${id}`);

    dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data });
    return true;
  } catch (err) {
    console.log('err', err);

    dispatch({ type: FETCH_RECIPE_FAILURE, payload: err });
    return false;
  }
};

export const deleteIngredient = (ing_index) => ({
  type: DELETE_INGREDIENT,
  payload: ing_index,
});

export const deleteNote = (index) => ({ type: DELETE_NOTE, index });

export const deleteInstruction = (ins_index) => ({
  type: DELETE_INSTRUCT,
  payload: ins_index,
});

export const RESET_RECIPE = 'RESET_RECIPE';
export const resetRecipe = (recipe = null) => ({
  type: RESET_RECIPE,
  payload: recipe,
});

export const EDIT_IMAGE = 'EDIT_IMAGE';
export const editImage = (img) => ({
  type: EDIT_IMAGE,
  payload: img,
});

export const EDIT_TITLE = 'EDIT_TITLE';
export const editTitle = (value) => ({
  type: EDIT_TITLE,
  payload: value,
});

export const TOGGLE_TAG = 'TOGGLE_TAG';
export const toggleStateTag = (tagName) => ({
  type: TOGGLE_TAG,
  payload: tagName,
});

export const EDIT_PREPTIME = 'EDIT_PREPTIME';
export const editPreptime = (value) => ({
  type: EDIT_PREPTIME,
  payload: value,
});

export const EDIT_COOKTIME = 'EDIT_COOKTIME';
export const editCooktime = (value) => ({
  type: EDIT_COOKTIME,
  payload: value,
});

export const EDIT_INGRED = 'EDIT_INGRED';
export const editIngred = (index, value) => ({
  type: EDIT_INGRED,
  payload: value,
  index,
});

export const EDIT_INSTRUCT = 'EDIT_INSTRUCT';
export const editInstruct = (index, value) => ({
  type: EDIT_INSTRUCT,
  payload: value,
  index,
});

export const EDIT_NOTES = 'EDIT_NOTES';
export const editNotes = (index, notes) => ({
  type: EDIT_NOTES,
  payload: notes,
  index,
});

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});

export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const addInstruction = (instruction) => ({
  type: ADD_INSTRUCTION,
  payload: instruction,
});

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const CLEANUP_RECIPE = 'CLEANUP_RECIPE';
export const cleanUpRecipe = () => ({
  type: CLEANUP_RECIPE,
});

export const FETCH_VERSION_BY_REVISION_NUM_START =
  'FETCH_VERSION_BY_REVISION_NUM_START';
export const FETCH_VERSION_BY_REVISION_NUM_SUCCESS =
  'FETCH_VERSION_BY_REVISION_NUM_SUCCESS';
export const FETCH_VERSION_BY_REVISION_NUM_FAILURE =
  'FETCH_VERSION_BY_REVISION_NUM_FAILURE';

export const fetchVersionByRevisionId = (id, revisionId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_VERSION_BY_REVISION_NUM_START });
      const axiosCustom = await axiosWithAuth();
      const res = await axiosCustom.get(`recipes/${id}/version/${revisionId}`);

      const fullRecipe = {
        ...res.data.changes,
        owner: res.data.owner,
        authorComment: res.data.changes.author_comment,
        revision_number: res.data.revision_number,
      };

      dispatch({
        type: FETCH_VERSION_BY_REVISION_NUM_SUCCESS,
        payload: fullRecipe,
      });
    } catch (error) {
      dispatch({
        type: FETCH_VERSION_BY_REVISION_NUM_FAILURE,
        payload: error,
      });
      console.log(error);
      throw error;
    }
  };
};

export const RESET_ALERTS = 'RESET_ALERTS';

export const resetAlerts = () => {
  return (dispatch) => {
    dispatch({ type: RESET_ALERTS });
  };
};
