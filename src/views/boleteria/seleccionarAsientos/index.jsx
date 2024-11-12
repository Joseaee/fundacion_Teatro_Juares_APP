import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import SeatingChart from '../../../components/SeatingChart'
import BottomNavbar from '../../../components/bottomNavbar'
import Navbar from '../../../components/navbar'
import StyleText from '../../../components/StyleText'
import CustomButton from '../../../components/customButton'
import CardNotification from "../../../components/CardNotification";
import Card from '../../../components/Card';
import Asientos from "../../../components/Asientos";
import Sofa from '../../../../assets/icons/sofa.svg';
import { useAppSelector } from '../../../hooks/store';
import { useEffect, useState } from 'react';
import { getLotes, getTicketsFunction, getTotalPrize } from '../../../store/selectors';
import { API_URL } from '../../../config/constants';
import axios from 'axios';
import { useStorage } from '../../../hooks/localStorage';
import { useBoleteriaActions } from '../../../hooks/useBoleteriaActions';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFormatedDate } from 'react-native-modern-datepicker';


export default function SeleccionarAsientos() {
    const navigation = useNavigation()
    const route = useRoute()
    const {fecha, horaInicio, horaFinal, evento, idFuncion} = route.params
    const {getDateFormated} = useFormatDate()
    const {setSeats, newFactura} = useBoleteriaActions()
    const [selectedLote, setSelectedLote] = useState('')
    const [selectedArea, setSelectedArea] = useState('')
    const [selectedSection, setSelectedSection] = useState('')
    const [loading, setLoading] = useState(false)
    const [asientos, setAsientos] = useState([])
    const boletos = useAppSelector(state=> getTicketsFunction(state,{idFuncion}))
    const factura = useAppSelector(state=> state.boleteria.factura)
    const lotesBoletos = useAppSelector(state => getLotes(state, {idFuncion}))
    const montoTotal = useAppSelector(state=> getTotalPrize(state, {idFuncion}))
    const {getItem} = useStorage()
    const lote = boletos.find(boleto=> boleto.id === selectedLote)
    const colorSelected = (lote) ? lote.color : '#222'
    const secciones = [
        {id: 1, title: 'Galería Oeste', width: 140, height:60, area: 'galeria', seccion: 'oeste'},
        {id: 2,title: 'Galería Este', width: 140, height:60, area: 'galeria', seccion: 'este'},
        {id: 3,title: 'Palco Oeste', width: 90, height:100, area: 'balcon', seccion: 'oeste'},
        {id: 4, title: 'Palco Este', width: 90, height:100, area: 'balcon', seccion: 'este'},
        {id: 5, title: 'Patio Oeste', width: 140, height:80, area: 'patio', seccion: 'oeste'},
        {id: 6,title: 'Patio Este', width: 140, height:80, area: 'patio', seccion: 'este'},
    ]

    useEffect(()=>{
        const loadAsientos = async () => {
            setLoading(true)
            try {
              const token = await getItem("userToken");
              const response = await axios({
                method: "POST",
                url: API_URL,
                responseType: "json",
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                  url: "app",
                  type: "asientos"
                },
                data: {
                    lotes: JSON.stringify(lotesBoletos)
                }
              });
      
              setAsientos(response.data.data)
            } catch (error) {
              console.error(error)
            }finally{
                setLoading(false)
            }
          };
      
          loadAsientos();
    },[])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar title={'Boletería'} back={true} loggedIn={true} />
            <ScrollView >
                <View style={{ marginHorizontal: 14, marginBottom: 30 }}>
                    <StyleText tag='Asientos' size={'big'} style={{ marginVertical: 14, justifyContent: 'center' }}>Seleccionar</StyleText>
                    {boletos.map(item=>{
                        const selected = (selectedLote && selectedLote === item.id) ? true : false
                        return(
                            <CardNotification selected={selected} colorSelected={item.color} key={item.id} onPress={()=>{
                                setSelectedLote(item.id)
                                setSelectedArea('')
                                setSelectedSection('')
                            }} checkButton={false} Icon={Sofa} subtitle={`Por Seleccionar: ${item.cantidad - item.asientos.length}`} iconBackground={item.color}>
                        <Text>{item.nombre}</Text>
                    </CardNotification>
                        )
                    })}
                    {
                        selectedLote
                        ?
                            loading 
                            ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <ActivityIndicator size="large" color="#E31734" />
                          </View>
                            : 
                            <>
                            <StyleText tag='Area' size={'big'} style={{ marginVertical: 14, justifyContent: 'center' }}>Seleccionar </StyleText>
                            <View style={styles.contenedor}>
                            
                            <View style={styles.filas}>
                            {secciones.map(item=>{

                                const cantidad = (asientos[selectedLote][item.area]) 
                                ? (asientos[selectedLote][item.area][item.seccion]) 
                                    ? asientos[selectedLote][item.area][item.seccion].length 
                                    : 0
                                : 0
                                return(
                                    <Card disabled={cantidad === 0} key={item.id} title={item.title} width={item.width} height={item.height} borderColorSelected={"#222"} onPress={()=>{
                                        setSelectedArea(item.area)
                                        setSelectedSection(item.seccion)
                                    }}>
                                    {
                                        (cantidad === 0)
                                        ? null
                                        : <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                                        <Text>{cantidad}</Text>
                                        <Sofa
                                            height={12}
                                            width={12}
                                            fill={colorSelected}
                                        />
                                    </View>
                                    }
                                    
                                </Card>
                                )
                            })}
                            </View>
    
                            <View style={styles.escenario}>
                                <Text>ESCENARIO</Text>
                            </View>
                        </View>
                            </>
                        : null
                    }
                    
                    {
                        selectedArea
                        ? loading
                            ? 
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <ActivityIndicator size="large" color="#E31734" />
                             </View>
                            :
                            <>
                                <StyleText tag='Asientos' size={'big'} style={{ marginVertical: 14, justifyContent: 'center' }}>Información de </StyleText>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <View style={styles.leyenda}>
                                        <Sofa width={20} height={20} fill={'#222'} />
                                        <Text>Seleccionado</Text>
                                    </View>

                                    <View style={styles.leyenda}>
                                        <Sofa width={20} height={20} fill={'rgb(150, 148, 148);'} />
                                        <Text>No Disponible</Text>
                                    </View>
                                    <View style={styles.leyenda}>
                                        <Sofa width={20} height={20} fill={colorSelected} />
                                        <Text>Disponibles</Text>
                                    </View>
                                </View>

                                <View style={styles.boleteria}>
                                    {asientos[selectedLote][selectedArea][selectedSection].map(item=>{
                                        const asientos = lote.asientos ?? []
                                        return(
                                            <Asientos selected={asientos.includes(item.boleto)} disabled={asientos.length === lote.cantidad && !asientos.includes(item.boleto)} key={item.asiento} color={colorSelected} onPress={()=>{
                                                if(asientos.includes(item.boleto)){
                                                    const filterAsientos = asientos.filter(i=> i != item.boleto)
                                                    setSeats({lote: selectedLote, asientos: filterAsientos})
                                                }else{
                                                    const newAsientos = [...asientos, item.boleto]
                                                    setSeats({lote: selectedLote, asientos: newAsientos})
                                                }
                                                
                                               
                                            }}>
                                            {item.asiento}
                                            </Asientos>
                                        )
                                    })}
                                    
                                </View>
                            </>
                        : null
                    }

{
                    boletos.some(item => item.asientos.length !== item.cantidad)
                    ? null
                    : <View style={{marginHorizontal: 14, marginVertical: 14 }}>
                    <CustomButton text='Siguiente' onPress={()=>{
                        
                        newFactura({
                            evento,
                            funcion: `${fecha} ${horaInicio} - ${horaFinal}`,
                            formasPago: [],
                            montoTotal,
                            idFuncion
                        })
                        navigation.navigate('FormasPago', {
                            idFuncion
                        })
                    }}></CustomButton>
                    </View>
                    }
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
        padding: 8,
        flex: 1
    },
    filas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        flexWrap: 'wrap'
        
    },
    galeria: {
        backgroundColor: '#F2F2F2',
        borderWidth: 2,
        borderColor: '#48C9B0',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    palcos: {
        backgroundColor: '#F2F2F2',
        width: 84,
        height: 100,
        borderWidth: 2,
        borderColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    patios: {
        backgroundColor: '#ddd',
        width: 140,
        height: 90,
        borderWidth: 2,
        borderColor: '#ddd',
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