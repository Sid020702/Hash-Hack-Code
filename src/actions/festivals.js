export const fetchAllfestivals = (month, year) => async (dispatch) => {
    const url = `https://holidayapi.com/v1/holidays?pretty&key=d5ea3711-1958-475c-b48e-f37e99b4fb33&country=IN&year=${year - 1}&month=${month}`

    dispatch({ type: "FETCH_ALL_FESTIVALS", payload: [] })
}