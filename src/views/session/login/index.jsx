import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useForm, Controller } from "react-hook-form"

import Home from '../../../../assets/icons/home.svg';
import CustomButton from '../../../components/customButton/';

function Login({ navigation }) {

    const [inputId, setInputId] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            matricula: "",
            email: '',
        },
    })

    const onSubmit = () => {

        navigation.navigate('Home');
    };

    return(

        <SafeAreaView style={ {flex: 1,} }>
            <LinearGradient 
                colors={ ['#710014', '#E31744',  '#E31734'] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ {flex: 1, justifyContent: 'center',} }
            >
                <KeyboardAwareScrollView
                    style={ { flex: 1 } }
                    behavior={ Platform.OS === "ios" ? "padding" : undefined }
                    keyboardVerticalOffset={ 60 }
                >
                <View style={ styles.containerForm }>
                    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center',} }>
                            <Image
                                style={ styles.image }
                                source={require('../../../../assets/img/logo.png')}
                            />
                            <Text style={ styles.title }>¡Iniciar Sesión!</Text>
                    </View>
                    <View style={ {flex: 1, justifyContent: 'center', marginTop: hp('2%')} }>
                        <Controller
                            control={control}
                            rules={{
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{7,9}$/,
                                            message: "Ingrese una cedula valida",
                                        },
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={ [styles.input, {marginTop: hp('0.5%'), borderColor: inputId ? '#CB2139' : '#656565'}] }
                                    placeholder='Cedula'
                                    placeholderTextColor='#656565'
                                    keyboardType = 'number-pad'
                                    onFocus={ () => {setInputId(true)} }
                                    onBlur={ ()=>{onBlur; setInputId(false)} }
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="cedula"
                        /> 
                        {errors.cedula && <Text style={ styles.error }>Error en la cedula.</Text>}
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
                    </View>
                    <View style={ {flex: 0.5, justifyContent: 'center', alignItems: 'center', marginTop: hp('5%')} }>
                            <CustomButton
                                text={ 'Iniciar Sesion' }
                                screen={ 'Home' }
                                onPress ={ handleSubmit( onSubmit )}
                            />
                    </View>
                    <View style={ {flex: 0.5, justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'),} }>
                            <View style={ {flex: 0.5, flexDirection: 'row', alignItems: 'center',} }>
                                <TouchableOpacity 
                                    style={ {flex: 1, alignItems: 'center',} }
                                    onClick = { (e) => {e.stopPropagation();  navigation.navigate('Register');} }
                                    onPress = { (e) => {e.stopPropagation();  navigation.navigate('Register');} }
                                >
                                    <Text style={ [styles.text, {color: '#0d6efd', fontSize: hp('2%')}] }>Registrarse</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={ {flex: 1, alignItems: 'center',} }
                                    onClick = { (e) => {e.stopPropagation();  navigation.navigate('ForgetPassword');} }
                                    onPress = { (e) => {e.stopPropagation();  navigation.navigate('ForgetPassword');} }
                                >
                                    <Text style={ [styles.text, {color: '#0d6efd', fontSize: hp('2%'), textAlign: 'center'}] }>Recuperar{'\n'}Contraseña</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
                </KeyboardAwareScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
}

/*<View style={ {flex: 0.5, flexDirection: 'row', alignItems: 'center',} }>
                                <TouchableOpacity 
                                    style={ {flex: 1, alignItems: 'center',} }
                                    onClick = { (e) => {e.stopPropagation(); navigation.navigate('Home');} }
                                    onPress = { (e) => {e.stopPropagation(); navigation.navigate('Home');} }
                                >
                                    <Text style={ [styles.text, {color: '#0d6efd', fontSize: hp('2%'), textAlign: 'center', }] }> 
                                        <Home 
                                            height={ wp('5%') } 
                                            width={ hp('3.5%') } 
                                            fill={ '#0d6efd' } 
                                        />
                                        Volver
                                    </Text>
                                </TouchableOpacity>
                            </View>*/
const styles = StyleSheet.create({

    containerForm:{
        height: hp('60%'),
        padding: hp('2%'),
        marginHorizontal: wp('10%'),
        backgroundColor: '#fdfdfd',
        marginVertical: hp('20%')
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
        backgroundColor: "#ffffff30",
        borderColor: '#656565',
        borderBottomWidth: 3,
        padding: '4%',
        fontSize: hp('2%'),
        color: '#2f2f2f',
        marginHorizontal: wp('10%'),
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

export default Login;