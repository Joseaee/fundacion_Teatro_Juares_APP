import {View, Text, StyleSheet, FlatList, TextInput, ScrollView, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useAppSelector} from '../../../hooks/store';
import StyleText from '../../../components/StyleText'
import Banner from '../../../components/Banner';
import BottomNavbar from '../../../components/bottomNavbar';
import CardButton from '../../../components/CardButton';
import ButtonTab from '../../../components/ButtonTab';
import Search from '../../../../assets/icons/search.svg'
import { useNavigation } from '@react-navigation/native';
import { useBoleteriaActions } from '../../../hooks/useBoleteriaActions';
import { getEvents, getFilters } from "../../../store/selectors";
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';

const categorias = [
  {
    id: '1',
    nombre: 'Obra Teatral'
  },
  {
    id: '2',
    nombre: 'Concierto'
  },
  {
    id: '3',
    nombre: 'Danza'
  },
  {
    id: '4',
    nombre: 'Todo Público'
  },
]

export default function Cartelera(){
    const navigation = useNavigation();
    const eventos = useAppSelector((state)=> getEvents(state))
    const categoriaFiltro = useAppSelector((state)=> getFilters(state, {slice: 'boleteria', filter: 'categoria'}))
    const filtroNombreEvento = useAppSelector((state)=> state.boleteria.filtros.nombre)
    const [loading, setLoading] = useState(true)
    const {filterCategory, filterEvent, fetchingEvents} = useBoleteriaActions()

    useEffect(()=> {
      const loadEvents = async()=>{
        try {
          await fetchingEvents()
        } catch (error) {
          console.error(error)
        }finally{
          setLoading(false)
        }
        
      }
      
      loadEvents()
    },[])

    const ItemCard = ({item})=>{
      return <View style={{marginHorizontal: 14, marginVertical: 6}}>
          <CardButton source={{uri:`${API_URL}${item.imagen}`}} title={item.nombre} subtitle={item.categoria} onPress={()=> navigation.navigate('EventDetails', {
          id: item.nroEvento
        })}/>
      </View>

    }

    const filterEvents = (events)=>{
      return events.filter(event=>{
        return (filtroNombreEvento === '' || event.nombre.startsWith(filtroNombreEvento)) && (categoriaFiltro === 'all' || event.categoria === categoriaFiltro)
      })
    }

    const filteredEvents = filterEvents(eventos)

    const isSelected = (category)=> categoriaFiltro === category

    return (
        <SafeAreaView style={{flex:1}}>
            <Banner image={require('../../../../assets/img/banner-cartelera.jpg')} goBack={true}>
                <Text style={styles.title}>Cartelera de Eventos</Text>
            </Banner>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.input}>
                <Search height={wp('5%')} width={hp('5%')} fill='gray' />
                <TextInput placeholder='Buscar Eventos...' style={{flex: 1}} onChangeText={(text)=> filterEvent(text)} value={filtroNombreEvento}/>
              </View>
              <ScrollView style={{marginHorizontal: hp('2%'), marginBottom: hp('0.8%')}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ButtonTab isSelected={isSelected('all')} onPress={()=> filterCategory('all')}> 
                  Todos
                </ButtonTab>
                {categorias.map(item => <ButtonTab isSelected={isSelected(item.nombre)} rowSeparation={8} key={item.id} onPress={()=> filterCategory(item.nombre)}>{item.nombre}</ButtonTab>)}
              </ScrollView>
            </View>
                  { loading
                      
                    ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#E31734" />
                      </View>
                   : (filteredEvents.length === 0) 
                      ? <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}><StyleText tag="eventos" >No se encontraron</StyleText></View> 
                      : <FlatList style={{width: wp('100%')}} data={filteredEvents} renderItem={ItemCard} keyExtractor={(item)=> item.nroEvento}/>}

              <BottomNavbar
                title={ 'Cartelera' }
                loggedIn={ true }
                active={ 3 }
              />
        </SafeAreaView>
        
      
    );
  };
  
  const styles = StyleSheet.create({
    title:{
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 8,
      letterSpacing: 1,
    },
    buttonContainer: {
      width: 200,
      height: 100,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: '#eaeaea',
      padding: hp('.8%'),
      borderWidth: 2,
      borderColor: '#bbb',
      borderRadius: 20,
      marginHorizontal: hp('2%'),
      marginVertical: hp('2%')
    }
  });