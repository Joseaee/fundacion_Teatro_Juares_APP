import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import CardHorizontal from "../../../../components/CardHorizontal";


import { useNavigation } from "@react-navigation/native";

    function HelpDetailsNoticias({ }) {
        const navigation = useNavigation()
        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    back={true}
                    title={'Servicio Ayuda'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={styles.subtitles}>Noticias</Text>
                </View>
                    
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={styles.textSpan}> Servicio de noticias {"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                         Este apartado tiene como finalidad ofrecer las noticias mas relevantes de la Fundación {"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Se mostrara la sesion de noticias, se presentaran las noticias destacadas y las noticias normales establecedias por la fundación al hacer clic
                        sobre las noticias podrás conocer la informacion suministrada . {"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>2-</Text> Se mostrara presentara de la siguiente manera suministrando la informacion, autor y fecha de la noticia establecida y imagenes.{"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>3-</Text> De esta manera podrás mantenerte informado sobre las noticias mas relevantes de la fundación, dichas noticias son actualizadas semanalmente.{"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            Ahora debes de ingresar la nueva contraseña que deseas, repite nuevamente la contraseña para confirmar que coincidan, presiona el botón de finalizar y listo ya puedes iniciar sesión con tu nueva contraseña.{"\n"}{"\n"}
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
    export default HelpDetailsNoticias;