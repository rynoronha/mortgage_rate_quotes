import './App.css';
import QuotesDisplay from './components/QuotesDisplay/QuotesDisplay';
import QuotesForm from './components/QuotesForm/QuotesForm';

function App() {
  return (
    <div className="App">
      <h1 className="title">Mortgage Rate Quotes</h1>
      <QuotesForm />
      <QuotesDisplay />
    </div>
  );
}

export default App;
