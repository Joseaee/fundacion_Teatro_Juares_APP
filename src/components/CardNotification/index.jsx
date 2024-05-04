import {View, StyleSheet, Text, Image} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'





























export default function CardNotification({children, timestamp, imgSrc, icon}){
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: wp('100%')}}>
            <View style={{padding: 16}}>
               <Image style={{width: 70, height: 70, borderRadius: 50}} source={require('../../../assets/img/Servicios/belleza.jpg')}/>
            </View>
            <View style={{flex:1, paddingStart: 12}}>
                <Text style={{fontSize: 20}}>{children}</Text>
                <Text>{timestamp}</Text>
            </View>
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1
    }
})