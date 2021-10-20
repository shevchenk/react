import React, {Component} from "react";
/*
class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contador: 0,
        };

        this.Aumentar = this.Aumentar.bind(this)
        this.Disminuir = this.Disminuir.bind(this)
    }

    Aumentar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    Disminuir = () => {
        if( this.state.contador > 0 ){
            this.setState({ contador: this.state.contador - 1 })
        }
    }

    render() {
      return (
        <div>
            <h2>Eventos ES6</h2>
            <h3>Contador: {this.state.contador}</h3>
            <nav>
                <button onClick={this.Aumentar} className="form-control">+</button>
                <button onClick={this.Disminuir} className="form-control">-</button>
            </nav>
        </div>
      );

    }
}
*/

export class EventosES7 extends Component {
    state = {
        contador : 0
    }

    Aumentar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    Disminuir = (e) => {
        if( this.state.contador > 0 ){
            this.setState({ contador: this.state.contador - 1 })
        }
    }

    render() {
      return (
        <div>
            <h2>Eventos EventosES7</h2>
            <h3>Contador: {this.state.contador}</h3>
            <nav>
                <button onClick={this.Aumentar} className="form-control">+</button>
                <button onClick={this.Disminuir} className="form-control">-</button>
            </nav>
        </div>
      );

    }
}

const Boton = (props) => {
    return <button onClick={ props.click }>Botón hecho componente</button>
}

export class MasSobreEventos extends Component {
    handleClick = (e, msj) => {
        console.log(msj)
    }

    render() {
        return (
          <div>
                <h2>Más sobre eventos</h2>
                <button 
                    onClick={ (e) => 
                    this.handleClick(e, 'Hola Pasando parámetro')
                }>Saludar</button>
                <Boton
                    click={ (e) => this.handleClick(e,'Hola mundos') }
                ></Boton>
          </div>
        );
      }
}