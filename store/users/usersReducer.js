import {
  START_EDIT_MODE,
  STOP_EDIT_MODE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  START_UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from './usersActions';

initState = {
  user: {},
  isLoading: false,
  isSubmitting: false,
  editMode: false,
  error: null,
  success: null,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case START_EDIT_MODE:
      return { ...state, editMode: true };
    case STOP_EDIT_MODE:
      return { ...state, editMode: false };
    case GET_USER_START:
      return { ...state };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case START_UPDATE_USER:
      return {
        ...state,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
