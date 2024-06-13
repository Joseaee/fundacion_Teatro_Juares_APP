import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import CustomButton from '../../../components/CustomButton'
import MoneyTransfer from '../../../../assets/icons/money-transfer.svg'
import Edit from '../../../../assets/icons/edit.svg'
import Xmark from '../../../../assets/icons/xmark.svg'

export default function FormasPago() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar title='' back={true} transparent={true} backArrowColor='#E31734' />
            <View style={{ flex: 1 }}>
                <StyleText tag='Pago' size='big' style={{ justifyContent: 'center' }}>Formas de</StyleText>
                <View style={{ margin: 8, padding: 6 }}>
                    <Text style={styles.event}>Evento 1</Text>
                    <Text>Función: </Text>
                    <Text>Cantidad de Boletos:</Text>
                    {true ? <Text>Asientos Seleccionados: </Text> : null}
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 6 }}>
                    <CustomButton text='Agregar Forma de Pago' width={220} height={40} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FBFBFB', padding: 10, marginHorizontal: 12, marginVertical: 6, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginEnd: 12 }}>
                            <MoneyTransfer fill='#283054' width={38} height={38} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.event, { color: '#283054' }]}>Pago Movil</Text>
                            <Text style={{ fontSize: 12, color: "gray" }}>Referencia: 0001</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#2FB31A' }}>10.00 Bs</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 12, flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Edit fill='gray' width={22} height={22} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Xmark fill='gray' width={22} height={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 2, marginBottom: 12 }}>
                    <StyleText tag='10.00 Ref' size='small'>Monto a Pagar</StyleText>
                    <StyleText tag='00.00 Ref' size='small' tagColor='#2FB31A'>Faltante por Pagar</StyleText>
                </View>
                <View style={{ flex: 0, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 26 }}>
                    <CustomButton text='Registrar Pago' width={220} height={40} color='#0F9B4B' />
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