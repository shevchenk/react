import { useRef, useEffect, useState } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsusarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[] > ([])
    const paginaref = useRef(1)
    
    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params: {
                page: paginaref.current
            }
        })

        if( resp.data.data.length > 0 ){
            setUsuarios( resp.data.data )
        }
        else{
            paginaref.current --
            alert('No hay mas registros')
        }
        //setUsuarios( resp.data.data )
    }

    const paginaSiguiente = () => {
        paginaref.current ++
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if ( paginaref.current > 1 ){
            paginaref.current --
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
