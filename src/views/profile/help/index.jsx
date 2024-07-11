import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../../../components/navbar";
import BottomNavbar from "../../../components/bottomNavbar";
import Card from "../../../components/Card";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import User from "../../../../assets/icons/user-regular.svg";
import ChatSoporte from "../../../../assets/icons/chatSoporte.svg";
import Film from "../../../../assets/icons/film.svg";
import News from "../../../../assets/icons/news.svg";
import StyleText from "../../../components/StyleText";
import CardNotification from "../../../components/CardNotification";

import Facebook from "../../../../assets/icons/facebook.svg";
import Twitter from "../../../../assets/icons/twitter.svg";
import Instagram from "../../../../assets/icons/instagram.svg";
import Tiktok from "../../../../assets/icons/tiktok.svg";
import Internet from "../../../../assets/icons/internet.svg";

import { useNavigation } from "@react-navigation/native";


function Help({ }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar
                back={true}
                title={'Ayuda'}
                loggedIn={ true }
            />
            <ScrollView>
            <View style={{flex: 1, marginBottom: 30}}>
                <View style={styles.cardsContainer}>
                    <Card key='1' title='Usuario' onPress={() => navigation.navigate('HelpDetailsUser')} reverse={true} borderRadius={4} width={wp('45%')}>
                        <View>
                            <User width={50} height={50} fill='gray'/>
                        </View>
                    </Card>

                    <Card key='2' title='Soporte' onPress={() => navigation.navigate('HelpDetailsChat')} reverse={true} borderRadius={4} width={wp('45%')}>
                        <View>
                            <ChatSoporte width={50} height={50} fill='gray'/>
                        </View>
                    </Card>

                    <Card key='3' title='Eventos' onPress={() => navigation.navigate('HelpDetailsEvent')} reverse={true} borderRadius={4} width={wp('45%')}>
                        <View>
                            <Film width={50} height={50} fill='gray'/>
                        </View>
                    </Card>

                    <Card key='4' title='Noticias' onPress={() => navigation.navigate('HelpDetailsNoticias')} reverse={true} borderRadius={4} width={wp('45%')}>
                        <View>
                            <News width={50} height={50} fill='gray'/>
                        </View>
                    </Card>
                </View>
            
                <StyleText tag='Soporte' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Chat de</StyleText> 

                    <CardNotification subtitle={'Preguntas frecuentes'} Icon={ChatSoporte} iconBackground={'#0B6396'} onPress={() => navigation.navigate('Chat')}>
                        Chat Soporte
                    </CardNotification>

                <StyleText tag='Sociales' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Redes</StyleText> 

                <View style={styles.contenedor}>

                    <CardNotification subtitle={'teatrojuaresVenezuela'} Icon={Facebook} iconBackground={'#3b5998'} onPress={()=> {Linking.openURL('https://www.facebook.com/teatrojuaresVenezuela/').catch(err => console.error("Couldn't load page", err));
                            }}>
                    Facebook
                    </CardNotification>

                    <CardNotification subtitle={'juares_teatro'} Icon={Twitter} iconBackground={'#00acee'} onPress={()=> {Linking.openURL('https://twitter.com/juares_teatro?lang=es').catch(err => console.error("Couldn't load page", err));
                            }}>
                    Twitter
                    </CardNotification>

                    <CardNotification subtitle={'teatrojuares'} Icon={Instagram} iconBackground={'#E1306C'} onPress={()=> {Linking.openURL('https://www.instagram.com/teatrojuares/?hl=es').catch(err => console.error("Couldn't load page", err));
                            }}>
                    Instagram
                    </CardNotification>

                    <CardNotification subtitle={'@teatrojuares'} Icon={Tiktok} iconBackground={'#222'} onPress={()=> {Linking.openURL('https://www.tiktok.com/@teatrojuares').catch(err => console.error("Couldn't load page", err));
                            }}>
                    Tiktok
                    </CardNotification>
                    
                    <StyleText tag='sitio web' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Visita nuestro</StyleText> 

                    <CardNotification subtitle={'www.teatrojuares.com'} Icon={Internet}>
                    Sitio web
                    </CardNotification>
                </View>
            </View>
            </ScrollView>
            <BottomNavbar active={5} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 12,
        gap: 10
    },
    carta: {
        marginVertical: 6,
        marginHorizontal: 14,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 6,
    },
    boxMessage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    social: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        width: wp('100%'), 
        padding: 16, 
        overflow: 'hidden'
    },  
    icon: {
        fill: "#fff",
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 18,
        color: '#2f2f2f'
    },
    text: {
        color: 'gray',
        fontSize: 14
    }
});

export default Help;
