import React from 'react';
import { StyleSheet, View } from 'react-native';

const ComSeparator = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default ComSeparator