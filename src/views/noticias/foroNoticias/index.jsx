import { useNavigation } from '@react-navigation/native'
import {View, Text, StyleSheet, FlatList, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import Search from '../../../../assets/icons/search.svg';
import Carousel from '../../../components/Carousel';
import CardButton from '../../../components/CardButton';

const noticiasRelevantes = [
    {id: '1', img: require("../../../../assets/img/Noticias/Peka.jpg"), title: 'Pekka Mata a Todos'},
    {id: '2', img: require("../../../../assets/img/Noticias/Peka.jpg"), title: 'Pekka Mata a Todos'}
]

export default function Noticias(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <Banner image={require('.:/../../assets/img/banner-cartelera.jpg')} goBack={true}>
                <Text style={styles.title}>Foro de Noticias</Text>
            </Banner>

            <ScrollView style={{flex:1}}>
                <View style={styles.input}>
                    <Search height={wp('5%')} width={hp('5%')} fill='gray' />
                    <TextInput placeholder='Buscar Noticia...' style={{flex: 1}}/>
                </View>

                <View style={{flex:1}}>
                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Noticias Relevantes</Text>
                    </View>

                <Carousel data={noticiasRelevantes} renderItem={(item)=> {
                    return (
                        <CardButton key={item.id} title={item.title} source={item.img} />
                    )
                }}/>
                    

                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Más Noticias</Text>
                    </View>

                    <View style={{flexDirection: 'row', gap: 5, flexWrap: 'wrap', marginHorizontal: 14, marginBottom: 20, justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.noticia}>
                            <ImageBackground reziseMode='cover' source={require('../../../../assets/img/Servicios/graduaciones.jpg')} style={styles.img}>
                                <View style={styles.darkOverlay}/>
                                <Text style={styles.titleNoticia}>
                                    Noticia
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.noticia}>
                            <ImageBackground reziseMode='cover' source={require('../../../../assets/img/Servicios/obras.jpg')} style={styles.img}>
                                <View style={styles.darkOverlay}/>
                                <Text style={styles.titleNoticia}>
                                    Noticia Prueba
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.noticia}>
                            <ImageBackground reziseMode='cover' source={require('../../../../assets/img/Servicios/conciertos.jpg')} style={styles.img}>
                                <View style={styles.darkOverlay}/>
                                <Text style={styles.titleNoticia}>
                                    Noticia
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.noticia}>
                            <ImageBackground reziseMode='cover' source={require('../../../../assets/img/Servicios/belleza.jpg')} style={styles.img}>
                                <View style={styles.darkOverlay}/>
                                <Text style={styles.titleNoticia}>
                                    Noticia
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

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
        textTransform: 'uppercase'
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
    imgBanner: {
        height: 200, 
        borderRadius: 10,
        padding: hp('2.5%'),
        justifyContent: 'center'
    },
    img: {
        height: 200, 
        borderRadius: 10,
        padding: hp('2.5%'),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    noticia: {
        width: 160,
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    titleNoticiaR: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fefefe',
    },
    titleNoticia: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fefefe',
    },
});