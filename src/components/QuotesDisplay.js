import React from 'react';
import { useSelector } from "react-redux";

function QuotesDisplay() {
    const quotes = useSelector(state => state.quotes);

    const formatPercent = (number) => {
        let decimalPlaces = number.toString().split('.')[1];
        
        if(!decimalPlaces || decimalPlaces.length <= 2) {
            return number.toFixed(2) + "%";
        }
        
        return parseFloat(number.toFixed(3)) + "%";
    }

    const formatCurrency = (number) => {
        return "$" + Math.round(number).toLocaleString('en-US');
    }

    return (
        <div className="table-container">
            <table className="table">
                    <thead>
                        <tr>
                        <th>LENDER</th>
                        <th>PRODUCT</th>
                        <th>RATE</th>
                        <th>CLOSING<br/>COSTS</th>
                        <th>MONTHLY<br/>PAYMENT</th>
                        <th>APR<br/></th>
                    </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote) => (
                            <tr key={quote.quote_id}>
                                <td>{quote.lenderName}</td>
                                <td>{quote.loanType}</td>
                                <td>{formatPercent(quote.interestRate)}</td>
                                <td>{formatCurrency(quote.closingCosts)}</td>
                                <td>{formatCurrency(quote.monthlyPayment)}</td>
                                <td>{formatPercent(quote.apr)}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                {!quotes.length &&
                    <div className="fill-out-form-notice">Please fill out the form above to display your quotes</div>
                }
        </div>
    )
}

export default QuotesDisplay
