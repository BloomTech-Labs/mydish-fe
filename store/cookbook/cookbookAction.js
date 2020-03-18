import axiosWithAuth from "../../utils/axiosWithAuth";

export const START_FETCH_COOKBOOK = "START_COOKBOOK_RECIPES";
export const FETCH_COOKBOOK_SUCCESS = "FETCH_COOKBOOK_SUCCESS";
export const FETCH_COOKBOOK_FAILURE = "FETCH_COOKBOOK_FAILURE";
export const fetchCookbook = searchCategory => async dispatch => {
  dispatch({type: START_FETCH_COOKBOOK});

  try {
    const axiosCustom = await axiosWithAuth();
    const url = searchCategory
      ? `cookbook?course=${searchCategory}`
      : "cookbook/";
    const res = await axiosCustom.get(url);

    dispatch({type: FETCH_COOKBOOK_SUCCESS, payload: res.data});
  } catch (err) {
    dispatch({type: FETCH_COOKBOOK_FAILURE, payload: err});
  }
};
