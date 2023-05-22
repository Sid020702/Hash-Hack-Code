export const fetchAllfestivals = (data) => async (dispatch) => {
    dispatch({ type: "FETCH_ALL_FESTIVALS", payload: data })
}