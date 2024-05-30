import {Text, View, StyleSheet} from 'react-native'
import SeatingChart from '../../../components/SeatingChart'
import BottomNavbar from '../../../components/bottomNavbar'


export default function SeleccionarAsientos(){
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <SeatingChart/>
            </View>
            <BottomNavbar title={"Cartelera"} loggedIn={true} active={3} />
        </View>
    )
}