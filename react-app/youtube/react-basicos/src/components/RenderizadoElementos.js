import React, {Component} from "react";
import data from '../Helpers/data.json'

const ElementoLista = (props) => {
    let r = 
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">Framework {props.el.name}</a>
        </li>
    return r
}

class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sesion: true,
          season: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        };
    }

    render() {
      return (
        <div>
            <h2>Renderizado Elementos</h2>
            <h3>Estaciones del Año</h3>

            <ol>
                {
                    this.state.season.map( (el, index) => {
                        return <li key={index} > {el} </li>
                    } )
                }
            </ol>

            <h3>Framework Frontend JS</h3>
            <ul>
                {
                    data.frameworks.map( ( el, index)=> {
                        return <ElementoLista el={el} key={index}></ElementoLista>
                    })
                }
            </ul>
        </div>
      );

    }
}


  export default RenderizadoElementos
