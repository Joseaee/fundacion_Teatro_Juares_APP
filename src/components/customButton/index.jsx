import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'

function CustomButton( {screen, text, params, onPress} ) {
    
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={ styles.button }
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
        height: hp('6%'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text:{
        color: '#fdfdfd',
        fontWeight: '700',
        fontSize: hp('2.5%')
    },
});

export default CustomButton;