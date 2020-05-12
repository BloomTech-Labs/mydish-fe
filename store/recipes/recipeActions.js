import axiosWithAuth from '../../utils/axiosWithAuth';

export const START_FETCH_RECIPES = 'START_FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const fetchRecipes = (searchQuery) => async (dispatch) => {
  dispatch({ type: START_FETCH_RECIPES });

  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.get(`recipes?title=${searchQuery}`);

    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_RECIPES_FAILURE, payload: err });
  }
};

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const updateRecipe = (recipe) => ({
  type: UPDATE_RECIPE,
  payload: recipe,
});

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_RECIPE_START });
    try {
      const axiosCustom = await axiosWithAuth();
      axiosCustom.delete(`recipes/${id}`);

      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
      throw error;
    }
  };
};
