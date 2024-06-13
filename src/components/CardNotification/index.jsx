import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function CardNotification({children, timestamp, imgSrc, icon, onPress}){
    return (
        <TouchableOpacity onPress={onPress} style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: wp('100%')}}>
            <View style={{padding: 16}}>
               <Image style={{width: 70, height: 70, borderRadius: 50}} source={imgSrc}/>
            </View>
            <View style={{flex:1, paddingStart: 12}}>
                <Text style={{fontSize: 18}}>{children}</Text>
                <Text style={{fontSize: 14, color: 'gray'}}>{timestamp}</Text>
            </View>
        </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1
    }
})