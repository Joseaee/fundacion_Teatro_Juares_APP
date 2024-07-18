import { View, StyleSheet, ScrollView, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Navbar from '../../../components/navbar';
import BottomNavbar from '../../../components/bottomNavbar';

import Message from '../../../components/message';
import ButtonTab from '../../../components/ButtonTab';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/constants';
import { useStorage } from '../../../hooks/localStorage';

function Chat({ navigation }) {
    const [preguntas, setPreguntas] = useState([])

    const secciones = [
        {
          id: '1',
          nombre: 'Citas',
        },
        {
          id: '6',
          nombre: 'Compras'
        },
        {
          id: '11',
          nombre: 'Clientes'
        },
        {
          id: '2',
          nombre: 'Eventos'
        },
      ]

    const [selectedSection, setSelectedSection] = useState(null)
    const [initSelector, setInitSelector] = useState(true);
    const [loading, setLoading] = useState(false);

    const [goBack, setGoBack] = useState(false);

    const [messages, setMessages] = useState([{ user: true, text: '¡Hola! Por favor selecciona la sección en la que necesitas ayuda.' }]);

    const RenderGoBack = ()=>{

        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: wp('90%')}}>
                <ButtonTab rowSeparation={8} key={'goBack-Si'} onPress={()=>{setInitSelector(true); setGoBack(false); ; setMessages([...messages, {user: true,  text: 'Selecciona la sección de tu duda'}])}}>
                    Si
                </ButtonTab> 
                <ButtonTab rowSeparation={8} key={'goBack-No'} onPress={()=>{setGoBack(false); setMessages([...messages, {user: true, text: 'Selecciona la pregunta que más se ajuste a tu duda'}])}}>
                    No
                </ButtonTab>     
            </View>
        )
    }

    const handleSelect = async (item)=>{

        const{idPregunta, pregunta} = item
        const mensaje = [
            ...messages,
            {user: false,
             text: pregunta
            }
        ]

        const token = await getItem('userToken');
            setLoading(true)
            try {
                const response = await axios({
                    method: 'GET',
                    url: API_URL,
                    responseType: 'json',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        url: 'app',
                        type: 'chat',
                        preguntas: true,
                        id: idPregunta
                    }
                    })
                    const {data} = response.data

                    mensaje.push(
                        {
                            user: true,
                            text: data[0].respuesta
                        },
                        {
                            user: true,
                            text: '¿Necesitas ayuda en otra sección?'
                        }
                    )

                    setGoBack(true)

                    setMessages(mensaje)
                    
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false)
            } 
    }

    const {getItem} = useStorage()

    useEffect(() => {
        const cargarPreguntas = async ()=>{

            const token = await getItem('userToken');
            setLoading(true)
            try {
                const response = await axios({
                    method: 'GET',
                    url: API_URL,
                    responseType: 'json',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        url: 'app',
                        type: 'chat',
                        preguntas: true
                    }
                    })
                    const {data} = response.data
                    setPreguntas(data)
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false)
            }   
        }

        cargarPreguntas()
    }, []);

    const handleNavigateScreens = (screen) => {
        navigation.navigate(screen);
    };

    const saveMessages = () => {

        if (message == '') return null

        let mensajes = [];

        messages.map((message) => (

            mensajes.push({ user: message.user, text: message.text })
        ))

        mensajes.push({ user: false, text: message })

        setMessages(mensajes)
        setMessage('');
    }

    const renderMessage = () => {

        return messages.map((message) => (
            <Message
                key={`message-id-${messages.length * ((Math.random() * 50) + 1)}`}
                user={message.user}
                text={message.text}
            />
        ));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Navbar
                back={true}
                title={'Soporte'}
                loggedIn={true}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.chatContainer}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: hp('3%') }}>
                        <KeyboardAwareScrollView
                            behavior={Platform.OS === "ios" ? "padding" : undefined}
                            keyboardVerticalOffset={60}
                        >
                            {renderMessage()}
                        </KeyboardAwareScrollView>
                        <View style={styles.inputContainer}>
                            {loading ? <View style={{width: wp('90%'), justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" color="#E31734" />
                            </View> :
                            
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    (initSelector) 
                                        ? 
                                        secciones.map(item => {

                                            if (!preguntas.some(pregunta=> pregunta.idModulo == item.id)) {
                                                return null 
                                            }
                                                return (
                                                <ButtonTab onPress={()=>{
                                                    setInitSelector(false)
                                                    setSelectedSection(item.id)
                                                    setMessages([...messages, {user: true, text: 'Usted ha seleccionado el módulo de '+item.nombre+'. Selecciona tu pregunta'}])
                                                }} rowSeparation={8} key={item.id}>{item.nombre}
                                                </ButtonTab>)
                                            }
                                            )
                                        :   
                                            goBack ? <RenderGoBack></RenderGoBack> :
                                            preguntas.map(item => {

                                                if (item.idModulo != selectedSection) {
                                                    return null
                                                }
                                                    return(
                                                        <ButtonTab onPress={()=>{handleSelect(item)}} rowSeparation={8} key={item.idPregunta}>{item.pregunta}
                                                        </ButtonTab>
                                                    )
                                                }
                                            )
                                    
                                    }
                            </ScrollView>
                            }
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0, justifyContent: 'flex-end' }}>
                    <BottomNavbar
                        active={2}
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