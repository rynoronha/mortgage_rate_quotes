const initState = {
    quotes: [],
    isLoading: false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_QUOTES" :
            return {
                quotes: action.payload,
                isLoading: false
            }
        case "SHOW_LOADER":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

export default rootReducer;