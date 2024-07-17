import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';

function Message({ user, text }) {

    return (
        <TouchableOpacity style={ {alignItems: (user == true) ? 'flex-start' : 'flex-end', marginHorizontal: wp('1%'), marginBottom: wp('1%')} }>
            <Text style={ [style.user, {textAlign: (user == true) ? 'left' : 'right',}] }>{(user == true) ? 'Administrador' : 'Tú'}</Text>
            <Shadow
                distance = { 6 }
                startColor ={ '#DBDAD1 ' }
                sides = { { start: false, end: false, top: false, bottom:true } }
                corners = { { topStart: false, topEnd: false, bottomStart: true, bottomEnd: true } }
                radius = { 1 }
            >
                <View style = { [style.container, {backgroundColor: (user == true) ? 'white' : '#CB2139'}] }>
                    <Text
                        style={ [style.text, {textAlign: (user == true) ? 'left' : 'right', color: (user == true) ? 'black' : 'white'}] }
                    >
                        {text} 
                    </Text>
                </View>
            </Shadow>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#B3B3B3',
        borderWidth: 1,
        padding: wp('1.5%'),
    },
    user:{
        color: '#CB2139',
        fontSize: hp('2.4%'),
        fontStyle: 'italic',
        paddingHorizontal: wp('4%'),
    },
    text:{
        fontSize: hp('2.2%'),
        paddingHorizontal: wp('4%'),
        paddingVertical: wp('1%'),
    },
});

export default Message;