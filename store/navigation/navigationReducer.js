import { PROFILE_PAGE_TOGGLE, SEARCH_HOMEPAGE } from './navigationActions';

const initState = {
  profileOpen: false,
  search: {
    homepage: false,
    cookbook: false,
  },
};

export const navigationReducer = (state = initState, action) => {
  switch (action.type) {
    case PROFILE_PAGE_TOGGLE:
      return {
        ...state,
        profileOpen: action.payload,
      };
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
