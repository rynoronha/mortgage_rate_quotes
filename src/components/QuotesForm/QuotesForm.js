import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getQuotes } from "../../actions/quotes"
import { showLoader } from "../../actions/loader"

function QuotesForm() {
    const [formData, setFormData] = useState({
        loanSize: "",
        creditScore: "",
        propertyType: "SingleFamily",
        occupancy: "Primary"
    });

    const dispatch = useDispatch();
    
    const updateFormData = (event) => {
        if (event.target.name === "loanSize") {
            const re = /^[0-9\b]+$/;
           
            if (event.target.value === '' || re.test(event.target.value)) {
                setFormData({...formData, [event.target.name]: event.target.value});
            }
        } else {
            setFormData({...formData, [event.target.name]: event.target.value});
        }
        
    }
    const { loanSize, creditScore } = formData;

    const handleSubmit = (e) => {
        showLoader(dispatch);
        e.preventDefault();
        getQuotes(formData, dispatch);
    }

    const formatNumberToCurrency = (e) => {
        let target = e.target;
        let temp = e.target.value.replace(/,/g, '');
        let value = Number(temp).toLocaleString('en-US');

        if (temp === '') {
            target.value = '';
        } else {
            target.value = '$' + value;
        }
    }

    const formatCurrencyToNumber = (e) => {
        let target = e.target;
        let value = target.value.replace(/[,.]/g, '');

        target.value = value.replace(/\$/,'');
    }

    return (
        <form className="form" onSubmit={e => handleSubmit(e)}>
            <div className="form-categories-container">
                <div className="form-category">
                    <label htmlFor="loan-size">Loan Size</label>
                    <input
                        value={loanSize}
                        onChange={e => updateFormData(e)}
                        onFocus={e => formatCurrencyToNumber(e)}
                        onBlur={e => formatNumberToCurrency(e)}
                        placeholder=""
                        type="text"
                        name="loanSize"
                        id="loan-size"
                        required
                    />
                </div>
                <div className="form-category select-container">
                    <label htmlFor="property-type">Property Type</label>
                    <select name="propertyType" id="property-type" onChange={e => updateFormData(e)}>
                        <option value="SingleFamily">Single Family</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="MultiFamily">Multi Family</option>
                    </select>
                </div>
                <div className="form-category">
                    <label htmlFor="credit-score">Credit Score</label>
                    <input
                        value={creditScore}
                        onChange={e => updateFormData(e)}
                        placeholder=""
                        type="number"
                        name="creditScore"
                        id="credit-score"
                        min="300" 
                        max="850"
                        step="1" 
                        required
                    />
                </div>
                <div className="form-category select-container">
                    <label htmlFor="occupancy">Occupancy</label>
                    <select name="occupancy" id="occupancy" onChange={e => updateFormData(e)}>
                        <option value="Primary">Primary Residence</option>
                        <option value="Secondary">Secondary Residence</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>
            </div>
            <button className="button" type="submit">Quote Rates</button>
        </form>
    )
}

export default QuotesForm
