import { useState } from "react"

const Funciones = () => {
    const [valor, setValor] = useState(12)

    const acumular = (numero: number) => {
        setValor( valor + numero)
    }

    const sumar = (a: number, b: number) : number => {
        return a + b
    }

    const sumar2 = (a: number, b: number) =>{
        return a + b
    }

    return (
        <>
            <h3>Funciones</h3>
            <div>El resultado es: { sumar(1, 3) }</div>
            <div>El resultado2 es: { sumar2(2, 3) }</div>
            <h2>Contador: {valor}</h2>
            <button 
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            > +1 </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
            > -1 </button>
        </>
    )
}

export default Funciones