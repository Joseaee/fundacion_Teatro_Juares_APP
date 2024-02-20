import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'

import Navbar from '../../components/navbar';
import BottomNavbar from '../../components/bottomNavbar';

function Home( {} ) {

    const services = [
        {
            id: "1",
            title: "Obra Teatrales",
            img: require('../../../assets/img/Servicios/obras.jpg'),
            text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.'
        },
        {
            id: "2",
            title: "Conciertos",
            img: require('../../../assets/img/Servicios/conciertos.jpg'),
            text: 'Si buscas un espacio donde tu voz se escuche armoniosa y perfecta nuestro escenario es perfecto para ti, el mismo cuenta con una estructura basada en los Teatros Italianos que tienen la característica de proyectar e intensificar el sonido, además nuestras instalaciones cuenta con un excelente equipo de sonido y los especialistas capacitados para su manejo.'
        },
        {
            id:"3",
            title:"Graduaciones",
            img: require('../../../assets/img/Servicios/graduaciones.jpg'),
            text: 'La Fundación Teatro Juares se caracteriza por ser el lugar ideal para realizar actos de grado en todos los niveles educativos, tanto inicial como media y Universitaria, nuestros clientes tienen a su disposición todo un personal capacitado referente a los protocolos para realizar una graduación, además nuestros asesores también pueden dar orientaciones en ámbitos de decoración, vestimenta y mueblería.'
        },
        {
            id:"4",
            title:"Concursos de Belleza",
            img: require('../../../assets/img/Servicios/belleza.jpg'),
            text: 'Dentro del Teatro también hemos celebrado una gran cantidad de Concursos de Belleza y pasarelas de modelaje, tenemos distintos espacios donde las modelos se pueden tomar sus fotografías, ademas de una gran tarima con luces hermosas para relucir la belleza de todas nuestras misses del estado Lara y el territorio nacional.'
        },
        {
            id:"5",
            title:"Conferencias",
            img: require('../../../assets/img/Servicios/espejos.jpg'),
            text: 'Si necesitas un espacio más pequeño donde hacer una pequeña reunión o una conferencia de Trabajo te recomendamos el Salón de los espejos, un espacio muy agradable que genera un buen ambiente para conversaciones entre socios, trabajadores o familiares; Es un sitio privado y encantador donde tendrán una experiencia muy tranquila y lejos de público, puedes llenar el formulario para reservar esta área.'
        },
    ]

    return(
        
        <SafeAreaView style={ {flex: 1,} }>
            <Navbar
                title={ 'Inicio' }
                loggedIn={ true }
            />
            <View style={ {flex: 1,} }>
                <View style={ {flex: 1, flexDirection: 'row', marginHorizontal: wp('5%')} }>
                    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
                        <Text style={ [styles.text, {fontSize: hp('3%')}] }>Con la <Text style={ styles.title }>mejor experiencia</Text> </Text>
                        <Text style={ [styles.text, {textAlign: 'justify'}] }>
                            Somos una institución que ofrece servicios y productos en el área de entretenimiento al público barquisimetano y larense, siendo reconocidos a nivel nacional e internacional por sus grandes obras de teatro y escenificaciones.
                        </Text>
                    </View>
                    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
                        <Image
                            style = { styles.image }
                            source={ require('../../../assets/img/logo.png') }
                        />
                    </View>
                </View>
                <View style={ {flex: 1,} }>
                    <Swiper 
                        style={ styles.wrapper } 
                        showsButtons={ true }
                        autoplay={ true }
                        showsPagination={ false }
                    >
                        {services.map((item) => {

                            return( 
                                <View 
                                        style={styles.slide}
                                        key={`service-item-${item.id}`}
                                    >
                                        <Image
                                            style = { styles.imageCircle }
                                            source={ item.img }
                                        />
                                        <Text style={ styles.title }>{ item.title }</Text>
                                        <ScrollView  style={ {flex: 1,} }>
                                            <Text style={ styles.text }>
                                                { item.text }
                                            </Text>
                                        </ScrollView>
                                </View>
                            )
                        })}
                    </Swiper>
                </View>
            </View>
            <BottomNavbar
                title={ 'Inicio' }
                loggedIn={ true }
                active={ 1 }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%')
    },
    image: {
        width: wp('30%'),
        height: hp('15%'),
    },
    imageCircle:{
        backgroundColor: '#0D0060',
        borderRadius: 9999,
        alignItems: 'center',
        width: wp('45%'),
        height: hp('20%'),
        justifyContent: 'center',
        borderWidth: 10, 
        borderColor:'#c7c7c7',
    },
    title: {
        color: '#E31734',
        fontSize: hp('3%'),
        fontWeight: 'bold'
    },
    text: {
        color: '#2f2f2f',
        fontSize: hp('1.8%'),
        textAlign: 'justify',
        fontWeight: 'bold',
    }
})

export default Home;