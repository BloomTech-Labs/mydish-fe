import axiosWithAuth from '../../utils/axiosWithAuth';

export const START_EDIT_MODE = 'START_EDIT_MODE';
export const STOP_EDIT_MODE = 'STOP_EDIT_MODE';

export const START_UPDATE_USER = 'START_UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const updateUser = (id, newValues) => async (dispatch) => {
  dispatch({ type: START_UPDATE_USER });
  let success = false;

  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.put(`users/${id}`, newValues);

    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    console.log('this is the updatedValues', newValues);
    success = true;
  } catch (err) {
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: err.response.data.message,
    });
  } finally {
    return success;
  }
};

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_START });
  let success = false;
  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.get(`users/${id}`);

    dispatch({ type: GET_USER_SUCCESS, payload: res.data });

    success = true;
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.response.data.message,
    });
  } finally {
    return success;
  }
};
