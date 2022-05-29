import React, {useRef, useState, useEffect} from "react";
import {IUsuario, IReqResListado} from '../interfaces/IUsuario';
import { reqResApi } from '../api/reqRes';
import { Alert } from "react-native";

const useUsuario = () => {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([])
    const paginaref = useRef(1)
    const nro = 5

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<IReqResListado>('/users',{
            params: {
                page: paginaref.current,
                per_page: nro,
            }
        })

        if( resp.data.data.length > 0 ){
            setUsuarios( resp.data.data )
        }
        else{
            paginaref.current --
            showAlert()
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

    const showAlert = () =>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Ok",
                    onPress: () => Alert.alert("Ok Pressed"),
                    style: "default",
                },
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
                
            ],
            {
            cancelable: false,
            onDismiss: () =>
                Alert.alert(
                "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
        );
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}

export default useUsuario