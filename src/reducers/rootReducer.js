const initState = {
    quotes: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_QUOTES" :
            return {
                quotes: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer;