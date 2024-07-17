import {Text, View, StyleSheet} from 'react-native'

export default function Badge({children, color, size}){
    const width = (size) ? size : null
    return (
        <View style={[styles.container, {backgroundColor: 'transparent', borderColor: color, width}]}>
            <Text style={{fontSize: 14, color, fontWeight: 'bold'}}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

})