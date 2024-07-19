import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";
import StyleText from "../../../../components/StyleText";

import User from "../../../../../assets/icons/user.svg";
import Lock from "../../../../../assets/icons/lock.svg";
import { useNavigation } from "@react-navigation/native";

    function HelpDetailsUser({ }) {
        const navigation = useNavigation()
        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    back={true}
                    title={'Ayuda Usuario'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>
                
                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View>
                        <Text style={styles.subtitle}>
                            Inicio de sesion y contraseña
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Si  no conoces tu contraseña actual, puedes cambiarla. Cuando crees una contraseña nueva, recuerda lo siguiente: {"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> La contraseña debe resultar fácil de recordar.{"\n"} {"\n"}

                        <Text style={styles.indice}>2-</Text> Si tienes dificultades para cambiar la contraseña, descubre cómo obtener ayuda con el inicio de sesión y la contraseña.
                    </Text>

                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View>
                        <Text style={styles.subtitle}>
                            Cambiar contraseña
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Cambiar la contraseña es muy facíl solo debe de seguir los siguientes pasos: {"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Haz clic en el apartado Recuperar Contraseña en el cual se muestra en el formulario de inicio de sesión.{"\n"} {"\n"}

                        <Text style={styles.indice}>2-</Text> Se presentara un formulario en el cual debe ingresar su correo electrónico con el cual se registro, haz clic en siguiente.{"\n"}{"\n"}

                        <Text style={styles.indice}>3-</Text> Al correo electrónico llegara un codigo el cual debes de ingresar en este apartado; Visualiza la imagen presentada a continuación.{"\n"}{"\n"}

                        

                        Ahora debes de ingresar la nueva contraseña que deseas, repite nuevamente la contraseña para confirmar que coincidan, presiona el botón de finalizar y listo ya puedes iniciar sesión con tu nueva contraseña.
                    </Text>

                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View>
                        <Text style={styles.subtitle}>
                            Cambiar tu contraseña
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        Para cambiar tu contraseña de cuenta Fundación Teatro Juares si ya iniciaste sesión:{"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Haz clic en tu foto de perfil en la parte superior derecha y, luego, haz clic en Mi perfil.{"\n"} {"\n"}

                        

                        <Text style={styles.indice}>2-</Text> Presiona el apartado de Editar Datos.{"\n"}{"\n"}

                        <Text style={styles.indice}>3-</Text> Se mostrará el siguiente apartado con tu información personal.{"\n"}{"\n"}

                        

                        <Text style={styles.indice}>4-</Text> Escribe la nueva contraseña y confirma la misma.{"\n"}{"\n"}

                        <Text style={styles.indice}>5-</Text> Haz clic en continuar.{"\n"}{"\n"}

                        Si iniciaste sesión, pero olvidaste la contraseña, sigue los pasos indicados en Cambia tu contraseña. 
                       Luego, haz clic en <Text style={styles.link}>¿Olvidaste tu contraseña?</Text> y sigue las instrucciones para restablecerla. 
                       Recuerda que necesitarás acceder al correo electrónico asociado a tu cuenta.{"\n"}{"\n"}
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
export default HelpDetailsUser;