import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

export const Boton = ({ title, onPress, position }) => {

    return (
        <View style={[
            styles.botonLocation,
            ( position === 'bl' ) ? styles.left : styles.right
        ]}>
            <TouchableNativeFeedback
                onPress={ onPress }
                background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
            >
                <View style={ styles.boton }>
                    <Text style={ styles.botonText }> { title }</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8
    },
    botonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    botonLocation: {
        position: 'absolute',
        bottom: 10,
    },
    right: {
        right:25
    },
    left: {
        left:25
    }
})