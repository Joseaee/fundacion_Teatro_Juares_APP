import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from "../../../components/bottomNavbar";
import Banner from "../../../components/Banner";
import CalendarItem from "../../../components/CalendarItem";
import StyleText from "../../../components/StyleText";
import { useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../../hooks/store";

export default function DetallesEvento(){
    const route = useRoute();

    const {id} = route.params

    const evento = useAppSelector(state=> state.boleteria.eventos.filter(event => event.id === id))

    return (
        <SafeAreaView style={{flex:1}}>
            <Banner goBack={true} image={require('.:/../../assets/img/banner-cartelera.jpg')}>
                <Image source={evento[0].poster} style={{width:140, height:140, borderRadius: 100}}/>
            </Banner>
            <View style={{flex:1, marginTop: 30, padding:8}}>
                <Text style={styles.title}>{evento[0].nombre}</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore eveniet ex natus odit fugiat ipsum iure odio, modi earum perferendis omnis optio itaque fugit, aperiam quaerat fuga dolore excepturi?</Text>
                <StyleText tag='Disponibles' style={{marginVertical: 14, justifyContent: 'center'}}>Funciones</StyleText>
                <CalendarItem title={'El eventito'} date={'2024-04-16 00:00:00'} >
                    <Text>8:00 AM - 9:00 AM</Text>
                </CalendarItem>
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
        textAlign: 'justify'
    }
})