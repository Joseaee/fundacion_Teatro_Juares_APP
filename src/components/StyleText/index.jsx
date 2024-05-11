import { Text, StyleSheet, View } from "react-native";

export default function StyleText({children, tag, style}){
    return (
        <View style={[{flexDirection: 'row'}, style]}>
            <Text style={styles.text}>
                {children} 
            </Text>
            <Text style={[styles.text, styles.tag, {marginStart: 4}]}>{tag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2f2f2f',
    },
    tag: {
        color: '#E31734',
    }
})