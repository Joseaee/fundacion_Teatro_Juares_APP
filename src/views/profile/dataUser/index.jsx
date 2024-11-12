import { View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoadingScreen from '../../../components/LoadingScreen'

import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import Table from '../../../components/table'

import Envelope from '../../../../assets/icons/user.svg';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { consulterUser } from '../../../store/profile/thunks';
import { API_URL } from '../../../config/constants';

const compra = 
{
    Boletos: '3',
    Evento: 'Spiderman',
    Funcion: '08/08/2024' ,
    Hora: '12:00 PM',
    Pago: '120 bs',
    Fecha: '05/08/2024',
    Estado: 'Verificada'  
}

function DataUser() {

    const profile = useAppSelector((state) => state.profile);
    const dispatch = useAppDispatch()

    const user = 
    {
        Cedula: profile.cedula,
        Correo: profile.correo,
        Telefono: profile.telefono  
    }

    const {loading, compras} = profile

    const navigation = useNavigation();

    useEffect(()=>{

        const cargarDatos = async ()=>{
            try {
                
                await dispatch(consulterUser()).unwrap()

            } catch (error) {
                console.error(error)
            }
        }
        cargarDatos();
    },[])

    
    const onPress = () => {
        
        navigation.navigate('EditUser')
    };

    if(loading){
        return(
            <LoadingScreen></LoadingScreen>
        )
    }

    return(
        
        <SafeAreaView style={ {flex: 1} }>
            <Banner image={require('../../../../assets/img/banner-cartelera.jpg')} goBack={true} icons={
                {
                    logout: true,
                    user: false,
                    bell: true
                }
            }>
                <View style={{marginLeft: 10,}}>
                    <Shadow
                        distance = { 4 }
                        startColor ={ '#666666' }
                        sides = { { start: true, end: true, top: true, bottom: true } }
                        corners = { { topStart: true, topEnd: true, bottomStart: true, bottomEnd: true } }
                        radius = { 5 }
                    >
                            <Image style={styles.img} source={{uri: `${API_URL}${profile.img}`}}></Image>
                    </Shadow>
                </View>
                
                <View style={{flex: 1}}>
                    <TouchableOpacity style={[styles.boton]} onPress = {onPress}>
                        <Envelope
                            height={ wp('5%') } 
                            width={ hp('5%') } 
                            padding = {5}
                            marginTop = {8}
                            marginBottom = {8}
                            marginLeft = {15}
                            fill={'#fff' }
                            
                        />
                        <Text style={styles.text}>Editar Datos</Text>

                    </TouchableOpacity>
                </View>
                
            </Banner>
            <View style={ {flex: 1, marginTop: hp('9%')} }>
            <Text style={styles.title}>{profile.nombre+' '+profile.apellido}</Text>
                <KeyboardAwareScrollView>
                <Table 
                    datos={user}
                    title={'Informacion'}
                />

                    <Table 
                    datos={compras}
                    title={'Mi Ultima Compra'}
                    />

                </KeyboardAwareScrollView>
            </View>
            <BottomNavbar
                title={ 'Inicio' }
                loggedIn={ true }
                active={ 0 }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    img:{
        height: hp('20%'),
        width: wp('40%'),
        border: 1, 
        borderColor: '#EAEAEA',
        borderWidth: 5,
        borderRadius: 100,
        shadowRadius: 1,
        
        },
    
        title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 8
    },

    text:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: wp('1%'),
        marginTop: 6,
        color: '#fff',
        
    },
    boton:{
        marginTop: hp('14%'), 
        marginRight: wp('5%'), 
        marginLeft: wp('3%'), 
        backgroundColor: '#E31734',
        borderRadius: 20,
        flexDirection: 'row'
    },
});

export default DataUser;