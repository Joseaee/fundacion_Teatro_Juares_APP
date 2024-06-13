import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native';

import Home from '../../../assets/icons/home.svg';
import Help from '../../../assets/icons/help.svg';
import Film from '../../../assets/icons/film.svg';
import News from '../../../assets/icons/news.svg';
import Chat from '../../../assets/icons/chat.svg';

function BottomNavbar( {active, screen,} ) {

    const navigation = useNavigation();

    return(
        
        <View 
            style={ styles.container }
        >  
            <TouchableOpacity style={ styles.column } onPress={ () => {navigation.navigate('Home')} } >
                <Home 
                    height={ wp('5%') } 
                    width={ hp('5%') } 
                    fill={ (active == 1) ? '#E31734' : 'grey' }
                />
                <Text style={ [styles.text, {color: (active == 1) ? '#E31734' : 'grey'}] }>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.column } onPress={ () => {navigation.navigate('Chat')} } >
                <Chat 
                    height={ wp('5%') } 
                    width={ hp('5%') } 
                    fill={ (active == 2) ? '#E31734' : 'grey' }
                />
                <Text style={ [styles.text, {color: (active == 2) ? '#E31734' : 'grey'}] }>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.column } onPress={ () => {navigation.navigate('Cartelera')} }>
                <LinearGradient 
                    colors={  ['#E31734', '#E31744',  '#710014'] }
                    start={ { x: 0, y: 0 } }
                    end={ { x: 0, y: 1 } }
                    style={ styles.circle }
                >
                    <Film 
                        height={ wp('6%') } 
                        width={ hp('6%') } 
                        fill={ (active == 3) ? '#fafafa' : 'white' }
                    />
                </LinearGradient>
                <Text style={ [styles.text, {color: (active == 3) ? '#E31734' : 'grey'}] }>Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.column } onPress={ () => {navigation.navigate(/*'News'*/'Home')} }>
                <News 
                    height={ wp('5%') } 
                    width={ hp('5%') } 
                    fill={ (active == 4) ? '#E31734' : 'grey' }
                />
                <Text style={ [styles.text, {color: (active == 4) ? '#E31734' : 'grey'}] }>Noticias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.column } onPress={ () => {navigation.navigate('Help')} } >
                <Help 
                    height={ wp('5%') } 
                    width={ hp('5%') } 
                    fill={ (active == 5) ? '#E31734' : 'grey' }
                />
                <Text style={ [styles.text, {color: (active == 5) ? '#E31734' : 'grey'}] }>Ayuda</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: 'row',
        borderTopWidth: 2, 
        borderTopColor:'#DBDAD1',
    },
    column:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: hp('2%'),
    },
    text:{
        color: 'grey',
        fontWeight:'600',
        fontSize: hp('1.4%'),
        textAlign: 'center',
        textAlignVertical: 'bottom',
    },
    circle:{
        backgroundColor: '#0D0060',
        borderRadius: 9999,
        alignItems: 'center',
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
});

export default BottomNavbar;