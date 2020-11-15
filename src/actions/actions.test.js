import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const dummy = () => {
    // Mock Ajax call
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ 
            data: {
                lenderName: "lender1",
                loanType: "15YR FIXED",
                interestRate: 3.5,
                closingCosts: 5000,
                monthlyPayment: 2000,
                apr: 3.75
            }    
        }), 200);
    });
};
  
const actionCreator = () => dispatch => {
    return dummy()
      .then(response => dispatch({ type: "GET_QUOTES", payload: response.data }))
      .catch(error => dispatch({ type: "ERROR", error }));
};
  
describe("Redux Mock Store", () => {
    test("Test Dummy Ajax call", () => {
        const expectedActions = [
            { 
                type: "GET_QUOTES", 
                payload: { 
                    lenderName: "lender1",
                    loanType: "15YR FIXED",
                    interestRate: 3.5,
                    closingCosts: 5000,
                    monthlyPayment: 2000,
                    apr: 3.75
                }
            }
        ];
      const store = mockStore({});
  
      return store.dispatch(actionCreator()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
      });
    });
});