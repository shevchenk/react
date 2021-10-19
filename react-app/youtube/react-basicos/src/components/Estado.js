import React,{Component} from "react";

const EstadoHijo = (props) => {
    let r = 
        <h2>Soy Hijo {props.contadorHijo}</h2>
    return r
}

class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(),
          contador: 0
        };

        /*setInterval( ()=> {
            this.setState({
                contador: this.state.contador += 1
            })
        }, 1000)*/

        setInterval ( this.Aumentar, 1000 )

    }

    Aumentar = () => this.setState({
        contador: this.state.contador + 1
    })
  
    render() {
      return (
        <div>
            <h2>Contador: {this.state.contador}</h2>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <EstadoHijo 
                contadorHijo={this.state.contador} 
                saludo='Soy Hijo Componente'
            >
            </EstadoHijo>
        </div>
      );

    }
}


  export default Estado