import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import Chat from "../../../../../assets/icons/chat.svg";
import Pencil from "../../../../../assets/icons/pencil.svg";
import { useNavigation } from "@react-navigation/native";

    function HelpDetailsChat({ }) {
        const navigation = useNavigation()
        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    back={true}
                    title={'Ayuda Soporte'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>

                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        ¿Qué es el chat de soporte?
                    </Text>
                </View>

                <Text style={styles.text}>
                    Un chat de soporte es una tecnología presente en las plataformas de mensajería, a través de la cual los representantes de una empresa ofrecen soporte a sus clientes, es por ello que la Fundación Teatro Juares pone a su disposicion esta nueva tecnologia para sus clientes. {"\n"}{"\n"}
                        
					La gran ventaja del soporte en línea es que permite registrar todos los intercambios dialógicos en un material de consulta mucho más rápido que el soporte auditivo.
                    La seguridad que brinda un intercambio de información en un soporte en línea es mucho mayor al que se obtiene en una conversación telefónica.
                </Text>

                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        ¿Como consultarlo?
                    </Text>
                </View>

                <Text style={styles.text}>
                    <Text style={styles.indice}>1-</Text> Se presentara las sesiones de preguntas relacionadas con el chat de soporte por las diferentes sesiones habilidatas. {"\n"}{"\n"}

                    AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                    <Text style={styles.indice}>2-</Text> Al seleccionar una de las sesiones podrás consultar las preguntas frecuentes de la sesión, en caso que dicha pregunta no tenga similitud con la consulta que deseas realizar, 
                    puedes presionar el apartado de habilitar chat de soporte y enviar tu mensaje de consulta.{"\n"}{"\n"}

                    AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                    <Text style={styles.indice}>3-</Text> Una vez enviada tu consulta deberás esperar un lapso de tiempo para que los supervisores respondan a tu solicitud{"\n"}{"\n"}
                </Text>
                
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
        parrafo: {
            display: 'flex',
            width: wp('100%'),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#222',
            textAlign: 'start',
            marginHorizontal: hp('2%'),
            marginVertical: hp('3%'),
            textAlign: 'justify'
        },
        subtitle: {
            color: '#383838',
            fontSize: 18,
            letterSpacing: 1,
        },
        redBlock: {
            backgroundColor: '#E31734',
            width: 6,
            height: 20,
            marginEnd: 6,
        },
        text: {
            fontSize: 16,
            textAlign: 'justify',
            color: '#585858',
            marginHorizontal: 14,
            letterSpacing: .4
        },
        indice: {
            fontSize: 14,
            textAlign: 'center',
            color: '#E31734',
        },
        link: {
            fontSize: 14,
            textAlign: 'center',
            color: 'steelblue',
        }
    });
    export default HelpDetailsChat;