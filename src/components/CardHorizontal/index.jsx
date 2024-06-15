// components/CardHorizontal.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CardHorizontal({ title, Icon, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
            <Icon width={50} height={50} fill={'grey'} />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        width: 160, 
        marginVertical: 5,
    },
});

export default CardHorizontal;
