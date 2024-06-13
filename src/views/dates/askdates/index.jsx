import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import DatePicker from 'react-native-modern-datepicker';
import { Dropdown } from 'react-native-element-dropdown';

import Navbar from '../../../components/navbar';
import CustomButton from '../../../components/CustomButton';
import BottomNavbar from '../../../components/bottomNavbar';

function AskDates( {} ) {

    const [selectedDate, setSelectedDate] = useState('');
    const [Hour, setHour] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const hoy = new Date(); 
    const fecha = `${hoy.getFullYear()}-${(hoy.getMonth() + 1 < 10 ) ? '0'+(hoy.getMonth() + 1) : hoy.getMonth() + 1}-${hoy.getDate() + 7}`; 

    const data = [
        {value: '10:00', hour: '10:00AM', },
        {value: '11:00', hour: '11:00AM', },
        {value: '13:00', hour: '01:00PM', },
        {value: '14:00', hour: '02:00PM', },
        {value: '15:00', hour: '03:00PM', },
    ]

    return(
        
        <SafeAreaView style={ {flex: 1,} }>
            <Navbar
                title={ 'Citas' }
                loggedIn={ true }
            />
            <View style={ {flex: 1,} }>
                <KeyboardAwareScrollView
                    style={ { flex: 1,} }
                    behavior={ Platform.OS === "ios" ? "padding" : undefined }
                    keyboardVerticalOffset={ 60 }
                >
                    <View style={ {marginTop: hp('5%')} }>
                        <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: wp('10%')} }>
                                <Image
                                    style={ styles.image }
                                    source={require('../../../../assets/img/logo.png')}
                                />
                                <Text style={ styles.title }>Solicitud de cita</Text>
                                <Text style={ styles.text }>
                                    Para solicitar una cita con el personal del teatro, debes escribir una carta al Presidente y a la Gerente de Producción, indicando el motivo, la fecha y los asientos que quieres reservar para tu evento. Luego, debes convertir la carta en PDF y adjuntarla al formulario que está abajo. Después, debes esperar a que el teatro te contacte para confirmar tu cita. Recuerda que el horario de atención es de 9:00 AM a 12:00 PM y de 1:00 PM a 4:00 PM.
                                </Text>
                        </View>
                        <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: hp('2%'), marginHorizontal: wp('10%')} }>
                            <DatePicker
                                mode="calendar"
                                minimumDate={ fecha }
                                onSelectedChange={ date => setSelectedDate(date) }
                                style={ [ styles.calendar, { flex: 1,}] }
                                options={ {mainColor: '#CB2139',} }
                            />
                        </View>
                        <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: hp('2%'),marginHorizontal: wp('10%')} }>
                            <Dropdown
                                style={ [styles.dropdown, {borderBottomColor: isFocus ? '#CB2139' : '#656565'}] }
                                placeholderStyle={ styles.placeholderStyle }
                                selectedTextStyle={ styles.selectedTextStyle }
                                containerStyle={ {marginBottom: hp('5%')}}
                                iconStyle={ styles.iconStyle }
                                itemTextStyle= {  styles.itemText  }
                                data={ data }
                                maxHeight={ 300 }
                                labelField="hour"
                                valueField="value"
                                placeholder={ !isFocus ?  'Seleccione un hora' : '...' }
                                value={ Hour }
                                onChange={ (item) => {
                                    setHour(item.value);
                                    setIsFocus(false);
                                }}
                                onFocus={ () => {setIsFocus(true)} }
                                onBlur={ () => {setIsFocus(false)} }
                                dropdownPosition={ 'top' }
                            />

                        </View>
                        <View style={ {flex: 0.5, justifyContent: 'center', alignItems: 'center', marginVertical: hp('5%')} }>
                                <CustomButton
                                    text={ 'Verificar disponibilidad' }
                                    screen={ 'MakeDate' }
                                    params={ {fecha: selectedDate, hora: Hour} }
                                />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
            <BottomNavbar
                active={ 2 }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: wp('30%'),
        height: hp('15%'),
    },
    calendar:{
        borderWidth: 1, 
        borderColor:'#656565',
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
    },
    input:{
        backgroundColor: "#ffffff30",
        borderColor: '#656565',
        borderBottomWidth: 3,
        padding: '4%',
        fontSize: hp('2%'),
        color: '#2f2f2f',
        marginHorizontal: wp('5%'),
    },
    dropdown: {
        height: hp('4%'),
        flex: 1,
        borderBottomWidth: 3, 
        borderBottomColor: '#656565',
        padding: wp('5%'),
        backgroundColor: 'white',
    },
    iconStyle: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: hp('2%'),
        fontWeight: 600,
        color: '#2f2f2f',
    },
    selectedTextStyle: {
        fontSize: hp('2%'),
        fontWeight: 600,
        color: '#2f2f2f',
    },
})

export default AskDates;