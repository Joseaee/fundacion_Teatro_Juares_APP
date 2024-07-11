import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';

export default function CardButton({source, onPress, title, subtitle, alignContent = 'start', width, titleSize = 'normal'}){
    const align = (styles[alignContent]) ? styles[alignContent] : styles['start']
    const size = (styles[titleSize]) ? styles[titleSize] : styles['normal']
    return(
        <TouchableOpacity onPress={onPress} style={[styles.content, (width) ? {width} : null]}>
                <ImageBackground reziseMode='cover' source={source} style={[styles.img, align]}>
                        <View style={styles.darkOverlay}/>
                        <Text style={[styles.title, size]}>
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
        overflow: 'hidden'
    },
    start: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    end: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    small: {
        fontSize: 14
    },
    normal: {
        fontSize: 16
    },
    medium: {
        fontSize: 18
    },
    big: {
        fontSize: 20
    },
    img: {
        height: 200, 
        borderRadius: 10,
        padding: hp('2.5%')
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)'
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