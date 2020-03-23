import { SEARCH_HOMEPAGE } from "./navigationActions";

const initState = {
    searchHomepage: true,
};

export const navigationReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_HOMEPAGE:
            return {
                ...state,
                searchHomepage: action.payload,
            };
        default:
            return state;
    }
};
