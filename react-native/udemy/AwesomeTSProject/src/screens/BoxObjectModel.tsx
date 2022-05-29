import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <View
                style={ styles.container }
            >
                <Text
                    style={ styles.title }
                >Box Object Model</Text>
            </View>
            
            <View
                style={ styles.container }
            >
                <Text
                    style={ styles.title }
                >Box Object Model</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        fontSize: 20,
        //width: 150,
        //alignSelf: 'center',
        marginTop: 10,
        backgroundColor: 'green'
    },
    title:{
        fontSize: 20,
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 10,
        textAlign: 'center',
    },
    
})
