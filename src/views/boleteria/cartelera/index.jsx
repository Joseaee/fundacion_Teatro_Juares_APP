import {View, Text, StyleSheet, FlatList, ImageBackground, TextInput, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import Navbar from '../../../components/navbar';
import BottomNavbar from '../../../components/bottomNavbar';
import CardButton from '../../../components/CardButton';
import ButtonTab from '../../../components/ButtonTab';
import Search from '../../../../assets/icons/search.svg'

const renderCard = ({item})=>{
  return <CardButton source={item.poster} title={item.nombre} subtitle={item.categoria} />
}

export default function Cartelera(){
    const eventos = [
      {
        id: '1',
        nombre: 'Eventito',
        categoria: 'Obra Teatral',
        poster: require('../../../../assets/img/Servicios/obras.jpg')
      },
      {
        id: '2',
        nombre: 'Eventito 2',
        categoria: 'Concierto',
        poster: require('../../../../assets/img/Servicios/conciertos.jpg')
      },
      {
        id: '3',
        nombre: 'Evento 3',
        categoria: 'Concierto',
        poster: require('../../../../assets/img/Servicios/belleza.jpg')
      }
    ]

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
    return (
        <SafeAreaView style={{flex:1}}>
            <Navbar title='' loggedIn={true} />
            <View style={{height: 120, }}>
              <ImageBackground
                source={require('.:/../../assets/img/banner-cartelera.jpg')} 
                style={styles.backgroundImage}
              >
              <Text style={styles.title}>Cartelera de Eventos</Text>
              </ImageBackground>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.input}>
                <Search height={wp('5%')} width={hp('5%')} fill='gray' />
                <TextInput placeholder='Buscar Eventos...' style={{flex: 1}}/>
              </View>
              <ScrollView style={{marginHorizontal: hp('2%'), marginBottom: hp('0.8%'), height: 52}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ButtonTab isSelected={true}> 
                  Todos
                </ButtonTab>
                {categorias.map(item => <ButtonTab rowSeparation={8} key={item.id}>{item.nombre}</ButtonTab>)}
              </ScrollView>
              <FlatList data={eventos} renderItem={renderCard} keyExtractor={(item)=> item.id}/>
              
            </View>

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
    },
    buttonContainer: {
      width: 200,
      height: 100,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
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