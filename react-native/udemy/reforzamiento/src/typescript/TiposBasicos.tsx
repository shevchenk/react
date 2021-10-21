const TiposBasicos = () => {
    //let nombre: string | number = 'Fernano'
    let nombre: string = 'Fernando'
    let edad: number = 35
    const estaActivo: boolean = true;

    //const poderes = ['Velocidad', 'Volar', 'Respirar en el agua']
    const poderes: string[] = []

    
    
    return (
      <>
        <h2>Tipos Básicos</h2>
        {nombre}, {edad}, {(estaActivo ? 'Activo': 'No Activo')}
        <br/>
        { poderes.join(',')}
      </>
    )
  }
  
  export default TiposBasicos;