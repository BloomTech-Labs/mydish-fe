import {
    START_FETCH_ALL_VERSION_HISTORY,
    RESET_ALL_VERSION_HISTORY,
} from "./versionControlActions";

const initialState = {
    versionsList: [],
    isFetching: false,
    error: null,
};

export const versionControlRecucer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_ALL_VERSION_HISTORY:
            return {
                versionsList: action.versionsList,
            };
        case RESET_ALL_VERSION_HISTORY:
            return initialState;
        default:
            return state;
    }
};
