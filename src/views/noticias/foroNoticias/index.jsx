import {View, Text, StyleSheet, TextInput, ScrollView, FlatList, ActivityIndicator} from 'react-native';
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
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';

export default function Noticias(){
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
    const noticias = useAppSelector((state)=> getNoticias(state))
    const {filterNoticia, consultarNoticias} = useNoticiasActions()

    useEffect(()=>{
        const loadNoticias = async ()=>{
            setLoading(true)
            try {
                await consultarNoticias()
            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        loadNoticias()
    }, [])
console.log(noticias.relevantes)
    return (
        <SafeAreaView style={{flex: 1}}>
            <Banner image={require('../../../../assets/img/banner-cartelera.jpg')} goBack={true}>
                <Text style={styles.title}>Foro de Noticias</Text>
            </Banner>
            <ScrollView style={{flex:1}}>
                <View style={{flex:1}}>
                    { loading
                      
                      ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                          <ActivityIndicator size="large" color="#E31734" />
                        </View>
                     : (noticias.relevantes.length == 0)
                     ? <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}><StyleText tag="noticias" >No se encontraron</StyleText></View> 
                     : <>
                         <View style={styles.parrafo}>
                     <View style={styles.redBlock}></View><Text style={styles.text}>Noticias Relevantes</Text>
                 </View>

                 <View style={{marginHorizontal: 14}}>
                     <Carousel data={noticias?.relevantes} loop={true} renderItem={(item)=> {
                         return (
                             <CardButton key={item.nroNoticia} title={item.titulo} source={{uri: `${API_URL}${item.imagen}`}} alignContent='bottom' onPress={()=> navigation.navigate('DetalleNoticia', {
                                 ...item
                             })}/>
                         )
                     }}/>
                 </View>
                     </>
                    }
                    {loading
                      
                      ? null
                      :
                        (noticias.otras.length === 0)
                        ? null
                        : <>
                        <View style={styles.parrafo}>
                        <View style={styles.redBlock}></View><Text style={styles.text}>Otras Noticias</Text>
                    </View>

                    <View style={{flexDirection: 'row', gap: 5, flexWrap: 'wrap', marginHorizontal: 14, marginBottom: 20, justifyContent: 'center'}}>
                        {noticias.otras.map((item, nroNoticia) => {
                            return (
                                <CardButton key={item.nroNoticia} title={item.titulo} source={{uri: `${API_URL}${item.imagen}`}} alignContent='bottom' width={160} titleSize='small' onPress={()=> navigation.navigate('DetalleNoticia', {
                                    ...item
                                })}/>
                            )
                        })}
                    </View>
                        </>
                    }
                    
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