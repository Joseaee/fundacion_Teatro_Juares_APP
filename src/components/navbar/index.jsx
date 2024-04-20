import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native';

import BackArrow from '../../../assets/icons/goback-arrow.svg';
import UserCircle from '../../../assets/icons/userCircle.svg';

function Navbar( {title, screen, back, loggedIn, inverted, transparent} ) {

    const navigation = useNavigation();
    const [activeMenu, setActiveMenu] = useState(false);
    const [onSelected, setOnSelected] = useState([0,0, 0]);

    const colorGradient = (transparent) ? ['transparent', 'transparent'] : 
    (inverted) ? ['#E31734', '#E31744',  '#710014'] : ['#710014', '#E31744',  '#E31734']

    return(
        <>
            <LinearGradient 
                colors={ colorGradient }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ styles.container }
            >  
                <View style={ {flex: 1} }>
                    {back ? 
                    <BackArrow 
                        height={ wp('8%') } 
                        width={ hp('5%') } 
                        fill={ (transparent) ? '#E31734' :'white' }
                        onPress={ () => {screen ? navigation.navigate(screen) : navigation.dispatch(CommonActions.goBack());} } 
                    /> : null}
                </View>
                <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center',} }>
                    <Text style={ styles.title }>{ title }</Text>
                </View>
                <View style={ {flex: 1, justifyContent: 'center', alignItems: 'flex-end'} }>
                    {loggedIn ?
                    <UserCircle 
                        height={ wp('10%') } 
                        width={ hp('5%') } 
                        fill={ 'white' }
                        onPress={ () => {activeMenu ? setActiveMenu(false) : setActiveMenu(true); setOnSelected([0, 0, 0]);} } 
                    /> : null}
                </View>
            </LinearGradient>
            {activeMenu ? 
            <View style={ {alignItems: 'flex-end', marginEnd: wp('1%'),} }>
                <View style={ styles.containerMenu }>
                    <TouchableOpacity 
                        style={ [styles.itemMenu,  onSelected[0] ? { backgroundColor: '#DBDAD1',} : null] }
                        onPressIn={ () =>{setOnSelected([1, 0, 0]);} }
                        onPressOut={ () =>{setOnSelected([0, 0, 0]);} }
                        onPress={ () => {navigation.navigate('DataUser');} } 
                    >
                        <Text style={ [styles.text, onSelected[0] ? { color: '#710014',} : null] }>Mi perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={ [styles.itemMenu,  onSelected[1] ? { backgroundColor: '#DBDAD1',} : null] }
                        onPressIn={ () =>{setOnSelected([0, 1, 0]);} }
                        onPressOut={ () =>{setOnSelected([0, 0, 0]);} }
                        onPress={ () => {navigation.navigate('Help');} } 
                    >
                        <Text style={ [styles.text, onSelected[1] ? { color: '#710014',} : null] }>Ayuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={ [styles.itemMenu,  onSelected[2] ? { backgroundColor: '#DBDAD1',} : null] }
                        onPressIn={ () =>{setOnSelected([0, 0, 1]);} }
                        onPressOut={ () =>{setOnSelected([0, 0, 0]);} }
                        onPress={ () => {navigation.navigate('Login')} } 
                    >
                        <Text style={ [styles.text, onSelected[2] ? { color: '#710014',} : null] }>Cerra Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View> : null}
        </>
    );
}


const styles = StyleSheet.create({

    container:{
        height: hp('8%'),
        padding: hp('2%'),
        width: wp('100%'),
        flexDirection: 'row',
        zIndex: 2,
    },
    title:{
        color: '#f1f1f1',
        fontWeight: '700',
        fontSize: hp('2%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    containerMenu:{
        width: wp('40%'),
        borderWidth: 1, 
        borderColor:'#DBDAD1',
        marginTop: hp('0.5%'),
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 3,
    },
    itemMenu:{
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('1%'),
        borderBottomWidth: 1, 
        borderBottomColor:'#DBDAD1',
        borderRadius: 10,
    },
    text:{
        fontWeight:'500',
        fontSize: hp('2.2%'),
    },
});

export default Navbar;