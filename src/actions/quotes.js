import { GET_QUOTES } from "./types";

const URL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?loanSize=500000&creditScore=700&propertyType=SingleFamily&occupancy=Primary';
const apiKey = process.env.REACT_APP_API_KEY;

export const getQuotes = async (formData, dispatch) => {
    console.log("FORM DATA")
    console.log(formData)
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': `OU-AUTH ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    dispatch({
        type: GET_QUOTES,
        payload: data.rateQuotes
    })
}