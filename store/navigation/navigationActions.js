export const SEARCH_HOMEPAGE = "SEARCH_HOMEPAGE";
export const searchHomepage = toggle => dispatch => {
    dispatch({ type: SEARCH_HOMEPAGE, payload: toggle });
};
