import axiosWithAuth from "../../utils/axiosWithAuth"

export const ALL_VERSION_HISTORY = "ALL_VERSION_HISTORY"


export const fetchAllVersionHistory = id => {

    return async dispatch => {

        try {
            const axiosCustom = await axiosWithAuth()
            const res = await axiosCustom.get(`recipes/${id}/versions`)
            dispatch({ type: ALL_VERSION_HISTORY, versions: res.data })
            console.log('version history', res.data)
        }
        catch (error) {
            console.log(error)
            throw error
        }
    }
}