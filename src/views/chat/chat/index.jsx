import { View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Navbar from '../../../components/navbar';
import BottomNavbar from '../../../components/bottomNavbar';

import Message from '../../../components/message';
import Send from '../../../../assets/icons/send.svg'
import { useState } from 'react';

function Chat({ navigation }) {
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{user: true, text: 'Dígame en que puedo ayudarle'}]);


    const handleNavigateScreens = (screen) =>
    {
        navigation.navigate(screen);
    };

    const saveMessages = () => {

        if(message == '') return null
        
        let mensajes = [];

        messages.map((message) => (

            mensajes.push({user: message.user, text: message.text})
        ))

        mensajes.push({user: false, text: message})

        setMessages(mensajes)
        setMessage('');
    }

    const renderMessage = () => {

        return messages.map((message) => (
            <Message
                key={`message-id-${messages.length * ((Math.random() * 50) + 1)}`}
                user = {message.user}
                text = {message.text}
            />
        ));
    }
 
    return (
        <SafeAreaView style = { styles.container }>
            <Navbar
                back={true}
                title={'Soporte'}
                loggedIn={ true }
            />
            <View style = { { flex: 1 } }>
                <View style = { styles.chatContainer }>      
                    <View style = { { flex: 1, justifyContent: 'flex-end', marginTop: hp('3%')} }>
                        <KeyboardAwareScrollView
                            behavior={ Platform.OS === "ios" ? "padding" : undefined }
                            keyboardVerticalOffset={ 60 }
                        >  
                            {renderMessage()}
                        </KeyboardAwareScrollView>
                        <View style = { styles.inputContainer }>
                            <TextInput 
                                style={ styles.input }
                                placeholder='Escribir Mensaje'
                                placeholderTextColor='#656565'
                                onChangeText = { (text) => {setMessage(text)} }
                                value={message}
                            />
                            <TouchableOpacity
                                onClick = { (e) => {e.stopPropagation(); saveMessages(); } }
                                onPress = { (e) => {e.stopPropagation(); saveMessages(); } }
                            >
                                <Send
                                    height = { wp('10%') } 
                                    width = { hp('4%') } 
                                    stroke={'#CB2139'}
                                    style={styles.send}
                                />
                            </TouchableOpacity>   
                        </View>
                    </View>
                </View>
                <View style = { { flex: 0, justifyContent: 'flex-end'} }>
                    <BottomNavbar
                        active={ 2 }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    chatContainer: {

        flex: 2,
        marginHorizontal: wp('5%'),
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#CB2139',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
        marginHorizontal: hp('2%'),
        paddingRight: wp('4%'),
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        padding: '4%',
        fontWeight: '200',
        fontSize: hp('2%'),
    },
    send: {
        transform: [{rotate: '45deg'}]
    }
});


export default Chat;