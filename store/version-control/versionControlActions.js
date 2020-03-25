import axiosWithAuth from "../../utils/axiosWithAuth";

export const ALL_VERSION_HISTORY = "ALL_VERSION_HISTORY";
export const VERSION_BY_REVISION_NUM = "VERSION_BY_REVISION_NUM";

export const fetchAllVersionHistory = id => {
    return async dispatch => {
        try {
            const axiosCustom = await axiosWithAuth();
            const res = await axiosCustom.get(`recipes/${id}/versions`);
            const sortedVersionList = res.data.sort(function(a, b) {
                a = a.revision_number;

                b = b.revision_number;

                return a < b;
            });

            dispatch({
                type: ALL_VERSION_HISTORY,
                versionsList: sortedVersionList,
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
};

export const RESET_ALL_VERSION_HISTORY = "RESET_ALL_VERSION_HISTORY";
export const resetAllVersionHistory = () => ({
    type: RESET_ALL_VERSION_HISTORY,
});
