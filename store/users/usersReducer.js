import {
  START_EDIT_MODE,
  STOP_EDIT_MODE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from './usersActions';

initState = {
  user: {},
  isLoading: false,
  isSubmitting: false,
  editMode: false,
  error: null,
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
    default:
      return state;
  }
};
