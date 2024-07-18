import {View, Text, StyleSheet, TextInput, ScrollView, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useAppSelector} from '../../../hooks/store';
import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import Search from '../../../../assets/icons/search.svg';
import Carousel from '../../../components/Carousel';
import CardButton from '../../../components/CardButton';
import StyleText from '../../../components/StyleText';
import { useNavigation } from '@react-navigation/native';
import { useNoticiasActions } from '../../../hooks/useNoticiasActions';
import { getNoticias } from "../../../store/selectors";

const noticiasRelevantes = [
    {id: '1', banner: require("../../../../assets/img/Servicios/graduaciones.jpg"), title: 'Las mejores graduaciones', text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', images: [require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg")]},

    {id: '2', banner: require("../../../../assets/img/Servicios/conciertos.jpg"), title: 'Conciertos geniales' , text: 'Si buscas un espacio donde tu voz se escuche armoniosa y perfecta nuestro escenario es perfecto para ti, el mismo cuenta con una estructura basada en los Teatros Italianos que tienen la característica de proyectar e intensificar el sonido, además nuestras instalaciones cuenta con un excelente equipo de sonido y los especialistas capacitados para su manejo.', images: [require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg"), require("../../../../assets/img/Servicios/conciertos.jpg")]}
]

const otrasNoticias = [
    {id: '1', banner: require("../../../../assets/img/Servicios/obras.jpg"), title: 'Obras de teatro', text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', images: [require("../../../../assets/img/Servicios/obras.jpg"), require("../../../../assets/img/Servicios/obras.jpg"), require("../../../../assets/img/Servicios/obras.jpg"), require("../../../../assets/img/Servicios/obras.jpg")]},

    {id: '2', banner: require("../../../../assets/img/Servicios/belleza.jpg"), title: 'Concursos de belleza', text: 'Desde obras de ballet, danza y urbano hasta circo, comedia y obras infantiles hemos tenido el honor de organizar, al tener un espacio amplio y una gran capacidad, nuestras instalaciones son perfectas para llevar a cabo tu producción, contamos con un excelente equipo de área técnica que no te va a fallar al montar la obra que tú sueñas.', images: [require("../../../../assets/img/Servicios/belleza.jpg"), require("../../../../assets/img/Servicios/belleza.jpg"), require("../../../../assets/img/Servicios/belleza.jpg"), require("../../../../assets/img/Servicios/belleza.jpg")]},
]

export default function Noticias(){
    const navigation = useNavigation();

    const noticias = useAppSelector((state)=> getNoticias(state))
    const filtroNombreNoticia = useAppSelector((state)=> state.noticias.filtros.title)
    const {filterNoticia} = useNoticiasActions()

    const filterNoticias = (noticias)=>{
        return noticias.filter(noticia=>{
          return (filtroNombreNoticia === '' || noticia.title.startsWith(filtroNombreNoticia))
        })
    }

    const filteredNoticias = filterNoticias(noticias)

    return (
        <SafeAreaView style={{flex: 1}}>
            <Banner image={require('.:/../../assets/img/banner-cartelera.jpg')} goBack={true}>
                <Text style={styles.title}>Foro de Noticias</Text>
            </Banner>

            <ScrollView style={{flex:1}}>
                <View style={styles.input}>
                    <Search height={wp('5%')} width={hp('5%')} fill='gray' />
                    <TextInput placeholder='Buscar Noticia...' style={{flex: 1}} onChangeText={(text)=> filterNoticia(text)} value={filterNoticia}/>
                </View>

                {(filteredNoticias.length === 0) ? <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}><StyleText tag="noticias" >No se encontraron</StyleText></View> : <FlatList style={{width: wp('100%')}} data={filteredNoticias} renderItem={CardButton} keyExtractor={(item)=> item.id}/>}

                <View style={{flex:1}}>
                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Noticias Relevantes</Text>
                    </View>

                    {/* <View style={{marginHorizontal: 14}}>
                        <Carousel data={noticiasRelevantes} loop={true} renderItem={(item)=> {
                            return (
                                <CardButton key={item.id} title={item.title} source={item.banner} alignContent='bottom' onPress={()=> navigation.navigate('DetalleNoticia', {
                                    ...item
                                })}/>
                            )
                        }}/>
                    </View> */}
                    
                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Otras Noticias</Text>
                    </View>

                    {/* <View style={{flexDirection: 'row', gap: 5, flexWrap: 'wrap', marginHorizontal: 14, marginBottom: 20, justifyContent: 'center'}}>
                        {otrasNoticias.map((item, index) => {
                            return (
                                <CardButton key={index} title={item.title} source={item.banner} alignContent='bottom' width={160} titleSize='small' onPress={()=> navigation.navigate('DetalleNoticia', {
                                    ...item
                                })}/>
                            )
                        })}
                    </View> */}

                </View>

            </ScrollView>
            <BottomNavbar
                title={ 'ForoNoticias' }
                loggedIn={ true }
                active={ 4 }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        padding: hp('.8%'),
        borderWidth: 2,
        borderColor: '#bbb',
        borderRadius: 20,
        marginHorizontal: hp('2%'),
        marginVertical: hp('2%')
    },
    parrafo: {
        display: 'flex',
        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'flex-start',
        color: '#222',
        textAlign: 'start',
        marginHorizontal: hp('2%'),
        marginVertical: hp('2%'),
    },
    text: {
        color: '#383838',
        fontSize: 16,
        letterSpacing: 1,
    },
    redBlock: {
        backgroundColor: '#E31734',
        width: 6,
        height: 20,
        marginEnd: 6,
    },
    contenedor: {
        borderRadius: 10,
        marginHorizontal: hp('2%'), 
        marginVertical: hp('1%'),
        overflow: 'hidden'
    },
});