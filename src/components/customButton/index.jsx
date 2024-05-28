import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'

function CustomButton( {screen, text, params, onPress, width, height} ) {
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={ [styles.button, (width) ? {width} : {flex:1}, (height) ? {height} : {height: hp('6%')}] }
            onClick = { (e) => {e.stopPropagation(); onPress ? onPress() : navigation.navigate(screen, params);} }
            onPress = { (e) => {e.stopPropagation(); onPress ? onPress() : navigation.navigate(screen, params);} }
        >
            <Text style={ styles.text }>{ text }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#CB2139',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text:{
        color: '#fdfdfd',
        fontWeight: '700',
        fontSize: 18
    },
});

export default CustomButton;