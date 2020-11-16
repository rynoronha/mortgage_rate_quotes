import { GET_QUOTES, SET_NO_QUOTES_RETURNED, GET_ERROR } from './types';

const baseURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/';
const apiKey = process.env.REACT_APP_API_KEY;

export const submitGetQuotesNoResult = () => ({ type: SET_NO_QUOTES_RETURNED, payload: [] });
export const submitGetQuotesSuccess = data => ({ type:  GET_QUOTES, payload: data.rateQuotes });
export const submitGetQuotesError = data => ({ type: GET_ERROR, payload: data.status });

export const getQuotes = async (formData, dispatch) => {
    const { loanSize, creditScore, propertyType, occupancy } = formData;

    const queriesURL = `quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`;
    const fullURL = baseURL + queriesURL;

    try {
        const response = await fetch(fullURL, {
            method: 'GET',
            headers: {
                'Authorization': `OU-AUTH ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
    
        if(!response.ok) {
            dispatch(submitGetQuotesError(response))
            const message = `An error has occured: ${response.status}`
            throw new Error(message) 
        }
        
        const data = await response.json();
    
        if(!data.rateQuotes.length) {
            dispatch(submitGetQuotesNoResult())
        } else {
            dispatch(submitGetQuotesSuccess(data))
        }

    } catch (e) {
        console.error(e)
    }
    
}