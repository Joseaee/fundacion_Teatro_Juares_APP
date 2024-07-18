import { View, Text, StyleSheet, TouchableOpacity, Button, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import React, { useState } from 'react';
import CustomModal from '../CustomModal';

import BackArrow from "../../../assets/icons/goback-arrow.svg";
import UserCircle from "../../../assets/icons/userCircle.svg";
import Bell from "../../../assets/icons/bell.svg";
import DoorExit from "../../../assets/icons/door.svg";
import { useAuthActions } from '../../hooks/useAuthActions'


function Navbar( {title, screen, back, backArrowColor = 'white',loggedIn, inverted, transparent, icons = {
  logout: false,
  bell: true,
  user: true
}} ) {

  const navigation = useNavigation();
  const {logout} = useAuthActions()

  const [modalVisible, setModalVisible] = useState(false);

  const colorGradient = transparent
    ? ["transparent", "transparent"]
    : inverted
    ? ["#E31734", "#E31744", "#710014"]
    : ["#710014", "#E31744", "#E31734"];

  return (
    <>
      <LinearGradient
        colors={colorGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          {back ? (
            <BackArrow
              height={wp("8%")}
              width={hp("5%")}
              fill={backArrowColor}
              onPress={() => {
                screen
                  ? navigation.navigate(screen)
                  : navigation.dispatch(CommonActions.goBack());
              }}
            />
          ) : null}
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          {loggedIn ? (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              {
                icons.bell ? 
                <Bell 
                height={26}
                width={36} 
                fill={"white"} onPress={()=> {
                navigation.navigate('Notification')
              }}/>
                : null
              }
              {
                icons.user ? 
                <UserCircle
                height={28}
                width={36}
                fill={"white"}
                style={{marginStart: 10}}
                onPress={()=> {
                  navigation.navigate('DataUser')
                }}/>
                : null
              }
              {
                icons.logout ? 
                <DoorExit
                height={28}
                width={36}
                fill={"white"}
                style={{marginStart: 10}}
                onPress={() => setModalVisible(true)}
                />
                : null
              }
              
            </View>
          ) : null}
          <CustomModal
            icons={
              {
                question: true,
              }
            }
            title="¿Desea cerrar la sesión?"
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </LinearGradient>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    height: hp("8%"),
    padding: hp("2%"),
    width: wp("100%"),
    flexDirection: "row",
    zIndex: 2,
  },
  title: {
    color: "#f1f1f1",
    fontWeight: "700",
    fontSize: hp("2%"),
    textAlign: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },
  containerMenu: {
    width: wp("40%"),
    borderWidth: 1,
    borderColor: "#DBDAD1",
    marginTop: hp("0.5%"),
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 3,
  },
  itemMenu: {
    paddingVertical: hp("1%"),
    paddingHorizontal: hp("1%"),
    borderBottomWidth: 1,
    borderBottomColor: "#DBDAD1",
    borderRadius: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: hp("2.2%"),
  },
});

export default Navbar;
