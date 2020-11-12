import React from 'react';
import { useSelector } from "react-redux";

function QuotesDisplay() {
    const quotes = useSelector(state => state.quotes);
    const isLoading = useSelector(state => state.isLoading)
    const areNoQuotesReturned = useSelector(state => state.areNoQuotesReturned)

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
            <table data-testid="table" className="table">
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
                        {!isLoading && quotes.map((quote, i) => (
                            <tr key={i}>
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
                {!quotes.length && !isLoading && !areNoQuotesReturned &&
                    <div data-testid="fill-out-form-notice" className="fill-out-form-notice">Please fill out the form above to display your quotes</div>
                }
                {isLoading &&
                    <div className="loading">Loading...</div>
                }
                {areNoQuotesReturned &&
                    <div className="no-quotes">Your search returned no results. <br/>
                        Please modify your query and try again.
                    </div>
                }
        </div>
    )
}

export default QuotesDisplay
