import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";



    function HelpDetailsEvent({ }) {

        return (
            <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
                <Navbar
                    back={true}
                    title={'Ayuda Eventos'}
                    loggedIn={ true }
                />
                <ScrollView>
                <View style = { { flex: 1 } }>
                
                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        Consultar un evento
                    </Text>
                </View>

                <Text style={styles.text}>
                    Consultar un evento en cartelera es muy facíl solo debes de seguir estos pasos
                    para poder visualizar las funciones o eventos disponibles en nuestras instalaciones Fundación Teatro Juares. {"\n"}{"\n"}

                    <Text style={styles.indice}>1-</Text> Presiona el apartado de Eventos en la cual podrás visualizar las categorias de eventos disponibles en nuestras instalaciones,
                    si deseas buscar un evento en especifico podrás realizar la consultar de mismo en el campo de busqueda.{"\n"}{"\n"}

                    <Text style={styles.indice}>2-</Text> Encontraras información detallada sobre el evento, podrás visualizar y consultar los eventos disponibles en nuestras instalaciones. {"\n"}{"\n"}

                    <Text style={styles.indice}>3-</Text> Al seleccionar el evento el cual deseas consultar, podrás conocer la sipnosis de la presentación, categoria perteneciente al evento,
                    próxima función y duración del evento.

                </Text>

                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        Comprar un Boleto
                    </Text>
                </View>

                <Text style={styles.text}>
                    <Text style={styles.indice}>1-</Text> Consulta los eventos disponibles, selecciona el evento al cual deseas realizar la compra del los boletos{"\n"}{"\n"}

                    

                    <Text style={styles.indice}>2-</Text> Selecciona la función del evento que desees, se presentara los datos correspondientes al seleccionado. {"\n"}{"\n"}

                    <Text style={styles.indice}>3-</Text> Realiza el pago del boleto.{"\n"}{"\n"}     

                     

                    <Text style={styles.indice}>4-</Text> Deberás esperar que el pago realizado sea verificado por nuestros administradores.
                </Text>

                <View style={styles.parrafo}>
                    <View style={styles.redBlock}></View>
                    <Text style={styles.subtitle}>
                        Información Importante
                    </Text>
                </View>

                <Text style={styles.text}>
                    Si deseas solicitar una cita deberas ingresar a nuestro Sitio Web:{"\n"}{"\n"}
                    <Text style={styles.indice}>http://localhost/teatro_juares/?url=inicio</Text> {"\n"}{"\n"}
                    
                    Con el personal del teatro debes realizar una carta,
                    dirigida al Presidente de la Fundación y a la Gerente de Producción, allí especificarás el motivo por el cual deseas utilizar nuestro espacio, 
                    fecha del evento y la cantidad de asientos a reservar, luego convertirás ese documento en PDF y lo adjuntarás en el formulario que se encuentra abajo, 
                    posteriormente esperarás a que la Fundación del Teatro se comunique contigo para finiquitar los detalles de tu reunión con ellos.{"\n"}{"\n"} 
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
    export default HelpDetailsEvent;