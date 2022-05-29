import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const Contador2 = () => {

    const [contador, setContador] = useState(10);
    return (
        <View style={ styles.container }>
            <Text style={ styles.tittle }>Contador: { contador }</Text>
            <Fab
                title= "-1"
                position= 'bl'
                onPress= { () => setContador( contador - 1 ) }
            />

            <Fab
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
        top: -10
    },
    botonIncrementar: {
        backgroundColor: 'red',
        borderRadius: 100,
    }
})