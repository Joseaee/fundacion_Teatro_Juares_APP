import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';

import Navbar from '../../../components/navbar';
import CustomButton from '../../../components/CustomButton';

function SuccessDate( {route} ) {

    const receiveParams = route.params;

    return(

        <SafeAreaView style={ {flex: 1,} }>
            <LinearGradient 
                colors={ ['#710014', '#E31744',  '#E31734'] }
                start={ { x: 0, y: 0 } }
                end={ { x: 1, y: 0 } }
                style={ {flex: 1, justifyContent: 'center',} }
            >   
                <Navbar
                    title={ receiveParams.title }
                />
                <View style={ {flex: 1, justifyContent: 'center'} }>
                    <View style={ styles.containerForm }>
                        <View style={ {flex: 0.5, alignItems: 'center', justifyContent: 'center',} }>
                                <Image
                                    style={ styles.image }
                                    source={require('../../../../assets/img/logo.png')}
                                />
                        </View>
                        <View style={ {flex: 0.2, alignItems: 'center', justifyContent: 'center', marginHorizontal: wp('5%')} }>
                                <Text style={ styles.title }>{receiveParams.message}</Text>
                        </View>
                        <View style={ {flex: 0.2, justifyContent: 'center', alignItems: 'center',} }>
                            <CustomButton
                                text={ 'Aceptar' }
                                screen={ 'Home' }
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    containerForm:{
        height: hp('35%'),
        marginHorizontal: wp('10%'),
        backgroundColor: '#fdfdfd',
    },
    image:{
        height: hp('15%'),
        width: hp('13%'),
    },
    title:{
        color: '#2f2f2f',
        fontWeight: '700',
        fontSize: hp('3%'),
        textAlign: 'center',
    },
});

export default SuccessDate;