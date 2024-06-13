import {Text, View, StyleSheet} from 'react-native'
import SeatingChart from '../../../components/SeatingChart'
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import CustomButton from '../../../components/CustomButton'


export default function SeleccionarAsientos(){
    return (
        <View style={{flex: 1}}>
            <Navbar title='' transparent={true} back={true} backArrowColor='#E31734'/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <StyleText tag='Area' size='big'>Seleccionar</StyleText>
            </View>
            <View style={{flex: 1}}>
                <SeatingChart/>
            </View>
            <CustomButton text='Siguiente!' screen='FormasPago'></CustomButton>
            <BottomNavbar title={"Cartelera"} loggedIn={true} active={3} />
        </View>
    )
}