import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Card({ title,  onPress = ()=>{}, reverse = false, borderRadius = 0,  children, width, height, borderColorSelected = '#fff', backgroundColor = '#fff', disabled = false}) {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity disabled={disabled} style={[styles.card, (width) ? {width} : null, (height) ? {height} : null, selected ? {
            borderWidth: 3,
            borderColor: borderColorSelected,
        } : null, reverse ? {flexDirection: 'column-reverse'} : null, {borderRadius}, {backgroundColor}]} onPress={()=>{
            onPress()
            setSelected(!selected)
        }
        }>
            <Text>{title}</Text>
            <View>
                {children}
            </View>            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 3,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        padding: 6,
        gap: 6
    },
});

export default Card;
