import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import { useNavigation } from "@react-navigation/native";

    function HelpDetailsNoticias({ }) {
        const navigation = useNavigation()
        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    back={true}
                    title={'Ayuda Noticias'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>

                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        Servicio de Noticias
                    </Text>
                </View>

                <Text style={styles.text}>
                    Este apartado tiene como finalidad ofrecer las noticias mas relevantes de la Fundación {"\n"}{"\n"}

                    <Text style={styles.indice}>1-</Text> Se mostrara la sesion de noticias, se presentaran las noticias destacadas y las noticias normales establecedias por la fundación al hacer clic
                    sobre las noticias podrás conocer la informacion suministrada . {"\n"}{"\n"}

                    <Text style={styles.indice}>2-</Text> Se mostrara presentara de la siguiente manera suministrando la informacion, autor y fecha de la noticia establecida y imagenes.{"\n"}{"\n"}

                    <Text style={styles.indice}>3-</Text> De esta manera podrás mantenerte informado sobre las noticias mas relevantes de la fundación, dichas noticias son actualizadas semanalmente.{"\n"}{"\n"}

                    Ahora debes de ingresar la nueva contraseña que deseas, repite nuevamente la contraseña para confirmar que coincidan, presiona el botón de finalizar y listo ya puedes iniciar sesión con tu nueva contraseña.{"\n"}{"\n"}
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
    export default HelpDetailsNoticias;