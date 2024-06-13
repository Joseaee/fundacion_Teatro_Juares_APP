import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/navbar'
import CustomButton from "../../../components/customButton";
import InputForm from "../../../components/inputForm";

import User from '../../../../assets/icons/user.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'
import Cedula from '../../../../assets/icons/cedula.svg'
import Correo from '../../../../assets/icons/envelope.svg'

function Register({ navigation }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cedula: "",
      nombres: "",
      apellidos: "",
      correo: "",
    },
  });

  const onSubmit = () => {
    navigation.navigate("MakePassword");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <Navbar title={''} back={true} loggedIn={false} transparent={true}/>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={60}
      >
        <View style={styles.containerForm}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={styles.image}
              source={require("../../../../assets/logoo.png")}
            />
            <Text style={styles.title}>¡Registro de Usuario!</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", marginTop: hp("3%") }}
          >
            <InputForm Icon={Cedula} regExp={/^[0-9]{7,8}$/} placeholder='Cedula' msjError='Cédula Invalida' control={control} value='' name='cedula'/>
            {errors.cedula && (
              <Text style={styles.error}>Error en la Cedula.</Text>
            )}

            <InputForm Icon={User} regExp={/^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/} placeholder='Nombre(s)' msjError='Nombre(s) Invalido' control={control} value='' name='nombres'/>
            {errors.nombres && (
              <Text style={styles.error}>Error en el Nombre(s).</Text>
            )}
            
            <InputForm Icon={UserGroup} regExp={/^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/} placeholder='Apellido(s)' msjError='Apellido(s) Invalido' control={control} value='' name='apellidos'/>
            {errors.apellidos && (
              <Text style={styles.error}>Error en los Apellido(s).</Text>
            )}

            <InputForm Icon={Correo} regExp={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/} placeholder='Correo Electrónico' msjError='Correo Invalido' control={control} value='' name='correo'/>
            {errors.correo && (
              <Text style={styles.error}>Error en el Correo.</Text>
            )}
          </View>
          <View style={{ marginTop: hp("1%") }}>
              <CustomButton
                text={"Continuar"}
                screen={"MakePassword"}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    padding: hp("3.5%"),
  },
  title: {
    color: "#2f2f2f",
    fontWeight: "bold",
    fontSize: hp("4%"),
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#2f2f2f",
    borderWidth: 2,
    fontSize: hp("2%"),
    color: "#2f2f2f",
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
  },
  button: {
    backgroundColor: "#CB2139",
    height: hp("5%"),
    width: hp("25%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fdfdfd",
    fontWeight: "700",
    fontSize: hp("2.5%"),
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 4
  },
});

export default Register;
