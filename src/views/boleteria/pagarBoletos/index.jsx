import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/customButton'
import InputForm from "../../../components/inputForm";
import { useForm } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';

import Billete from "../../../../assets/icons/money.svg";
import Ref from "../../../../assets/icons/ref.svg";
import Telefono from "../../../../assets/icons/phone.svg";
import ButtonTab from '../../../components/ButtonTab';

export default function PagarBoletos(){

    const [selectedValue, setSelectedValue] = useState('java');

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          cedula: "",
          nombres: "",
          apellidos: "",
          correo: "",
        },
      });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar
                title={'Agregar Pago'}
                back={true}
                loggedIn={ true }
            />
            <ScrollView style={{ flex: 1 }}>
            <View style={{flex: 1}}>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18 }}>
                    <CustomButton text='Ver Cuentas' width={220} height={40} />
                </View>

                <View style={styles.contenedor}>
                    <ButtonTab width={150} bgColor='#fff' elevation={true}>
                        Pago Móvil
                    </ButtonTab>
                    <ButtonTab width={150} bgColor='#fff' elevation={true}>
                        Transferencia
                    </ButtonTab>
                </View>

                <View style={styles.select}>
                    <StyleText tag='Banco' size={'medium'} style={{ marginBottom: 14, marginTop: 6, justifyContent: 'center' }}>Seleccionar </StyleText>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Venezuela" value="0102" />
                            <Picker.Item label="Mercantil" value="0105" />
                            <Picker.Item label="Provincial" value="0108" />
                            <Picker.Item label="Banesco" value="0134" />
                        </Picker>
                </View>

                <View style={styles.inputs}>
                    <StyleText tag='Pago' size={'medium'} style={{ marginBottom: 14, marginTop: 6, justifyContent: 'center' }}>Datos del</StyleText>

                    <InputForm Icon={Billete} regExp={/^\d{0,6}(\.\d{1})?\d{0,2}$/} placeholder='Monto' msjError='Monto Invalido' control={control} value='' name='monto' onChangeFunction ={() => { clearErrors('session'); }}/>
                    {errors.monto && (
                    <Text style={styles.error}>{errors.monto.message}.</Text>
                    )}

                    <InputForm Icon={Ref} regExp={/^[0-9]{4,12}$/} placeholder='Referencia' msjError='Referencia Invalida' control={control} value='' name='referencia' onChangeFunction ={() => { clearErrors('session'); }}/>
                    {errors.referencia && (
                    <Text style={styles.error}>{errors.referencia.message}.</Text>
                    )}

                    <InputForm Icon={Telefono} regExp={/^04(12|24|26|14|16)[0-9]{7}$/} placeholder='Telefono' msjError='Telefono Invalido' control={control} value='' name='telefono' onChangeFunction ={() => { clearErrors('session'); }}/>
                    {errors.telefono && (
                    <Text style={styles.error}>{errors.telefono.message}.</Text>
                    )}
                </View>

                <View style={{ marginHorizontal: 30, marginBottom: 40}}>
                    <CustomButton text='Agregar' screen='FormasPago'></CustomButton>
                </View>

            </View>
            </ScrollView>
            <BottomNavbar></BottomNavbar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        marginHorizontal: 14,
        marginVertical: 14,
        justifyContent: 'space-around',
    },
    select: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        backgroundColor: '#fff',
        elevation: 6,
        overflow: 'hidden',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        marginHorizontal: 30,
        marginVertical: 14,
    },
    dates: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14
    },
})