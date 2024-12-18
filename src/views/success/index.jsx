import React from 'react';
import { View, Text, StyleSheet, Image, Platform, BackHandler  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp }from 'react-native-responsive-screen';
import { useFocusEffect } from '@react-navigation/native';

import CustomButton from '../../components/customButton';
import CheckIcon from '../../../assets/icons/circle-check.svg';

function Success ( {route} ) {

    const receiveParams = route.params;

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          // Retorna true para bloquear la acción de retroceso
          return true;
        };
  
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
    );

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={60}
        >
          <View style={styles.containerForm}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 100
              }}
            >
              <Image
                style={styles.image}
                source={require("../../../assets/logoo.png")}
              />
              <CheckIcon height={hp("10%")} width={wp("12%")} marginTop={10} fill="#2B9F3B"/>
              <Text style={styles.title}>{receiveParams.message}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "center", marginTop: hp("2%") }}>
            <CustomButton text={'Aceptar'} screen={receiveParams.screen ? receiveParams.screen : 'Login'} />
            </View>
          </View>
        </KeyboardAwareScrollView>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    containerForm: {
        padding: hp("3.5%"),
        marginVertical: hp("7.5%"),
    },
    title: {
        color: "#2f2f2f",
        fontWeight: "bold",
        fontSize: hp("4%"),
        textAlign: "center",
    },
    subtitle: {
        color: "#686868",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
    },
});

export default Success;