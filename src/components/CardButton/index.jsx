import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';

export default function CardButton({source, onPress, title, subtitle}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.content}>
                <ImageBackground reziseMode='cover' source={source} style={styles.img}>
                        <View style={styles.darkOverlay}/>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {subtitle}
                        </Text>
                </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        borderRadius: 10,
        marginHorizontal: hp('2%'), 
        marginVertical: hp('1%'),
        overflow: 'hidden'
    },
    img: {
        height: 200, 
        borderRadius: 10,
        justifyContent: 'center',
        padding: hp('2.5%')
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fefefe'
    },
    subtitle: {
        color: '#fefefe',
        opacity: 0.7,
        fontSize: 14
    }

})