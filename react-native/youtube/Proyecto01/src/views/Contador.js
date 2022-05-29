import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Boton } from '../components/Boton'

export const Contador = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.tittle }>Contador: { contador }</Text>
            
            <Boton
                title= "-1"
                position= 'bl'
                onPress= { () => setContador( contador - 1 ) }
            />

            <Boton
                title= "+1"
                onPress= { () => setContador( contador + 1 ) }
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        textAlign: 'center',
        fontSize: 40,
        top: -10,
        color: 'white'
    }
})