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
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>{auth ? "Usuario Logeado" : "Usuario no logeado"}</p>
        <p>
          Actualizar <code>src/App.js</code> and save to reload.
        </p>
        <input className="form-control" value={nombre} />

        <ul>
          {
            estaciones.map( (el,index) => {
              return <li key={index}>{el}</li>
            })
          }
        </ul>
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
