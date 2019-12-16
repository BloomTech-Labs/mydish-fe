import { START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActions";

const authStore = {
    userId: null,
    isAuthorizing: false,
    error: null,
};

export const authReducer = (state = authStore, { type, payload }) => {
    switch (type) {
        case START_LOGIN:
            return { ...state, isAuthorizing: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthorizing: false,
                userId: payload.cook_id,
                error: null,
            };
        case LOGIN_FAILURE:
            return { ...state, isAuthorizing: false, error: payload };
        default:
            return state;
    }
};
