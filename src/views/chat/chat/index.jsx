import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Navbar from '../../../components/navbar';
import BottomNavbar from '../../../components/bottomNavbar';

import Message from '../../../components/message';
import ButtonTab from '../../../components/ButtonTab';
import { useState } from 'react';
import Search from '../../../../assets/icons/search.svg'

function Chat({ navigation }) {

    const secciones = [
        {
          id: '1',
          nombre: 'Citas',
        },
        {
          id: '2',
          nombre: 'Compras'
        },
        {
          id: '3',
          nombre: 'Clientes'
        },
        {
          id: '4',
          nombre: 'Eventos'
        },
      ]
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{user: true, text: '¡Hola! Por favor selecciona la sección en la que necesitas ayuda.'}]);


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
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {secciones.map(item => 
                                <ButtonTab rowSeparation={8} key={item.id}>{item.nombre}
                                </ButtonTab>
                                )}
                            </ScrollView>
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
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
    }
});


export default Chat;