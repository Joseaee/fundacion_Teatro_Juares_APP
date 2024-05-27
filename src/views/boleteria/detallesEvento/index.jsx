import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from "../../../components/bottomNavbar";
import Banner from "../../../components/Banner";
import CalendarItem from "../../../components/CalendarItem";
import StyleText from "../../../components/StyleText";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../hooks/store";
import { getEventById } from "../../../store/selectors";

export default function DetallesEvento(){
    const route = useRoute();
    const navigation = useNavigation();

    const {id} = route.params

    const evento = useAppSelector(state=> getEventById(state, {eventId: id}))

    const FuncionesItem = ({item})=>{
        return <CalendarItem title={evento.nombre} date={item.fecha} onPress={()=> navigation.navigate('CarritoCompra', {
            idFuncion: item.id,
            evento: evento.nombre,
            fecha: item.fecha,
            horaInicio: item.horaInicio,
            horaFinal: item.horaFinal
        })} >
        <Text>{item.horaInicio} - {item.horaFinal}</Text>
    </CalendarItem>
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <Banner goBack={true} image={require('.:/../../assets/img/banner-cartelera.jpg')}>
                <Image source={evento.poster} style={{width:140, height:140, borderRadius: 100}}/>
            </Banner>
            <View style={{flex:1, marginTop: 30, padding:8}}>
                <Text style={styles.title}>{evento.nombre}</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore eveniet ex natus odit fugiat ipsum iure odio, modi earum perferendis omnis optio itaque fugit, aperiam quaerat fuga dolore excepturi?</Text>
                <StyleText tag='Disponibles' style={{marginVertical: 14, justifyContent: 'center'}}>Funciones</StyleText>
                
                <FlatList data={evento.funciones} renderItem={FuncionesItem} keyExtractor={item=> item.id} />
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