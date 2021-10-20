import logo from './logo.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {EventosES7, MasSobreEventos} from './components/Eventos'
import ComunicacionComponente from './components/ComunicacionComponente'
import CicloVida from './components/CicloVida'

function App() {
  let nombre = 'John'
  let auth = true
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <CicloVida></CicloVida>
        </section>
        <section>
          <ComunicacionComponente></ComunicacionComponente>
          <br/>
          <MasSobreEventos></MasSobreEventos>          
          <br/>
          <EventosES7></EventosES7>
        </section>
        
        <section>
          <RenderizadoElementos></RenderizadoElementos>
        </section>
        
        <section>
          <RenderizadoCondicional></RenderizadoCondicional>
        </section>

        <section>
          <Componente msg="Hola soy componente desde appjs"></Componente>
          <hr/>
          <Propiedades 
            cadena="Cadena texto" 
            numero={5} 
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre:'Jorge',apellido:'Salcedo'}}
            react = {<li>React element</li>}
            funcion = { (num) => num*num  }
            componente = {<Componente msg="Nuevo componente"></Componente>}
            >
          </Propiedades>
          <hr/>
          <Estado></Estado>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <h1>{nombre}</h1>
        <p>{auth ? "Usuario Logeado" : "Usuario no logeado"}</p>
        <input className="form-control" value={nombre} />

        <ul>
          {
            estaciones.map( (el,index) => {
              return <li key={index}>{el}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
