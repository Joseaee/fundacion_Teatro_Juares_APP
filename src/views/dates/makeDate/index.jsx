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

function MakeDate( { route } ) {

    const receiveParams = route.params;

    const [inputId, setInputId] = useState(false);
    const [Hour, setHour] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);

    const dataService = [
        {value: '1', service: 'Obra Teatral', },
        {value: '2', service: 'Graduación', },
        {value: '3', service: 'Concierto', },
        {value: '4', service: 'Concurso', },
        {value: '5', service: 'Conferencia', },
    ]

    const dataSpaces = [
        {value: '1', space: 'Escenario', },
        {value: '2', space: 'Salon de los espejos', },
    ]

    return(
        
        <SafeAreaView style={ {flex: 1,} }>
            <Navbar
                title={ 'Citas' }
                loggedIn={ true }
                back={ true }
            />
            <View style={ {flex: 1,} }>
                <KeyboardAwareScrollView
                    style={ { flex: 1,} }
                    behavior={ Platform.OS === "ios" ? "padding" : undefined }
                    keyboardVerticalOffset={ 60 }
                >
                    <View style={ {marginTop: hp('5%')} }>
                        <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: wp('10%')} }>
                            <TextInput
                                style={ [styles.input, {marginTop: hp('0.5%'), borderColor: inputId ? '#CB2139' : '#656565'}]}
                                placeholder='Nombre del evento (Min 3 - Max 60 caracteres)'
                                placeholderTextColor='#656565'
                                onFocus={ (e) => {setInputId(true)} }
                                onBlur={ (e) => {setInputId(false)} }
                            />
                        </View>
                        <View style={ {flex: 1, flexDirection: 'row', marginTop: wp('10%'), marginHorizontal: wp('5%')} }>
                            <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: wp('5%')} }>
                                <Dropdown
                                    style={ [styles.dropdown, {borderBottomColor: isFocus ? '#CB2139' : '#656565'}] }
                                    placeholderStyle={ styles.placeholderStyle }
                                    selectedTextStyle={ styles.selectedTextStyle }
                                    containerStyle={ {marginBottom: hp('5%')}}
                                    iconStyle={ styles.iconStyle }
                                    itemTextStyle= {  styles.itemText  }
                                    data={ dataService }
                                    maxHeight={ 300 }
                                    labelField="service"
                                    valueField="value"
                                    placeholder={ !isFocus ?  'Servicios...' : '...' }
                                    value={ Hour }
                                    onChange={ (item) => {
                                        setHour(item.value);
                                        setIsFocus(false);
                                    }}
                                    onFocus={ () => {setIsFocus(true)} }
                                    onBlur={ () => {setIsFocus(false)} }
                                />

                            </View>
                            <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: wp('5')} }>
                                <Dropdown
                                    style={ [styles.dropdown, {borderBottomColor: isFocus2 ? '#CB2139' : '#656565'}] }
                                    placeholderStyle={ styles.placeholderStyle }
                                    selectedTextStyle={ styles.selectedTextStyle }
                                    containerStyle={ {marginBottom: hp('5%')}}
                                    iconStyle={ styles.iconStyle }
                                    itemTextStyle= {  styles.itemText  }
                                    data={ dataSpaces }
                                    maxHeight={ 300 }
                                    labelField="space"
                                    valueField="value"
                                    placeholder={ !isFocus2 ?  'Espacios' : '...' }
                                    value={ Hour }
                                    onChange={ (item) => {
                                        setHour(item.value);
                                        setIsFocus2(false);
                                    }}
                                    onFocus={ () => {setIsFocus2(true)} }
                                    onBlur={ () => {setIsFocus2(false)} }
                                />
                            </View>
                        </View>
                        <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: wp('10%'), marginHorizontal: wp('10%')} }>
                            <TextInput
                                placeholder='Inserte breve descripción del evento (Min 30 - Max 300 caracteres)'
                                style={[ styles.textArea, {textAlignVertical: "top"}]}
                                multiline={true}
                                numberOfLines={20}
                            />
                        </View>
                        <View style={ {flex: 0.5, justifyContent: 'center', alignItems: 'center', marginVertical: hp('5%')} }>
                                <CustomButton
                                    text={ 'Solicitar cita' }
                                    screen={ 'SuccessDate' }
                                    params={ {title: 'Citas', message: '¡Solicitud de cita enviada exitosamente!'} }
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
        borderColor: '#656565',
        borderBottomWidth: 3,
        padding: '4%',
        fontSize: hp('2%'),
        color: '#2f2f2f',
        flex: 1,
        backgroundColor: 'white',
    },
    textArea:{
        borderColor: '#656565',
        borderBottomWidth: 3,
        padding: '4%',
        fontSize: hp('2%'),
        color: '#2f2f2f',
        width: wp('80%'),
        backgroundColor: 'white',
    },
    dropdown: {
        height: hp('4%'),
        flex: 1,
        borderBottomWidth: 3, 
        borderBottomColor: '#656565',
        padding: wp('5%'),
        width: wp('40%'),
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

export default MakeDate;