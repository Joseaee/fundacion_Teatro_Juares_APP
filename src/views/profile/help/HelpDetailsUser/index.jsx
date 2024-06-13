import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import CardHorizontal from "../../../../components/CardHorizontal";

import Gear from "../../../../../assets/icons/gear.svg";
import Lock from "../../../../../assets/icons/lock.svg";
import { useNavigation } from "@react-navigation/native";

    function HelpDetailsUser({ }) {
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
                    <Text style={styles.subtitles}>Inicio de sesion y contraseña</Text>
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        Si  no conoces tu contraseña actual, puedes cambiarla. Cuando crees una contraseña nueva, recuerda lo siguiente: {"\n"}{"\n"}

                        <Lock height={wp("5%")} width={hp("5%")} fill="#E31734"/> La contraseña debe resultar fácil de recordar.{"\n"} {"\n"}

                        Si tienes dificultades para cambiar la contraseña, descubre cómo obtener ayuda con el inicio de sesión y la contraseña.
                        </Text>
                    </View> 
                </View>
                    
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={styles.textSpan}>Cambiar contraseña desde inicio de sesión {"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        <Gear height={wp("5%")} width={hp("5%")} fill="#E31734"/> Cambiar la contraseña es muy facíl solo debe de seguir los siguientes pasos: {"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Haz clic en el apartado Recuperar Contraseña en el cual se muestra en el formulario de inicio de sesión. {"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>2-</Text> Se presentara un formulario en el cual debe ingresar su correo electrónico con el cual se registro, haz clic en siguiente.  {"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            <Text style={styles.indice}>3-</Text> Al correo electrónico llegara un codigo el cual debes de ingresar en este apartado; Visualiza la imagen presentada a continuación.{"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                            Ahora debes de ingresar la nueva contraseña que deseas, repite nuevamente la contraseña para confirmar que coincidan, presiona el botón de finalizar y listo ya puedes iniciar sesión con tu nueva contraseña.{"\n"}{"\n"}
                        </Text>
                    </View> 
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textSpan}>Cambiar tu contraseña desde perfil {"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        <Gear height={wp("5%")} width={hp("5%")} fill="#E31734"/> Para cambiar tu contraseña de cuenta Fundación Teatro Juares si ya iniciaste sesión: {"\n"}{"\n"}
                        <Text style={styles.indice}>1-</Text> Haz clic en tu foto de perfil en la parte superior derecha y, luego, haz clic en Mi perfil. {"\n"}{"\n"}

                        AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                        <Text style={styles.indice}>2-</Text> Presiona el apartado de Editar Datos. {"\n"}{"\n"}

                        <Text style={styles.indice}>3-</Text> Se mostrará el siguiente apartado con tu información personal. {"\n"}{"\n"}     

                        AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"} 

                        <Text style={styles.indice}>4-</Text> Escribe la nueva contraseña y confirma la misma.{"\n"}{"\n"} 

                        <Text style={styles.indice}>5-</Text> Haz clic en continuar.{"\n"}{"\n"} 

                        <Text style={styles.textSpanTwo}>Si iniciaste sesión, pero olvidaste la contraseña, sigue los pasos indicados en Cambia tu contraseña. 
                       Luego, haz clic en <Text style={styles.indice}>¿Olvidaste tu contraseña?</Text> y sigue las instrucciones para restablecerla. 
                       Recuerda que necesitarás acceder al correo electrónico asociado a tu cuenta.</Text>
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
    export default HelpDetailsUser;