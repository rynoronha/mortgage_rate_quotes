const initState = {
    quotes: [],
    isLoading: false,
    areNoQuotesReturned: false,
    error: null
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_QUOTES' :
            return {
                quotes: action.payload,
                isLoading: false,
                areNoQuotesReturned: false,
                error: null
            }
        case 'SET_NO_QUOTES_RETURNED' :
            return {
                quotes: action.payload,
                isLoading: false,
                areNoQuotesReturned: true,
                error: null
            }
        case 'SHOW_LOADER':
            return {
                ...state,
                areNoQuotesReturned: false,
                isLoading: true,
                error: null
            }
        case 'GET_ERROR':
            return {
                ...state,
                isLoading: false,
                error: {
                   status: action.payload
                }
            }
        default:
            return state
    }
}

export default rootReducer;