const TiposBasicos = () => {
    let apellido: string | number = 33
    let nombre: string = 'Jorge'
    let edad: number = 35
    const estaActivo: boolean = true

    const poderes : string[] = ['Velocidad', 'Volar', 'Respirar en el agua']
    //const poderes: string[] = []

    
    
    return (
      <>
        <h2>Tipos Básicos</h2>
        {apellido} {nombre}, {edad}, {(estaActivo ? 'Activo': 'No Activo')}
        <br/>
        { poderes.join(', ')}
      </>
    )
  }
  
  export default TiposBasicos;