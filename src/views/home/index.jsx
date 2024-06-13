import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/navbar';
import BottomNavbar from '../../components/bottomNavbar';
import Masks from '../../../assets/icons/masks.svg';
import Star from '../../../assets/icons/star.svg';
import Eye from '../../../assets/icons/eye.svg';
import CardButton from '../../components/CardButton';

function Home( {} ) {

    const servicios = [
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
        
        <SafeAreaView style={ {flex: 1, backgroundColor: "#fafafa"} }>
            <Navbar
                title={ 'Teatro Juares' }
                loggedIn={ true }
            />
            <ScrollView>
            <View style={ {flex: 1,} }>
                <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 8} }>
                    <Image style = { styles.image }source={ require('../../../assets/img/logo.png') }/>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={styles.subtitles}>Conoce un poco sobre la </Text>
                    <Text style={styles.textSpan}>Fundación</Text>
                </View>
                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Masks height={wp("5%")} width={hp("5%")} fill="#E31734"/> 
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sobre Nosotros:</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                            Somos una institución que ofrece servicios y productos en el área de entretenimiento al público barquisimetano y larense, siendo reconocidos a nivel nacional e internacional por sus grandes obras de teatro y escenificaciones.
                        </Text>
                    </View> 
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Star height={wp("5%")} width={hp("5%")} fill="#EB8D0B"/> 
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Misión</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                            Promover, difundir y proyectar las acciones artístico cultural de la Fundación Teatro Juares, mediante una política de características socialistas, con sostenibilidad en el tiempo, que logre dimensionar la máxima expresión de las obras escénicas que presente y así elevar el potencial artístico.
                        </Text>
                    </View> 
                </View>

                <View style={styles.cardInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Eye height={wp("5%")} width={hp("5%")} fill="#2B9F3B"/> 
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Visión</Text>
                    </View>
                    <View style={{paddingHorizontal: 12}}>
                        <Text style={{textAlign: 'justify'}}>
                        Contamos con una política de sala abierta, de amplio alcance, que atiende eficazmente las necesidades de promoción, difusión y proyección de la obra escénica que exhiba. Basándose en los valores socialistas de la inclusión, la cooperación y la participación.
                        </Text>
                    </View> 
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 4, marginBottom: 8}}>
                    <Text style={styles.subtitles}>Servicios que ofrece la </Text>
                    <Text style={styles.textSpan}>Fundación</Text>
                </View>

                <View style={ {flex: 1,} }>
                    <Carousel data={servicios} renderItem={(item)=>{
                        return  (
                            <CardButton key={item.id} title={item.title} source={item.img} />
                        )
                    }}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={styles.subtitles}>¿Necesitas ayuda?</Text>
                    <Text style={styles.textSpan}>Contactanos</Text>
                </View>

                
            </View>
            </ScrollView>
            <BottomNavbar
                title={ 'Inicio' }
                loggedIn={ true }
                active={ 1 }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: hp('45%'),
        marginVertical: 14
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%')
    },
    image: {
        width: 120,
        height: 140,
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
        fontSize: hp('2%'),
        textAlign: 'justify',
    },
    subtitles: {
        fontSize: hp('2.2%'),
        textAlign: 'center',
        color: '#2f2f2f',
        fontWeight: 'bold'
    },
    textSpan: {
        marginStart: 2,
        fontSize: hp('2.2%'),
        textAlign: 'center',
        color: '#E31734',
        fontWeight: 'bold'
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
})

export default Home;