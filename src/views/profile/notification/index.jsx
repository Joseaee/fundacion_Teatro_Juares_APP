import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import CustomButton from "../../../components/customButton";
import CardNotification from "../../../components/CardNotification";

































export default function Notification(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar title='Notificaciones' loggedIn={true} />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                    <CardNotification timestamp='1min'>
                        Hola don jose
                    </CardNotification>
                </View>
                <View style={{flexDirection: 'row' ,height: 40, paddingHorizontal: 12, marginBottom: 30}}>
                    <CustomButton text='Ver Notificaciones Anteriores' />
                </View>
            </View>
            <BottomNavbar title='Notificaciones' loggedIn={true} />
        </SafeAreaView>
    )
}