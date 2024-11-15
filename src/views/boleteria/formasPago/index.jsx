import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import CustomButton from '../../../components/customButton'
import MoneyTransfer from '../../../../assets/icons/money-transfer.svg'
import Edit from '../../../../assets/icons/edit.svg'
import Xmark from '../../../../assets/icons/xmark.svg'
import { useAppSelector } from '../../../hooks/store';
import { findIndexFactura, getFactura, getFaltantePagar, getLotes, getTicketsFunction } from '../../../store/selectors';
import { useEffect, useState } from 'react';
import { useBoleteriaActions } from '../../../hooks/useBoleteriaActions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStorage } from '../../../hooks/localStorage';
import axios from 'axios';
import { API_URL } from '../../../config/constants';

export default function FormasPago() {

    const navigation = useNavigation()
    const route = useRoute()
    const {getTasaBs, deleteFormaPago, resetCompraBoletos} = useBoleteriaActions()
    const {getItem} = useStorage()
    const [loading, setLoading] = useState(true)
    const [loadingButton, setLoadingButton] = useState(false)

    const {idFuncion} = route.params

    const factura = useAppSelector(state=> getFactura(state, {idFuncion}))
    const indexFactura = useAppSelector(state=> findIndexFactura(state, {idFuncion}))
    const boletos = useAppSelector(state=> getTicketsFunction(state, {idFuncion}))
    const faltantePagar = useAppSelector(state=> getFaltantePagar(state, {indexFactura}))

    const totalPagar = (factura?.tasaBs) ? factura.tasaBs * parseFloat(factura.montoTotal) : 0

    useEffect(()=>{

        if(factura.tasaBs){
            setLoading(false)
            return
        }
        const loadTasaBs = async ()=>{
            try {
                await getTasaBs()
            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
        }
        
        loadTasaBs()
    },[])

    const handleSubmit = async ()=>{
        const data = JSON.stringify({
            montoTotal: factura?.montoTotal,
            tasaBs: factura?.tasaBs,
            tipoVenta: boletos[0]?.tipoVenta,
            idFuncion: boletos[0]?.idFuncion,
        })

        const formasPago = JSON.stringify(factura.formasPago)
        const registroPago = data
        const lotes = JSON.stringify(boletos)
 
        if(!registroPago){
            return
        }

        setLoadingButton(true)
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
                    registroPago,
                    lotes,
                    formasPago
                }
            }).then((response) =>{

                if(response?.data?.data?.status != 'error'){
                    resetCompraBoletos()
                }

                return response;
            })
            
            const {status, message} = response?.data

            if(status === 'error'){
                console.error(message)
                return;
            }

            navigation.navigate("Success", {
                title: "Boletos comprados",
                message: "¡Boletos comprados exitosamente!",
                screen: 'Home',
            })  
        } catch (error) {
            console.error(error.response)
        }finally{
            setLoadingButton(false)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar
                title={'Pagar'}
                back={true}
                loggedIn={ true }
            />
            <View style={{ flex: 1 }}>
                <StyleText tag='Pago' size='big' style={{ justifyContent: 'center', marginVertical: 14 }}>Formas de</StyleText>
                <View style={{ margin: 8, padding: 6 }}>
                    <Text style={styles.event}>{factura?.evento}</Text>
                    <Text>Función: {factura?.funcion}</Text>
                    <Text>Cantidad de Boletos: {boletos.length}</Text>
                </View>
                {   (faltantePagar === 0)
                    ? null
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 6 }}>
                        <CustomButton text='Agregar Forma de Pago' width={220} height={40} onPress={()=>{
                                            navigation.navigate('PagarBoletos', {
                                                idFactura: indexFactura
                                            })
                                        }}/>
                    </View>
                }
                
                <ScrollView style={{ flex: 1}}>
                    {
                        factura?.formasPago.map((item, index)=>{
                            const metodoPago = (item.metodoPago == 1) ? 'Transferencia' : 'Pago Móvil'
                            return (
                                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FBFBFB', padding: 10, marginHorizontal: 12, marginVertical: 6, borderRadius: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginEnd: 12 }}>
                                        <MoneyTransfer fill='#283054' width={38} height={38} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.event, { color: '#283054' }]}>{metodoPago}</Text>
                                        <Text style={{ fontSize: 12, color: "gray" }}>Referencia: {item.referencia}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#2FB31A' }}>{item.montoBs} Bs</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', gap: 12, flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={()=>{
                                            navigation.navigate('PagarBoletos', {
                                                idFactura: indexFactura,
                                                index
                                            })
                                        }}>
                                            <Edit fill='gray' width={22} height={22} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{
                                            deleteFormaPago({id: indexFactura, index})
                                        }}>
                                            <Xmark fill='gray' width={22} height={22} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                    
                </ScrollView>
                {
                    loading 
                    ? <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#E31734" />
                  </View>
                    : <View style={{ flex: 0.15, justifyContent: 'flex-end', alignItems: 'center', gap: 2, marginBottom: 12 }}>
                        <StyleText tag={`${totalPagar.toFixed(2)} Bs`} size='small' tagColor={'#2FB31A'}>Monto a Pagar</StyleText>
                        <StyleText tag={`${faltantePagar.toFixed(2)} Bs`} size='small' tagColor={(faltantePagar === 0) ?'#2FB31A' : "#E31734" }>Faltante por Pagar</StyleText>
                    </View>
                }
                
                <View style={{ flex: 0, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 26 }}>
                    {(faltantePagar > 0)
                        ? null
                        : <CustomButton loading={loadingButton} text='Registrar Pago' width={220} height={40} color='#0F9B4B' onPress={()=>{
                            if(faltantePagar != 0){
                                return
                            }
    
                            handleSubmit()
                        }}/> 
                    }
                </View>
            </View>
            <BottomNavbar title={"Cartelera"} loggedIn={true} active={3} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    event: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        color: '2f2f2f'
    }
})