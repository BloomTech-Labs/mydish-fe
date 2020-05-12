import {
  START_FETCH_ALL_VERSION_HISTORY,
  FETCH_ALL_VERSION_HISTORY_SUCCESS,
  FETCH_ALL_VERSION_HISTORY_FAILURE,
  RESET_ALL_VERSION_HISTORY,
} from './versionControlActions';

const initialState = {
  versionsList: [],
  isFetching: false,
  error: null,
};

export const versionControlRecucer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_ALL_VERSION_HISTORY:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_ALL_VERSION_HISTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        versionsList: action.versionsList,
      };
    case FETCH_ALL_VERSION_HISTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case RESET_ALL_VERSION_HISTORY:
      return initialState;
    default:
      return state;
  }
};
