import { View, Text, StyleSheet,FlatList, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import CustomButton from "../../../components/CustomButton";
import CardNotification from "../../../components/CardNotification";
import Messages from '../../../../assets/icons/messages.svg';
import StyleText from "../../../components/StyleText";

const notis = [
    {id: '1', img: require('../../../../assets/img/Servicios/belleza.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace una hora'},
    {id: '2', img: require('../../../../assets/img/Servicios/conciertos.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace un minuto'},
    {id: '3', img: require('../../../../assets/img/Servicios/espejos.jpg'), title: 'Compra Aceptada mi rey', time: 'Hace un día'}
]
    
export default function Notification(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar
                back={true}
                title={'Notificaciones'}
                loggedIn={ true }
            />
                <ScrollView style={{flex: 1}}>
                    <View>
                        <StyleText tag='Notificaciones' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Nuevas</StyleText>
                        
                        <CardNotification style={styles.carta} Icon={Messages} subtitle={'1min'}>
                            <Text>Mensaje</Text>
                        </CardNotification>

                        <CardNotification style={styles.carta} Icon={Messages} subtitle={'1min'}>
                            <Text>Mensaje</Text>
                        </CardNotification>
                    </View>
                </ScrollView>
            <BottomNavbar title='Notificaciones' loggedIn={true} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})