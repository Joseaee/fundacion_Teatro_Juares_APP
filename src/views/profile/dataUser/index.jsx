import { View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import Table from '../../../components/table'

import Envelope from '../../../../assets/icons/user.svg';
import { useState } from 'react';

const user = 
{
    Cedula: '29517943',
    Correo: 'sabrii.colmenarez@gmail.com',
    Telefono: '04128575496'  
}

const compra = 
{
    Boletos: '3',
    Evento: 'Spiderman',
    Fecha: '08/08/2024' ,
    Funcion: '12:00 PM',
    Pago: '120 bs',
    Estado: 'Verificada'  
}

function DataUser() {

    const navigation = useNavigation();

    
    const onPress = () => {

        const data = 
            {
                name: 'Sabrina',
                lastname: 'Colmenarez Colmenarez',
                mail: 'sabrii.colmenarez@gmail.com',
                phone: '04128575496'   
            }
        
        navigation.navigate('EditUser', {data})
    };

    return(
        
        <SafeAreaView style={ {flex: 1} }>
            <Banner image={require('.:/../../assets/img/banner-cartelera.jpg')} goBack={true}>
                <View style={{marginLeft: 10,}}>
                    <Shadow
                        distance = { 4 }
                        startColor ={ '#666666' }
                        sides = { { start: true, end: true, top: true, bottom: true } }
                        corners = { { topStart: true, topEnd: true, bottomStart: true, bottomEnd: true } }
                        radius = { 5 }
                    >
                            <Image style={styles.img} source={require('../../../../assets/img/Servicios/belleza.jpg')}></Image>
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
            <Text style={styles.title}>Sabrina Colmenarez</Text>
                <KeyboardAwareScrollView>
                <Table 
                    datos={user}
                    title={'Informacion'}
                    existData={true}
                />

                <Table 
                    datos={compra}
                    title={'Mi Ultima Compra'}
                    existData={true}
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