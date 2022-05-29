import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, ActivityIndicatorBase, ScrollView } from 'react-native';
import useUsuario from '../hooks/useUsuario';
import ComSeparator from '../components/comSeparator';
import ComBoton from '../components/comBoton';

interface Props {
    Nro: number,
    Paterno: string,
    Nombre: string,
    Email: string,
    Foto: string
}

const ListItem = ( {Nro, Paterno, Email, Nombre, Foto}: Props ) => {
    return (
        <>
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <Text style={[styles.item, {flex:0}]}>{ Nro.toString() }.-</Text>
                <Image
                    source={{ uri: Foto }}
                    style={[styles.foto, {flex:1}]} 
                />
                <Text style={[styles.item, {flex:2}]}>{ Paterno + ', ' + Nombre }</Text>
                <Text style={[styles.item, {flex:4}]}>{ Email }</Text>
            </View>
            <ComSeparator/>
        </>
    )
}

const Usuario = () => {
    
    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuario()

    return(
        <View style={{
            flex:1,
            backgroundColor: 'black',
            paddingTop: 20
        }}>
            <Text style={styles.title}> 
                Listado de Usuario(s)
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.item, {flex:0}]}>#</Text>
                <Text style={[styles.item, {flex:1, textAlign: 'center'}]}>Foto</Text>
                <Text style={[styles.item, {flex:2}]}>Persona</Text>
                <Text style={[styles.item, {flex:4}]}>Email</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={usuarios}
                    renderItem={
                        ( {item, index} ) => 
                        <ListItem
                            Nro = {index + 1}
                            Foto = {item.avatar}
                            Paterno = {item.last_name}
                            Nombre = {item.first_name}
                            Email = {item.email}
                        />
                    }
                />
            </View>
            <ScrollView style={{
                height:1
            }}>
                <Text style={{ 
                    color: 'white', 
                    fontSize: 12,
                }}> {JSON.stringify( usuarios, null, 2 )} </Text>
            </ScrollView>

            <ComBoton
                title= "B"
                position= 'bl'
                onPress= { paginaAnterior }
            />

            <ComBoton
                title= "N"
                onPress= { paginaSiguiente }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     maxHeight:362,
     height:362
    },
    title: { 
        color: 'white', 
        fontSize: 25,
        alignSelf: 'center',
        fontStyle: 'italic',
    },
    item: {
        padding: 5,
        fontSize: 16,
        height: 56,
        color: 'white',
    },
    foto: {
        width: 50,
        height: 55,
        borderRadius: 30,
    }
  });

export default Usuario