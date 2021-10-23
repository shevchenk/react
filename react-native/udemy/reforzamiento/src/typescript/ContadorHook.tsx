import { useCounter } from "../hooks/useCounter"

const ContadorHook = () => {
    const {valor, acumular} = useCounter(5)

    return (
        <>
            <h3>Contador Hook</h3>
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

export default ContadorHook