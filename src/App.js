import logo from './logo.svg';
import './App.css';
import Components from './Components';
import OtroComponente from './OtroComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WEB SINTETICAS PASTO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Components />
      </header>
    </div>
  );
}

export default App;
