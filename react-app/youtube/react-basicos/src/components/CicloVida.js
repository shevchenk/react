import React, { Component } from "react";

class Reloj extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount = () =>{
        console.log('1: El componente ya se encuentra en el DOM')
    }

    render(){
        return(
            <h3>Reloj Hora: {this.props.hora}</h3>
        )
    }
}

export default class CicloVida extends Component{

    temporizador = null 

    state = {
        hora: new Date().toLocaleTimeString(),
        visible: false
    }
    
    //console.log('0: Inicializa antes del DOM')
    Iniciar = () => {
        this.temporizador = setInterval( () => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
                visible: true
            })
        }, 1000)
    }

    Detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }    

    componentDidUpdate = (prevProps, prevState ) =>{
        console.log('2: El estado o las props se ha actualizado')
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount = () => {
        console.log('3: El componente ha sido eliminado del DOM')
    }

    render(){
        console.log('4: se actualiza por algún cambio del DOM')
        return(
        <div>
            <h1>Ciclo Vida de los componentes de Clase</h1>
            <h3>{ this.state.visible ? <Reloj hora={this.state.hora}></Reloj> : '' }</h3>
            <button onClick={this.Iniciar}>Iniciar</button>
            <button onClick={this.Detener}>Detener</button>
        </div>
        )
    }
}