import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SeatingChart from '../../../components/SeatingChart'
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import CustomButton from '../../../components/CustomButton'
import CardNotification from "../../../components/CardNotification";
import Asientos from "../../../components/Asientos";
import Sofa from '../../../../assets/icons/sofa.svg'


export default function SeleccionarAsientos(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar title={ 'Boletería' } back={true} loggedIn={ true } />
            <ScrollView style={{flex: 1}}>
                <View style={{marginHorizontal: 14, marginBottom: 30}}>
                    <StyleText tag='Asientos' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Seleccionar</StyleText>

                    <CardNotification style={styles.carta} Icon={Sofa} subtitle={'Disponible: 2'} iconBackground={'#F7DC6F'}>
                        <Text>Patio VIP</Text>
                    </CardNotification>

                    <CardNotification style={styles.carta} Icon={Sofa} subtitle={'Disponible: 3'} iconBackground={'#48C9B0'}>
                        <Text>Patio General</Text>
                    </CardNotification>
                    
                    <StyleText tag='Area' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Seleccionar </StyleText>

                    <View style={styles.contenedor}>
                        <View style={styles.filas}>
                            <TouchableOpacity style={styles.galeria}>
                                <Text>Galería (O)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.galeria}>
                                <Text>Galería (E)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.filas}>
                            <TouchableOpacity style={styles.palcos}>
                                <Text>Palco (E)</Text>
                            </TouchableOpacity>

                            <View style={{backgroundColor: '#EAEAEA', width: 100, height: 40, justifyContent: 'center',
                            alignItems: 'center' }}>
                            </View>

                            <TouchableOpacity style={styles.palcos}>
                                <Text>Palco (O)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.filas}>
                            <TouchableOpacity style={styles.patios}>
                                <Text>Patio (E)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.patios}>
                                <Text>Patio (O)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.escenario}>
                            <Text>ESCENARIO</Text>
                        </View>
                    </View>

                    <StyleText tag='Asientos' size={'big'} style={{marginVertical: 14, justifyContent: 'center'}}>Información de </StyleText>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                        <View style={styles.leyenda}>
                            <Sofa width={20} height={20} fill={'#222'} />
                            <Text>Seleccionado</Text>
                        </View>

                        <View style={styles.leyenda}>
                            <Sofa width={20} height={20} fill={'rgb(150, 148, 148);'} />
                            <Text>No Disponible</Text>
                        </View>

                        <View style={styles.leyenda}>
                            <Sofa width={20} height={20} fill={'#F7DC6F'} />
                            <Text>Patio VIP</Text>
                        </View>

                        <View style={styles.leyenda}>
                            <Sofa width={20} height={20} fill={'#48C9B0'} />
                            <Text>Patio General</Text>
                        </View>
                    </View>

                    <View style={styles.boleteria}>
                        <Asientos>
                            PO1
                        </Asientos>
                    </View>

                    {/* <View style={{flex: 1}}>
                        <SeatingChart/>
                    </View> */}


                    <View style={{marginHorizontal: 14, marginVertical: 14}}>
                        <CustomButton text='Siguiente' screen='FormasPago'></CustomButton>
                    </View>
                    
                </View>
            </ScrollView>
            <BottomNavbar title={"Cartelera"} loggedIn={true} active={3} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    boleteria: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10, 
        padding: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
    },
    contenedor: {
        backgroundColor: '#ccc', 
        marginHorizontal: 14, 
        marginVertical: 10, 
        padding: 8
    },
    filas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4
    },  
    galeria: {
        backgroundColor: '#F2F2F2',
        width: 140,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    palcos: {
        backgroundColor: '#F2F2F2',
        width: 70,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    patios: {
        backgroundColor: '#F2F2F2',
        width: 140,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    escenario: {
        marginTop: 10,
        backgroundColor: '#EAEAEA',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 100,
        borderTopEndRadius: 100,
    },
    leyenda: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: wp('25%'),
        marginVertical: 6
    }
})