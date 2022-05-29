import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export const Contador = () => {

    const [contador, setContador] = useState(10);
    return (
        <View style={ styles.container }>
            <Text style={ styles.tittle }>Contador: { contador }</Text>

            {/*<Button
                title="Click"
                onPress={ ()=> setContador( contador + 1 ) }
            />*/}

            <TouchableOpacity
                style={ styles.fabLocationBR }
                onPress={ ()=> setContador( contador + 1 ) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>+1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={ ()=> setContador( contador - 1 ) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>-1</Text>
                </View>
            </TouchableOpacity>
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
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
})