import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';

//const { width, height } = Dimensions.get('window')

export const Dimensiones = () => {

    const { width, height } = useWindowDimensions()

    return (
        <SafeAreaView>
            <View style={ Styles.container }>
                <View style = {{
                    ...Styles.cajaMorada, 
                    width: width * 0.5,
                }}>
                    <Text>Dimensiones</Text>
                </View>
                <View style = { Styles.cajaNaranja }>
                    <Text>Dimensiones</Text>
                </View>
            </View>
            <Text> W: { width }, H: { height }</Text>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: 600
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%'
    },
    title: {
        fontSize: 30,

    }
})