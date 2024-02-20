import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useForm, Controller } from "react-hook-form"

import Navbar from '../../../components/navbar';
import CustomButton from '../../../components/customButton';

function ChangePassword( {navigation} ) {

    const [inputPassword, setInputPassword] = useState(false);
    const [inputPassword2, setInputPassword2] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            matricula: "",
            email: '',
        },
    })

    const onSubmit = () => {

        navigation.navigate('SuccessSession', {title: 'Recuperar Contraseña', message: '¡Cambio de contraseña exitoso!', inverted: true} );
    };

    return(

        <SafeAreaView style={ {flex: 1,} }>
            <LinearGradient 
                colors={ ['#E31734', '#E31744',  '#710014'] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ {flex: 1, justifyContent: 'center',} }
            >   
                <Navbar
                    back={ true }
                    title={ 'Recuperar Contraseña' }
                    inverted={ true }
                />
                <View style={ {flex: 1, justifyContent: 'center'} }>
                    <View style={ styles.containerForm }>
                        <KeyboardAwareScrollView
                            style={ { flex: 1 } }
                            behavior={ Platform.OS === "ios" ? "padding" : undefined }
                            keyboardVerticalOffset={ 60 }
                        >
                            <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center',} }>
                                <Image
                                    style={ styles.image }
                                    source={require('../../../../assets/img/logo.png')}
                                />
                                <Text style={ styles.title }>¡Cambia tu Contraseña!</Text>
                            </View>
                            <View style={ {flex: 1, justifyContent: 'center', marginTop: hp('3%')} }>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_\.\-]{8}$/,
                                            message: "Ingrese una contraseña valida",
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={ [styles.input, {marginTop: hp('0.5%'), borderColor: inputPassword ? '#CB2139' : '#656565'}] }
                                            placeholder='Contraseña (8 caracteres)'
                                            placeholderTextColor='#656565'
                                            onFocus={ (e) => {setInputPassword(true)} }
                                            onBlur={ (e) => {onBlur; setInputPassword(false)} }
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                    )}
                                    name="inputPassword"
                                /> 
                                {errors.inputPassword && <Text style={ styles.error }>Error en la contraseña.</Text>}
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_\.\-]{8}$/,
                                            message: "Ingrese una contraseña valida",
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={ [styles.input, {marginTop: hp('0.5%'), borderColor: inputPassword2 ? '#CB2139' : '#656565'}] }
                                            placeholder='Contraseña (8 caracteres)'
                                            placeholderTextColor='#656565'
                                            onFocus={ (e) => {setInputPassword2(true)} }
                                            onBlur={ (e) => {onBlur; setInputPassword2(false)} }
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                    )}
                                    name="inputPassword2"
                                /> 
                                {errors.inputPassword2 && <Text style={ styles.error }>Error en la contraseña.</Text>}
                            </View>
                            <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp('5%')} }>
                                <CustomButton
                                    text={ 'Continuar' }
                                    screen={ 'SuccessSession' }
                                    onPress ={ handleSubmit(onSubmit)}
                                />
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    containerForm:{
        height: hp('60%'),
        marginHorizontal: wp('10%'),
        backgroundColor: '#fdfdfd',
    },
    image:{
        height: hp('15%'),
        width: hp('13%'),
    },
    title:{
        color: '#2f2f2f',
        fontWeight: '700',
        fontSize: hp('3%'),
        textAlign: 'center',
    },
    input:{
        borderColor: '#656565',
        borderBottomWidth: 3,
        padding: '4%',
        fontSize: hp('2%'),
        color: '#2f2f2f',
        marginHorizontal: wp('10%'),
    },
    button:{
        backgroundColor: '#CB2139',
        height: hp('5%'),
        width: hp('25%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#fdfdfd',
        fontWeight: '700',
        fontSize: hp('2.5%')
    },
    error:{
        color: 'red',
        textAlign: 'center'
    },
});

export default ChangePassword;