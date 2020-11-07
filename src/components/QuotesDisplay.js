import React from 'react';
import { useSelector } from "react-redux";

function QuotesDisplay() {
    const quotes = useSelector(state => state.quotes);

    return (
        <div>
            <table className="table">
                    <thead>
                        <tr>
                        <th>LENDER</th>
                        <th>PRODUCT</th>
                        <th>RATE</th>
                        <th>CLOSING<br/>COSTS</th>
                        <th>MONTHLY<br/>PAYMENTS</th>
                        <th>APR<br/></th>
                    </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote) => (
                            <tr key={quote.quote_id}>
                                <td>{quote.lenderName}</td>
                                <td>{quote.loanType}</td>
                                <td>{quote.interestRate}</td>
                                <td>{quote.closingCosts}</td>
                                <td>{quote.monthlyPayment}</td>
                                <td>{quote.apr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default QuotesDisplay
