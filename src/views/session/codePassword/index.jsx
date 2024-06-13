import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput,Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useForm, Controller } from "react-hook-form"

import Navbar from '../../../components/navbar';
import CustomButton from '../../../components/customButton';

function CodePassword( {navigation} ) {
    
    const [inputId, setInputId] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            code: '',
        },
    })

    const onSubmit = () => {

        navigation.navigate('ChangePassword');
    };

    return(

        <SafeAreaView style={ {flex: 1,} }>
            <LinearGradient 
                colors={ ['#710014', '#E31744',  '#E31734'] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ {flex: 1} }
            >  
                <Navbar
                    back={ true }
                    title={ 'Recuperar Contraseña' }
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
                                    <Text style={ styles.title }>¡Verificar correo!</Text>
                                    <Text style={ styles.text }>Ingrese el código enviado a su correo electrónico</Text>
                            </View>
                            <View style={ {flex: 1, justifyContent: 'center', marginTop: hp('2%')} }>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{7,9}$/,
                                            message: "Ingrese un código valido",
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={ [styles.input, {marginTop: hp('0.5%'), borderColor: inputId ? '#CB2139' : '#656565'}] }
                                            placeholder='Código enviado a su correo.'
                                            placeholderTextColor='#656565'
                                            keyboardType = 'number-pad'
                                            onFocus={ () => {setInputId(true)} }
                                            onBlur={ ()=>{onBlur; setInputId(false)} }
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                    )}
                                    name="code"
                                /> 
                                {errors.code && <Text style={ styles.error }>Error en el código ingresado.</Text>}
                            </View>
                            <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp('3%')} }>
                                <CustomButton
                                    text={ 'Continuar' }
                                    screen={ 'ChangePassword' }
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
        height: hp('40%'),
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
        fontWeight: '500',
        fontSize: hp('1.5%')
    },
    error:{
        color: 'red',
        textAlign: 'center'
    },
});

export default CodePassword;