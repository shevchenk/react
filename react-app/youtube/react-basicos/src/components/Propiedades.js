import React from 'react'
import PropTypes from 'prop-types'

const Propiedades = (props) => {
    const prueba = 
        <div>
            <h2> {props.porDefecto} </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? 'true':'false'}</li>
                <li>{props.arreglo.join(" | ")}</li>
                <li>{props.objeto.nombre + ' ' + props.objeto.apellido}</li>
                <li>{props.react}</li>
                <li>{props.arreglo.map(props.funcion).join(" | ")}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    

    return prueba
}

export default Propiedades

Propiedades.defaultProps = {
    porDefecto: 'Las Props',
    activo: false,
}

Propiedades.propType = {
    numero: PropTypes.number.isRequired
    
}