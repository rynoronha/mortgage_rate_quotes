import React from 'react';
import  QuotesForm  from './QuotesForm';
import { render,  fireEvent, cleanup } from '../../test-utils'

afterEach(cleanup);

test('renders the form inputs and button', () => {
    const { queryByTestId } = render(<QuotesForm />);

    expect(queryByTestId('loan-size')).toBeTruthy();
    expect(queryByTestId('property-type')).toBeTruthy();
    expect(queryByTestId('credit-score')).toBeTruthy();
    expect(queryByTestId('occupancy')).toBeTruthy();
    expect(queryByTestId('button')).toBeTruthy();
});

test('it matches snapshot', () => {
    const tree = render(<QuotesForm />);

    expect(tree).toMatchSnapshot();
})

test('updates input values on change', () => {
    const { queryByTestId } = render(<QuotesForm />);

    const loanSizeInput = queryByTestId('loan-size');
    const creditScoreInput = queryByTestId('credit-score');

    fireEvent.change(loanSizeInput, {target: {value: '500000'}});
    fireEvent.change(creditScoreInput, {target: {value: '700'}});
    
    expect(loanSizeInput.value).toBe('500000');
    expect(creditScoreInput.value).toBe('700');
});

test('updates select values on change', () => {
    const { queryByTestId } = render(<QuotesForm />);

    const propertyTypeSelect = queryByTestId('property-type');
    const occupancySelect = queryByTestId('occupancy');

    fireEvent.change(propertyTypeSelect, {target: {value: 'Condo'}});
    fireEvent.change(occupancySelect, {target: {value: 'Investment'}});
    
    expect(propertyTypeSelect.value).toBe('Condo');
    expect(occupancySelect.value).toBe('Investment');
});

test('does not update loan size input value on change if non numeric character is entered', () => {
    const { queryByTestId } = render(<QuotesForm />);

    const loanSizeInput = queryByTestId('loan-size');

    fireEvent.change(loanSizeInput, {target: {value: 'test'}});
    
    expect(loanSizeInput.value).toBe('');
});

test('triggers handleSubmit function when form is submitted', () => {
    const spy = jest.spyOn(console, 'log')
    const wrapper = render(<QuotesForm />);

    const loanSizeInput = wrapper.queryByTestId('loan-size');
    const creditScoreInput = wrapper.queryByTestId('credit-score');

    fireEvent.change(loanSizeInput, {target: {value: '500000'}});
    fireEvent.change(creditScoreInput, {target: {value: '700'}});
    fireEvent.click(wrapper.queryByTestId('button'));

    expect(spy).toHaveBeenCalledTimes(1);
});

