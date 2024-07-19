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
import ButtonTab from '../../../components/ButtonTab';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/store';
import { useBoleteriaActions } from '../../../hooks/useBoleteriaActions';
import { getFactura, getFaltantePagar } from '../../../store/selectors';
import { useFormatDate } from '../../../hooks/useFormatDate';
import axios from 'axios';
import { API_URL } from '../../../config/constants';
import { useStorage } from '../../../hooks/localStorage';
import { useEncryption } from '../../../hooks/encryption';

export default function PagarBoletos(){
    const route = useRoute()
    const {idFactura, index} = route.params
    const navigation = useNavigation()
    const {newFormaPago, changeFormaPago} = useBoleteriaActions()
    const factura = useAppSelector(state => state.boleteria.facturas[idFactura])
    const formasPago = factura.formasPago
    const formaPago = (index != undefined) ? factura.formasPago[index] : null
    const [bancoSelected, setBancoSelected] = useState('0102');
    const [metodoPago, setMetodoPago] = useState((formaPago) ? formaPago.metodoPago : 0)
    const [loading, setLoading] = useState(false)
    const tasaBs = factura.tasaBs
    const faltante = useAppSelector(state => getFaltantePagar(state, {indexFactura: idFactura}))
    const faltantePagar = (formaPago) ? faltante + parseFloat(formaPago.montoBs) : faltante
    const {getNowDate} = useFormatDate()
    const {getItem} = useStorage()
    const {encryptData} = useEncryption()

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
      } = useForm({
        defaultValues: {
            monto: (formaPago) ? formaPago.montoBs : '',
            referencia: (formaPago) ? formaPago.refBancaria : '',
        },
      });

      const onSubmit = async (data)=>{
        const {monto, referencia} = data

        if(!metodoPago || !bancoSelected){
            errors.referencia = true;

            setError("session", {
                type: "manual",
                message: "Debe Completar todos los campos del Formulario",
            });
            return
        }

        if(monto == 0 || (faltantePagar - parseFloat(monto)) < 0){
            errors.monto = true;

            setError("session", {
                type: "manual",
                message: "El monto ingresado es invalido",
            });
            return
        }

        
        if((!formaPago || formaPago.refBancaria != referencia) && formasPago.some(item=> item.refBancaria === referencia)){
            errors.referencia = true;

            setError("session", {
                type: "manual",
                message: "Ya ha realizado un pago asociado a esta referencia ",
            });
            return
        }

        const {fecha, hora} = getNowDate()
        const detallePago = {
            monto: (monto/tasaBs).toFixed(2),
            montoBs: monto,
            refBancaria: referencia,
            metodoPago,
            banco: bancoSelected,
            fechaPago: fecha,
            horaPago: hora
        }

        const validarDetallePago = encryptData(JSON.stringify(detallePago))
        setLoading(true)
        try {
            const token = await getItem('userToken')
            const response = await axios({
                method: 'POST',
                url: API_URL,
                responseType: 'json',
                headers: {
                    Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                  url: 'app',
                  type: 'pagos'
                },
                data: {
                    validarDetallePago
                }
              })

              const {status, message} = response.data

              if(status === 'error'){
                errors.referencia = true;

                setError("session", {
                    type: "manual",
                    message,
                });
                return
              }

        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }

        if(formaPago){
            changeFormaPago({
                id: idFactura,
                index,
                data: detallePago
            })
        }else{
            newFormaPago({
                id: idFactura,
                data: detallePago
            })
        }

        navigation.navigate('FormasPago', {
            idFuncion: factura.idFuncion
        })
       
      }

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
                <ButtonTab onPress={()=>{
                        setMetodoPago(1)
                        clearErrors('session')
                    }} isSelected={metodoPago === 1} width={150} bgColor='#fff' elevation={true}>
                        Transferencia
                    </ButtonTab>
                    <ButtonTab onPress={()=>{
                        setMetodoPago(2)
                        clearErrors('session')
                    }} isSelected={metodoPago === 2} width={150} bgColor='#fff' elevation={true}>
                        Pago Móvil
                    </ButtonTab>
                </View>

                <View style={styles.select}>
                    <StyleText tag='Banco' size={'medium'} style={{ marginBottom: 14, marginTop: 6, justifyContent: 'center' }}>Seleccionar </StyleText>
                        <Picker
                            selectedValue={bancoSelected}
                            onValueChange={(itemValue, itemIndex) => setBancoSelected(itemValue)}
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
                    {errors.session && (
                    <Text style={styles.error}>{errors.session.message}</Text>
                    )}

                </View>

                <View style={{ marginHorizontal: 30, marginBottom: 40}}>
                    <CustomButton loading={loading} text='Agregar' onPress={handleSubmit(onSubmit)}></CustomButton>
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
    error: {
        color: "red",
        textAlign: "center",
      },
})