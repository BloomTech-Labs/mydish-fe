import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  START_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  CLEAR_ERROR,
} from './authActions';

const authStore = {
  userId: null,
  username: null,
  isAuthorizing: false,
  error: null,
};

export const authReducer = (state = authStore, { type, payload }) => {
  switch (type) {
    case START_LOGIN:
      return { ...state, isAuthorizing: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorizing: false,
        userId: payload.user.id,
        username: payload.user.username,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, isAuthorizing: false, error: payload };
    case START_REGISTER:
      return { ...state, isAuthorizing: true, error: null };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorizing: false,
        userId: payload.user.id,
        username: payload.user.username,
        error: null,
      };
    case REGISTER_FAILURE:
      return { ...state, isAuthorizing: false, error: payload };
    case LOGOUT:
      return { ...state, userId: null };
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
