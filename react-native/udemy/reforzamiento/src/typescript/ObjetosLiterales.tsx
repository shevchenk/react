interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Perú',
            casaNo: 123
        }
    }

    return (
        <>
        <h2>Objetos Literales</h2>
        <code>
            <pre>
                { JSON.stringify(persona, null, 2) }
            </pre>
        </code>
        </>
    )
}

export default ObjetosLiterales