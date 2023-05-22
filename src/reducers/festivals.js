const festivalsReducer = (state = { data: null, months: null }, action) => {
    switch (action.type) {
        case "FETCH_ALL_FESTIVALS":
            return { ...state, data: action.payload.res, months: action.payload.months }
        default:
            return state
    }
}

export default festivalsReducer