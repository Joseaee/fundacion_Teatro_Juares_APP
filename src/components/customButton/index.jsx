import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'

function CustomButton( {screen, text, params, onPress, width, height, color = '#CB2139', textColor = '#fdfdfd', loading = false} ) {
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={ [styles.button, {backgroundColor: color}, (width) ? {width} : {flex:1}, (height) ? {height} : {height: hp('6%')}] }
            onClick = { (e) => {e.stopPropagation(); onPress ? onPress() : navigation.navigate(screen, params);} }
            onPress = { (e) => {e.stopPropagation(); onPress ? onPress() : navigation.navigate(screen, params);} }
            disabled={loading}
        >
            {loading ? <ActivityIndicator size="large" color="#eee" /> :<Text style={ [styles.text, {color: textColor}] }>{ text }</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 6
    },
    text:{
        fontWeight: '700',
        fontSize: 18
    },
});

export default CustomButton;