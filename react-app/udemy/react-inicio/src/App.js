import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = 'John'
  let auth = true
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
