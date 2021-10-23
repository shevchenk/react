import { useState } from "react"

const Funciones = () => {
    const [valor, setValor] = useState(0)

    const acumular = (numero: number) => {
        setValor( valor + numero)
    }

    const sumar = (a: number, b: number) : number => {
        return a + b
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: { sumar(1, 3) }</span>
            <h2>Contador: {valor}</h2>
            <button 
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            > +1 </button>
            <button 
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
            > -1 </button>
        </>
    )
}

export default Funciones