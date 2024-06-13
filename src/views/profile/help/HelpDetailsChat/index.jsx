import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import CardHorizontal from "../../../../components/CardHorizontal";

import Chat from "../../../../../assets/icons/chat.svg";
import Pencil from "../../../../../assets/icons/pencil.svg";
import Search from "../../../../../assets/icons/search.svg";
import { useNavigation } from "@react-navigation/native";

    function HelpDetailsChat({ }) {
        const navigation = useNavigation()
        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    title={'Servicio ayuda'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={styles.subtitles}>Chat de soporte</Text>
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}> 

                        <Pencil height={wp("5%")} width={hp("5%")} fill="#E31734"/>Un chat de soporte es una tecnología presente en las plataformas de mensajería, a través de la cual los representantes de una empresa ofrecen soporte a sus clientes, 
                        es por ello que la Fundación Teatro Juares pone a su disposicion esta nueva tecnologia para sus clientes. {"\n"}{"\n"}
                        
					    La gran ventaja del soporte en línea es que permite registrar todos los intercambios dialógicos en un material de consulta mucho más rápido que el soporte auditivo.
                        La seguridad que brinda un intercambio de información en un soporte en línea es mucho mayor al que se obtiene en una conversación telefónica.

                        </Text>
                    </View> 
                </View>
                    
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={styles.textSpan}>¿Como consultar el chat de soporte?{"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        <Chat height={wp("5%")} width={hp("5%")} fill="#E31734"/> ¿Tienes dudas y no sabes como consultarlas? El chat de soporte de la Fundacion Teatro Juares te incentiva a 
                        inicar la comunicacion en tiempo real para aclararlas.{"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Se presentara las sesiones de preguntas relacionadas con el chat de soporte por las diferentes sesiones habilidatas. {"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>2-</Text> Al seleccionar una de las sesiones podrás consultar las preguntas frecuentes de la sesión, en caso que dicha pregunta no tenga similitud con la consulta que deseas realizar, 
                            puedes presionar el apartado de habilitar chat de soporte y enviar tu mensaje de consulta.{"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>3-</Text> Una vez enviada tu consulta deberás esperar un lapso de tiempo para que los supervisores respondan a tu solicitud{"\n"}{"\n"}
                        </Text>
                    </View> 
                </View>
                
                </View>
                </ScrollView>
                <BottomNavbar active={ 5 }/>
            </SafeAreaView>
        );
    }

    const styles = StyleSheet.create({
        container: {

            flex: 1,
        },
        title: {
            color: '#E31734',
            fontSize: hp('3%'),
            fontWeight: 'bold'
        },
        text: {
            color: '#2f2f2f',
            fontSize: hp('2%'),
            textAlign: 'justify',
        },
        subtitles: {
            fontSize: hp('2.2%'),
            textAlign: 'center',
            color: '#337AFF',
            fontWeight: 'bold'
        },
        indice: {
            fontSize: hp('1.5.1.5%'),
            textAlign: 'center',
            color: '#337AFF',
            fontWeight: 'bold'
        },
        textSpan: {
            marginStart: 2,
            fontSize: hp('2.2%'),
            textAlign: 'center',
            color: '#E31734',
            fontWeight: 'bold',
        },

        textSpanTwo: {
            marginStart: 2,
            fontSize: hp('1.2.1.2%'),
            textAlign: 'center',
            color: '#657696',
            fontWeight: 'bold',
        },
        cardInfo: {
            marginVertical: 12,
            paddingHorizontal: 8,
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: '#fff',
            backgroundColor: '#fff',
            marginHorizontal: 12,
            borderRadius: 10,
            elevation: 6
        }
    });
    export default HelpDetailsChat;