import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="#C5C5C5"
    />
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom:15,        
    }
})

export default Input