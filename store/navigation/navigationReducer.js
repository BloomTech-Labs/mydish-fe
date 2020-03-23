import { SEARCH_HOMEPAGE } from "./navigationActions";

const initState = {
    search: {
        homepage: false,
        cookbook: false,
    },
};

export const navigationReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_HOMEPAGE:
            return {
                ...state,
                search: {
                    ...state.search,
                    homepage: action.payload,
                },
            };
        default:
            return state;
    }
};
