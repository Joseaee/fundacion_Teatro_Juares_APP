import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/customButton'
import InputForm from "../../../components/inputForm";
import { useForm } from "react-hook-form";

import Cedula from "../../../../assets/icons/cedula.svg";
import Telefono from "../../../../assets/icons/phone.svg";
import Banco from "../../../../assets/icons/banco.svg";
import Billete from "../../../../assets/icons/money.svg";
import Calendario from "../../../../assets/icons/calendario.svg";
import Reloj from "../../../../assets/icons/reloj.svg";

export default function PagarBoletos(){

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
                title={'Pagar'}
                back={true}
                loggedIn={ true }
            />
            <View style={{flex: 1}}>
                <StyleText tag='Pago' size='big' style={{ justifyContent: 'center', marginVertical: 14 }}>Agregar </StyleText>
                
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 6 }}>
                    <CustomButton text='Cuentas' width={220} height={40} />
                </View>

                <View style={styles.contenedor}>
                    <TouchableOpacity style={styles.tipoPago}>
                        <Text>Pago Móvil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tipoPago}>
                        <Text>Transferencia</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <InputForm
                        Icon={Cedula}
                        regExp={/^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/}
                        placeholder="Nombre(s)"
                        msjError="Nombre(s) Invalido"
                        control={control}
                        value=""
                        name="nombres"
                    />
                </View>
            </View>
            <BottomNavbar></BottomNavbar>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        marginHorizontal: 14,
        marginVertical: 14,
        width: 330,
        height: 200,
        justifyContent: 'space-around',
    },
    tipoPago: {
        backgroundColor: '#fff',
        elevation: 6,
        overflow: 'hidden',
        width: 150,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})