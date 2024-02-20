import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';

import Navbar from '../../../components/navbar';
import BottomNavbar from '../../../components/bottomNavbar';

function DataUser({ navigation }) {

    return(
        
        <SafeAreaView style={ {flex: 1,} }>
            <Navbar
                title={ 'Inicio' }
                loggedIn={ true }
            />
            <View style={ {flex: 1,} }>

            </View>
            <BottomNavbar
                title={ 'Inicio' }
                loggedIn={ true }
                active={ 1 }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   
});

export default DataUser;