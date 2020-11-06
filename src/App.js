import './App.css';
import QuotesDisplay from './components/QuotesDisplay';
import QuotesForm from './components/QuotesForm';

function App() {
  return (
    <div className="App">
      <h1>Mortgage Rate Quotes</h1>
      <QuotesForm />
      <QuotesDisplay />
    </div>
  );
}

export default App;
