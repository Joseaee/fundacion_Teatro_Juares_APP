import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function Count({value, limit , onPlus, onMinus}){
    return (
        <View style={{flexDirection: 'row',gap: 6}}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                if(value === 0) return
                if(onMinus){
                    onMinus()
                }
            }}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{value}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{
                if(value === limit) return
                if(onPlus){
                    onPlus()
                }
            }}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 26,
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderColor: '#E31734',
        borderWidth: 2
    },
    btnText: {
        fontSize: 16,
        color: '#E31734',
        fontWeight: 'bold'
    },
})