import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import StyleText from "../../../components/StyleText";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Noticias(){
    const route = useRoute();
    const navigation = useNavigation();

    const {id, title, text, images, banner} = route.params

    return (
        <SafeAreaView style={{flex: 1}}>
            <Banner image={banner} 
                darkOverlay={true} 
                goBack={true}>
            </Banner>

            <ScrollView style={{flex:1}}>
                <View style={{flex:1}}>
                    <StyleText tag='Noticia' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Detalles de la</StyleText>

                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Título: {title}</Text>
                    </View>

                    <Text style={styles.parrafo}>
                        {text}
                    </Text>
                    
                    <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Imagenes de la noticia</Text>
                    </View>

                    <View style={{flexDirection: 'row', gap: 5, flexWrap: 'wrap', marginHorizontal: 14, marginBottom: 20, justifyContent: 'center'}}>
                        {images.map((img, index) => {
                            return (
                            <View key={index} style={styles.noticia}>
                            <ImageBackground reziseMode='cover' source={img} style={styles.img}>
                                <View style={styles.darkOverlay}/>
                            </ImageBackground>
                        </View>
                            )
                        })}
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
        color: '#222',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1,
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
        textAlign: 'justify'
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
        borderRadius: 6,
        overflow: 'hidden'
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});