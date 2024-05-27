import {Text, View, StyleSheet} from 'react-native'

export default function Badge({children, color}){
    return (
        <View style={[styles.container, {backgroundColor: 'transparent', borderColor: color}]}>
            <Text style={{fontSize: 14, color, fontWeight: 'bold'}}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderWidth: 2,
    },

})