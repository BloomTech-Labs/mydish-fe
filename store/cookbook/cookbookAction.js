import axiosWithAuth from '../../utils/axiosWithAuth';

export const START_FETCH_COOKBOOK = 'START_COOKBOOK_RECIPES';
export const FETCH_COOKBOOK_SUCCESS = 'FETCH_COOKBOOK_SUCCESS';
export const FETCH_COOKBOOK_FAILURE = 'FETCH_COOKBOOK_FAILURE';
export const START_FETCH_ALL_COOKBOOK = 'START_FETCH_ALL_COOKBOOK';
export const FETCH_ALL_COOKBOOK_SUCCESS = 'FETCH_ALL_COOKBOOK_SUCCESS';
export const FETCH_ALL_COOKBOOK_FAILURE = 'FETCH_ALL_COOKBOOK_FAILURE';

export const fetchCookbook = (searchCategory) => async (dispatch) => {
  dispatch({ type: START_FETCH_COOKBOOK });

  try {
    const axiosCustom = await axiosWithAuth();
    const url = searchCategory
      ? `cookbook?course=${searchCategory}`
      : 'cookbook/';
    const res = await axiosCustom.get(url);

    dispatch({ type: FETCH_COOKBOOK_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_COOKBOOK_FAILURE, payload: err });
  }
};

export const getAllCookbookRecipes = (asdf) => async (dispatch) => {
  dispatch({ type: START_FETCH_ALL_COOKBOOK });

  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.get('cookbook/');

    dispatch({ type: FETCH_ALL_COOKBOOK_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_ALL_COOKBOOK_FAILURE, payload: err });
  }
};

export const ADD_COOKBOOK_RECIPE = 'ADD_COOKBOOK_RECIPE';
export const addCookbookRecipe = (recipe) => ({
  type: ADD_COOKBOOK_RECIPE,
  payload: recipe,
});

export const UPDATE_COOKBOOK_RECIPE = 'UPDATE_COOKBOOK_RECIPE';
export const updateCookbookRecipe = (recipe) => ({
  type: UPDATE_COOKBOOK_RECIPE,
  payload: recipe,
});

export const DELETE_COOKBOOK_RECIPE = 'DELETE_COOKBOOK_RECIPE';
export const deleteCookbookRecipe = (id) => ({
  type: DELETE_COOKBOOK_RECIPE,
  payload: id,
});
