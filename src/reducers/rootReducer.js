const initState = {
    quotes: [],
    isLoading: false,
    areNoQuotesReturned: false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_QUOTES" :
            return {
                quotes: action.payload,
                isLoading: false,
                areNoQuotesReturned: false
            }
        case "GET_NO_QUOTES_RETURNED" :
            return {
                quotes: action.payload,
                isLoading: false,
                areNoQuotesReturned: true
            }
        case "SHOW_LOADER":
            return {
                ...state,
                areNoQuotesReturned: false,
                isLoading: true
            }
        default:
            return state
    }
}

export default rootReducer;