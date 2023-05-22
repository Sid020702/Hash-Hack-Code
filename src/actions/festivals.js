export const fetchAllfestivals = (month) => async (dispatch) => {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const url = `https://holidays.abstractapi.com/v1/?api_key=ddc5d11eebca4961afb402d0b74c3f96&country=IN&year=2020&month=${month + 1}`
    const res = await fetch(url).then(result => result.json())
    dispatch({ type: "FETCH_ALL_FESTIVALS", payload: { res, months } })
}