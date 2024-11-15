import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from "../../../components/bottomNavbar";
import Banner from "../../../components/Banner";
import CalendarItem from "../../../components/CalendarItem";
import StyleText from "../../../components/StyleText";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../hooks/store";
import { getEventById } from "../../../store/selectors";
import { API_URL } from "../../../config/constants";
import { useFormatDate } from "../../../hooks/useFormatDate";

export default function DetallesEvento(){
    const route = useRoute();
    const navigation = useNavigation();
    const {getDateFormated} = useFormatDate()
    const {id} = route.params

    const evento = useAppSelector(state=> getEventById(state, {eventId: id}))

    const FuncionesItem = ({item})=>{
        const horaInicio = getDateFormated({value: `${item.fecha} ${item.horaInicio}`, format: 'time'})
        const horaFinal = getDateFormated({value: `${item.fecha} ${item.horaFinal}`, format: 'time'})
        const fecha = getDateFormated({value: `${item.fecha} 00:00:00`, format: 'date'})
        return <CalendarItem title={evento.nombre} date={item.fecha} onPress={()=> navigation.navigate('CarritoCompra', {
            idFuncion: item.nroFuncion,
            evento: evento.nombre,
            categoria: evento.categoria,
            fecha,
            horaInicio,
            horaFinal,
            tipoVenta: evento.tipoVenta
        })} >
        <Text>{horaInicio} - {horaFinal}</Text>
    </CalendarItem>
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <Banner goBack={true} image={require('../../../../assets/img/banner-cartelera.jpg')}>
                <Image source={{uri:`${API_URL}${evento.imagen}`}} style={{width:140, height:140, borderRadius: 100}}/>
            </Banner>
            <View style={{flex:1, marginTop: 30, padding:8}}>
                <Text style={styles.title}>{evento.nombre}</Text>
                <Text style={styles.text}>{evento.descripcion}</Text>
                <StyleText tag='Disponibles' style={{marginVertical: 14, justifyContent: 'center'}}>Funciones</StyleText>
                
                <FlatList data={evento.funciones} renderItem={FuncionesItem} keyExtractor={item=> item.nroFuncion} />
            </View>
            <BottomNavbar title={ 'Cartelera' }
                loggedIn={ true }
                active={ 3 } />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8
    },
    text:{
        fontSize: 15,
        textAlign: 'justify',
        color: '#2f2f2f'
    }
})