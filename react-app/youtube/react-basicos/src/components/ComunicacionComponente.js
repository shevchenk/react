import React, { Component } from "react";


export default class Padre extends Component{
    state = {
        contador : 0,
    }

    IncrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <div>
                <h1>Hola Padre</h1>
                <h2>Contador: {this.state.contador}</h2>
                <Hijo msj="Hola soy hijo"></Hijo>
                <Hijo 
                    IncrementarContador={ this.IncrementarContador } 
                    msj="Hola soy su segundo hijo"
                ></Hijo>
            </div>
        )
    }
}

const Hijo = (props) => {
    let r = 
        <>
        <h2>{props.msj}</h2>
        <button onClick={props.IncrementarContador}> + </button>
        <br/>
        <Nieto></Nieto>
        </>
    return r
}

const Nieto = (props) => {
    let r = 
        <>
        <h2>Hola soy Nieto</h2>
        </>

    return r
}