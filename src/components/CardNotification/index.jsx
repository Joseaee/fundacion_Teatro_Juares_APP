import { useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CardNotification({children, subtitle, Icon, onPress = ()=>{}, iconBackground}){
    const [selected, setSelected] = useState(false)
    const backgroundColor = (iconBackground) ? iconBackground : '#E31734'
    return (
        <TouchableOpacity style={[styles.carta, selected ? styles.selected : null]} onPress={()=> {
            setSelected(!selected)
            onPress()
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: wp('100%'), padding: 16, overflow: 'hidden'}}>
                <View style={[styles.boxMessage, {backgroundColor}]}>
                    <Icon style={styles.icon} />
                </View>
                <View style={{paddingHorizontal: 12}}>
                    <Text style={styles.title}>{children}</Text>
                    <Text style={styles.text}>{subtitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta: {
        marginVertical: 6,
        marginHorizontal: 14,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 10,
        elevation: 6,
        overflow: 'hidden'
    },
    selected: {
        borderColor: '#48C9B0',
        borderWidth: 3,
    },
    boxMessage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fill: "#fff",
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 18,
        color: '#2f2f2f'
    },
    text: {
        color: 'gray',
        fontSize: 14,
    }
})