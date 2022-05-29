import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Viewer = () => {
    return (
        <View style={ styles.container }>
            <Text> Hola Jorge</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 45,
        width: '100%'
    }
})