import { View, Text, StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import CustomButton from "../../../components/customButton";
import CardNotification from "../../../components/CardNotification";

const notis = [
    {id: '1', img: require('../../../../assets/img/Servicios/belleza.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace una hora'},
    {id: '2', img: require('../../../../assets/img/Servicios/conciertos.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace un minuto'},
    {id: '3', img: require('../../../../assets/img/Servicios/espejos.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace un día'}
]
    
export default function Notification(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar title='Notificaciones' loggedIn={true} />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <FlatList data={notis} keyExtractor={item => item.id} renderItem={(item)=> <CardNotification imgSrc={item.img} timestamp={item.time}>{item.title}</CardNotification>}/>
                </View>
                {/* <View style={{flexDirection: 'row' ,height: 40, paddingHorizontal: 12, marginBottom: 30}}>
                    <CustomButton text='Ver Notificaciones Anteriores' />
                </View> */}
            </View>
            <BottomNavbar title='Notificaciones' loggedIn={true} />
        </SafeAreaView>
    )
}