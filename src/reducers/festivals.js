const festivalsReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "FETCH_ALL_FESTIVALS":
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export default festivalsReducer