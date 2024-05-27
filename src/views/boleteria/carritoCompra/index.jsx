import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from "../../../components/bottomNavbar";
import StyleText from "../../../components/StyleText";
import Navbar from '../../../components/navbar';
import Badge from '../../../components/Badge';
import { useRoute } from '@react-navigation/native';

export default function CarritoCompra(){
    const route = useRoute();

    const {idFuncion, fecha, horaInicio, horaFinal, evento} = route.params

    const lotes = [
        {
            id: '1',
            nombre: 'Patio VIP',
            precio: '10',
            color: '#c7c7c7',
            disponibles: 10
        },
        {
            id: '2',
            nombre: 'Patio General',
            precio: '5',
            color: '#e3e3e3',
            disponibles: 200
        }
    ]
    return (
        <SafeAreaView style={{flex:1}}>
            <Navbar back={true} title={""}/>
            <ScrollView style={{flex:1}}>
            <StyleText tag='Boletos' size='big' style={{marginVertical: 18, justifyContent: 'center'}}>Comprar</StyleText>
            <View style={{marginHorizontal: 14, marginVertical: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4}}>
                    <Text style={styles.title}>{evento}</Text>
                    <Badge color='red'>Obra Teatral</Badge>
                </View>
                
                <Text style={styles.subtitle}>{`Fecha: ${fecha}`}</Text>
                <Text style={styles.subtitle}>{`Horario: ${horaInicio} - ${horaFinal}`}</Text>
            </View>
            <View>
                <View style={{flexDirection: 'row', marginHorizontal: 14}}>
                    <View>
                        <Text>Aqui va el icono</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{lotes[0].nombre}</Text>
                        <Text>{`Boletos Disponibles: ${lotes[0].disponibles}`}</Text>
                        <Badge color='red'>{`REF ${lotes[0].precio}`}</Badge>
                    </View>
                    <View></View>
                </View>
            </View>
            </ScrollView>
            <BottomNavbar title={ 'Cartelera' }
                loggedIn={ true }
                active={ 3 } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,

    }
})