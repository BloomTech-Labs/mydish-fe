export const PROFILE_PAGE_TOGGLE = 'PROFILE_PAGE_TOGGLE';
export const profilePageToggle = (toggle) => (dispatch) => {
  dispatch({ type: PROFILE_PAGE_TOGGLE, payload: toggle });
};

export const SEARCH_HOMEPAGE = 'SEARCH_HOMEPAGE';
export const searchHomepage = (toggle) => (dispatch) => {
  dispatch({ type: SEARCH_HOMEPAGE, payload: toggle });
};
