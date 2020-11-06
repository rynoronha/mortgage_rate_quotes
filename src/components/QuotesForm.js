import React, { useState } from 'react'

function QuotesForm() {
    const [formData, setFormData] = useState({
        loanSize: "",
        creditScore: "",
        propertyType: "SingleFamily",
        occupancy: "Primary"
    });

    const updateFormData = event => setFormData({...formData, [event.target.name]: event.target.value});

    const { loanSize, creditScore, propertyType, occupancy } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="loan-size">Loan Size</label>
                <input
                    value={loanSize}
                    onChange={e => updateFormData(e)}
                    placeholder=""
                    type="text"
                    name="loanSize"
                    id="loan-size"
                    required
                />
            </div>
            <div>
                <label htmlFor="credit-score">Credit Score</label>
                <input
                    value={creditScore}
                    onChange={e => updateFormData(e)}
                    placeholder=""
                    type="text"
                    name="creditScore"
                    id="credit-score"
                    required
                />
            </div>
            <div>
                <label htmlFor="property-type">Property Type</label>
                <select name="property-type" id="property-type" onChange={e => updateFormData(e)}>
                    <option value="SingleFamily">SingleFamily</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="MultiFamily">MultiFamily</option>
                </select>
            </div>
            <div>
                <label htmlFor="occupancy">Occupancy</label>
                <select name="occupancy" id="occupancy" onChange={e => updateFormData(e)}>
                    <option value="SingleFamily">Primary</option>
                    <option value="Condo">Secondary</option>
                    <option value="Townhouse">Investment</option>
                </select>
            </div>
            <button className="submit-btn" type="submit">Quote Rates</button>
        </form>
    )
}

export default QuotesForm
