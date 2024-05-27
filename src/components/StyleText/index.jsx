import { Text, StyleSheet, View } from "react-native";

export default function StyleText({children, tag, size, style}){
    const fontSize = (size) ? size : 'medium'
    return (
        <View style={[{flexDirection: 'row'}, style]}>
            <Text style={[styles.text, styles[fontSize]]}>
                {children} 
            </Text>
            <Text style={[styles.text, styles.tag, styles[fontSize] ,{marginStart: 4}]}>{tag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: '#2f2f2f',
    },
    tag: {
        color: '#E31734',
    },
    big:{
        fontSize: 22,
    },
    medium:{
        fontSize: 18,
    },
    small:{
        fontSize: 16,
    }
})