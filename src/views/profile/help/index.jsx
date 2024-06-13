import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import CardHorizontal from "../../../components/CardHorizontal";

import User from "../../../../assets/icons/user.svg";
import Chat from "../../../../assets/icons/chat.svg";
import Film from "../../../../assets/icons/film.svg";
import News from "../../../../assets/icons/news.svg";

import { useNavigation } from "@react-navigation/native";

function Help({ }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Navbar
                title={'Servicio ayuda'}
                loggedIn={true}
            />
            <View style={styles.cardsContainer}>
                <CardHorizontal key='1' title='Usuario' Icon={User} onPress={() => navigation.navigate('HelpDetailsUser')} style={styles.card} />
                <CardHorizontal key='2' title='Chat' Icon={Chat} onPress={() => navigation.navigate('HelpDetailsChat')} style={styles.card} />
                <CardHorizontal key='3' title='Eventos' Icon={Film} onPress={() => navigation.navigate('HelpDetailsEvent')} style={styles.card} />
                <CardHorizontal key='4' title='Noticias' Icon={News} onPress={() => navigation.navigate('HelpDetailsNoticias')} style={styles.card} />
            </View>

            <BottomNavbar active={5} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    card: {
        width: '45%', 
        marginBottom: 10,
        backgroundColor: '#7297DD',
    },
});

export default Help;
