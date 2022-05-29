import React from 'react';
import { Text, View } from 'react-native'

export const HolaMundo = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>Hola Jorge!!</Text>
          </View>
    )
}
