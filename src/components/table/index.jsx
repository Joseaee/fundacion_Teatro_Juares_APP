import { View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';


function Table ({ datos, title, existData}) {

    const vacio = {

        Compra: 'No hay Compras Realizadas'
    }

    const result = (existData) ? datos : vacio;

    return (
        <View style={ styles.cardInfo }>
            <View style={ styles.headerCard }>
                <Text style= {styles.title}>{title}</Text>
            </View>
        {Object.entries(result).map(([key, value], index) => (

            <View key={index} style={{flexDirection: 'row', marginTop: hp('1%'), marginBottom: hp('1%')}}>
                <View style= {{flex: 1, alignItems: 'center'}}>
                    <Text style={styles.subTitle}>{key}:</Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.text}>{value}</Text>
                </View>
            </View>
        ))}
        </View>
    )
}

const styles = StyleSheet.create({


    subTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: wp('1%'),
        color: '#000',
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginLeft: wp('1%'),
        color: '#fff',
    },
    text: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#000',
    },
    cardInfo: {
        marginTop: hp('2%'),
        marginVertical: 12,
        backgroundColor: '#fff',
        marginHorizontal: 12,
        borderRadius: 10,
        elevation: 6
    },
    headerCard: {
        flexDirection: 'row', 
        backgroundColor: '#000', 
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10, 
        paddingHorizontal: 20, 
        paddingVertical: 10
    }
        
});
export default Table;