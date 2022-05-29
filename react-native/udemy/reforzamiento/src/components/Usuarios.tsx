import { Usuario } from '../interfaces/reqRes';
import { useUsusarios } from '../hooks/useUsusarios';
//npm i axios
export const Usuarios = () => {

    //const { usuarios, useUsusarios } = useState<Usuario[]>([])
    const { usuarios, paginaAnterior, paginaSiguiente } = useUsusarios()

    const renderItem = ( {id, first_name, last_name, email, avatar}: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img
                        src={ avatar }
                        alt={ first_name }
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{ first_name }</td>
                <td>{ email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Ususarios</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={ paginaAnterior }
            >Atras</button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ paginaSiguiente }
            >Siguiente</button>
        </>
    )
}
