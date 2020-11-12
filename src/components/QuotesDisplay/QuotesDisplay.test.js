import React from 'react';
import  QuotesDisplay  from './QuotesDisplay';
import { render, screen, cleanup  } from '../../test-utils'

afterEach(cleanup);

test('renders the display table and fill out form notice', () => {
    const { queryByTestId } = render(<QuotesDisplay />);

    expect(queryByTestId("table")).toBeTruthy();
    expect(queryByTestId("fill-out-form-notice")).toBeTruthy();
});

test('it matches snapshot', () => {
    const tree = render(<QuotesDisplay />);

    expect(tree).toMatchSnapshot();
})

test('displays the results in the table when the quotes array is set', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [
            {
                lenderName: "lender1",
                loanType: "15YR FIXED",
                interestRate: 3.5,
                closingCosts: 5000,
                monthlyPayment: 2000,
                apr: 3.75
            },
            {
                lenderName: "lender2",
                loanType: "30YR FIXED",
                interestRate: 4.0,
                closingCosts: 6000,
                monthlyPayment: 3000,
                apr: 4.5
            }
        ]
    }});

    //1st row
    expect(screen.getByText(/lender1/)).toBeInTheDocument();
    expect(screen.getByText(/15YR FIXED/)).toBeInTheDocument();
    expect(screen.getByText(/3.5/)).toBeInTheDocument();
    expect(screen.getByText(/5,000/)).toBeInTheDocument();
    expect(screen.getByText(/2,000/)).toBeInTheDocument();
    expect(screen.getByText(/3.75/)).toBeInTheDocument();
    //2ndrow
    expect(screen.getByText(/lender2/)).toBeInTheDocument();
    expect(screen.getByText(/30YR FIXED/)).toBeInTheDocument();
    expect(screen.getByText(/4.0/)).toBeInTheDocument();
    expect(screen.getByText(/6,000/)).toBeInTheDocument();
    expect(screen.getByText(/3,000/)).toBeInTheDocument();
    expect(screen.getByText(/4.5/)).toBeInTheDocument();
})

test('displays properly formatted rates', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [
            {
                lenderName: "lender1",
                loanType: "15YR FIXED",
                interestRate: 3.5,
                closingCosts: 5000,
                monthlyPayment: 2000,
                apr: 3.75
            }
        ]
    }});

    expect(screen.getByText(/3.50%/)).toBeInTheDocument();
    expect(screen.getByText(/3.75%/)).toBeInTheDocument();
})

test('displays properly formatted currency values', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [
            {
                lenderName: "lender1",
                loanType: "15YR FIXED",
                interestRate: 3.5,
                closingCosts: 5000,
                monthlyPayment: 2000,
                apr: 3.75
            }
        ]
    }});

    expect(screen.getByText(/\$5,000/)).toBeInTheDocument();
    expect(screen.getByText(/\$2,000/)).toBeInTheDocument();
})

test('displays loading text when waiting for quotes to be fetched', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [],
        isLoading: true,
        areNoQuotesReturned: false,
        error: null
    }});

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
})

test('displays no results text when no quotes are returned', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [],
        isLoading: false,
        areNoQuotesReturned: true,
        error: null
    }});

    expect(screen.getByText(/Your search returned no results/)).toBeInTheDocument();
})

test('displays error text when there is an error fetching quotes', () => {
    render(<QuotesDisplay />, {initialState: { 
        quotes: [],
        isLoading: false,
        areNoQuotesReturned: false,
        error: {
            status: 403
        }
    }});

    expect(screen.getByText(/WHOOPS, something went wrong! Please try again/)).toBeInTheDocument();
})