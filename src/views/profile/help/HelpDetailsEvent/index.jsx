import { View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Navbar from "../../../../components/navbar";
import BottomNavbar from "../../../../components/bottomNavbar";

import CardHorizontal from "../../../../components/CardHorizontal";

import Search from "../../../../../assets/icons/search.svg";
import Ticket from "../../../../../assets/icons/ticket.svg";
import Bell from "../../../../../assets/icons/bell.svg";
import { useNavigation } from "@react-navigation/native";

    function HelpDetailsEvent({ }) {
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
                    <Text style={styles.subtitles}>Eventos</Text>
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>

                        <Search height={wp("5%")} width={hp("5%")} fill="#E31734"/>Consultar un evento en cartelera es muy facíl solo debes de seguir estos pasos
                        para poder visualizar las funciones o eventos disponibles en nuestras instalaciones Fundación Teatro Juares.

                        </Text>
                    </View> 
                </View>
                    
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={styles.textSpan}>¿Como consultar los evetos disponiles?{"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        Consultar un evento en cartelera es muy facíl solo debes de seguir estos pasos
                        para poder visualizar las funciones o eventos disponibles en nuestras instalaciones: {"\n"}{"\n"}

                        <Text style={styles.indice}>1-</Text> Presiona el apartado de Eventos en la cual podrás visualizar las categorias de eventos disponibles en nuestras instalaciones,
                        si deseas buscar un evento en especifico podrás realizar la consultar de mismo en el campo de busqueda.{"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"} 

                            <Text style={styles.indice}>2-</Text>Encontraras información detallada sobre el evento, podrás visualizar y consultar los eventos disponibles en nuestras instalaciones. 

                            <Text style={styles.indice}>3-</Text>Al seleccionar el evento el cual deseas consultar, podrás conocer la sipnosis de la presentación, categoria perteneciente al evento,
                            próxima función y duración del evento. {"\n"}{"\n"}

                            AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}
                        </Text>
                    </View> 
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textSpan}> <Ticket height={wp("5%")} width={hp("5%")} fill="#E31734"/>Comprar un boleto {"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>

                        <Text style={styles.indice}>1-</Text> Consulta los eventos disponibles, selecciona el evento al cual deseas realizar la compra del los boletos{"\n"}{"\n"}

                        AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"}

                        <Text style={styles.indice}>2-</Text> Selecciona la función del evento que desees, se presentara los datos correspondientes al seleccionado. {"\n"}{"\n"}

                        <Text style={styles.indice}>3-</Text> Realiza el pago del boleto.{"\n"}{"\n"}     

                        AQUI VA UNA IMAGEN GISELITA {"\n"}{"\n"} 

                        <Text style={styles.indice}>4-</Text> Deberás esperar que el pago realizado sea verificado por nuestros administradores.{"\n"}{"\n"} 

                        </Text>
                    </View> 
                </View>
                
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textSpan}> <Bell height={wp("5%")} width={hp("5%")} fill="#E31734"/>Informacion importante{"\n"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}> 
                        Si deseas solicitar una cita deberas ingresar a nuestro Sitio Web <Text style={styles.indice}>http://localhost/teatro_juares/?url=inicio</Text> con el personal del teatro debes realizar una carta,
                        dirigida al Presidente Ramón Suárez y a la Gerente de Producción, allí especificarás el motivo por el cual deseas utilizar nuestro espacio, 
                        fecha del evento y la cantidad de asientos a reservar, luego convertirás ese documento en PDF y lo adjuntarás en el formulario que se encuentra abajo, 
                        posteriormente esperarás a que la Fundación del Teatro se comunique contigo para finiquitar los detalles de tu reunión con ellos.{"\n"}{"\n"} 

                        También es importante tener en cuenta que los horarios de atención en el Teatro son de 9:00 AM a 12:00 PM y de 1:00 PM a 4:00 PM.

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
    export default HelpDetailsEvent;