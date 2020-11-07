import React, { useState } from 'react'

function QuotesForm() {
    const [formData, setFormData] = useState({
        loanSize: "",
        creditScore: "",
        propertyType: "SingleFamily",
        occupancy: "Primary"
    });

    const updateFormData = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const { loanSize, creditScore } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const formatNumberToCurrency = (e) => {
        var target = e.target;
        var temp = e.target.value.replace(/,/g, '');
        var value = Number(temp).toLocaleString('en-US');

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
                        <option value="SingleFamily">Primary Residence</option>
                        <option value="Condo">Secondary Residence</option>
                        <option value="Townhouse">Investment</option>
                    </select>
                </div>
            </div>
            <button className="button" type="submit">Quote Rates</button>
        </form>
    )
}

export default QuotesForm
