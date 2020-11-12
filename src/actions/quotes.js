import { GET_QUOTES, GET_NO_QUOTES_RETURNED } from "./types";

const baseURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/';
const apiKey = process.env.REACT_APP_API_KEY;

export const getQuotes = async (formData, dispatch) => {
    const { loanSize, creditScore, propertyType, occupancy } = formData;

    const queriesURL = `quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`;
    const fullURL = baseURL + queriesURL;

    const response = await fetch(fullURL, {
        method: 'GET',
        headers: {
            'Authorization': `OU-AUTH ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();
    
    if(!data.rateQuotes.length) {
        dispatch({
            type: GET_NO_QUOTES_RETURNED,
            payload: []
        })
    } else {
        dispatch({
            type: GET_QUOTES,
            payload: data.rateQuotes
        })
    }
}