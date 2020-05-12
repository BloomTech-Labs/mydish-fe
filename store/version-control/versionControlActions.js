import axiosWithAuth from '../../utils/axiosWithAuth';

export const START_FETCH_ALL_VERSION_HISTORY =
  'START_FETCH_ALL_VERSION_HISTORY';
export const FETCH_ALL_VERSION_HISTORY_SUCCESS =
  'FETCH_ALL_VERSION_HISTORY_SUCCESS';
export const FETCH_ALL_VERSION_HISTORY_FAILURE =
  'FETCH_ALL_VERSION_HISTORY_FAILURE';
export const VERSION_BY_REVISION_NUM = 'VERSION_BY_REVISION_NUM';

export const fetchAllVersionHistory = (id) => async (dispatch) => {
  dispatch({ type: START_FETCH_ALL_VERSION_HISTORY });
  try {
    const axiosCustom = await axiosWithAuth();
    const res = await axiosCustom.get(`recipes/${id}/versions`);
    const sortedVersionList = res.data.sort(function (a, b) {
      a = a.revision_number;

      b = b.revision_number;

      return a < b;
    });

    dispatch({
      type: FETCH_ALL_VERSION_HISTORY_SUCCESS,
      versionsList: sortedVersionList,
    });
  } catch (error) {
    dispatch({ type: FETCH_ALL_VERSION_HISTORY_FAILURE, payload: error });
  }
};

export const RESET_ALL_VERSION_HISTORY = 'RESET_ALL_VERSION_HISTORY';
export const resetAllVersionHistory = () => ({
  type: RESET_ALL_VERSION_HISTORY,
});
