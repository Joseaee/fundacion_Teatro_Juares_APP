import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { useEncryption } from "../../../hooks/encryption";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../hooks/store';
import { addUser } from '../../../store/user/slice';
import { regExp } from "../../../hooks/constants";
import { API_URL } from "../../../config/constants";
import axios from 'axios';

import Navbar from "../../../components/navbar";
import CustomButton from "../../../components/customButton";
import InputForm from "../../../components/inputForm";

import User from "../../../../assets/icons/user.svg";
import UserGroup from "../../../../assets/icons/user-group.svg";
import Cedula from "../../../../assets/icons/cedula.svg";
import Correo from "../../../../assets/icons/envelope.svg";

function Register({ navigation }) {

  const user = useAppSelector((state)=> state.user)
  const dispatch = useAppDispatch()
  const { encryptData } = useEncryption();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cedula: user.cedula,
      nombres: user.nombres,
      apellidos: user.apellidos,
      correo: user.correo,
    },
  });

  existCedula = (value) =>{
    const encryptedData = encryptData(JSON.stringify(value));

    return axios({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        url: 'app',
        type: 'register'
      },
      data: {
        idUser: encryptedData
      }
    }).catch(function (error) {

      return'La cedula ingresada ya esta registrada en el sistema.'
    })
  }

  existCorreo = (value) =>{
    const encryptedData = encryptData(JSON.stringify(value));

    return axios({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        url: 'app',
        type: 'register'
      },
      data: {
        idUser: encryptedData
      }
    }).catch(function (error) {

      return'El correo ingresado ya esta registrada en el sistema.'
    })
  }

  const onSubmit = (data) => {

    dispatch(addUser(data));
    navigation.navigate("MakePassword");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Navbar title={""} back={true} backArrowColor="#E31734" loggedIn={false} transparent={true} />
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
            <InputForm
              Icon={Cedula}
              regExp={regExp.cedula}
              placeholder="Cedula"
              msjError="Cédula Invalida"
              control={control}
              validate={existCedula}
              value={user.cedula}
              required={{ value: true, message: 'La cedula es requerida.' }}
              name="cedula"
              keyboardType={"number-pad"}
              maxLength={8}
            />
            {errors.cedula && (
              <Text style={styles.error}>{errors.cedula.message}</Text>
            )}

            <InputForm
              Icon={User}
              regExp={regExp.nombreUsuario}
              placeholder="Nombre(s)"
              msjError="Nombre(s) Invalido"
              control={control}
              value={user.nombres}
              required={{ value: true, message: 'El nombre es requerido.' }}
              name="nombres"
            />
            {errors.nombres && (
              <Text style={styles.error}>{errors.nombres.message}</Text>
            )}

            <InputForm
              Icon={UserGroup}
              regExp={regExp.apellidoUsuario}
              placeholder="Apellido(s)"
              msjError="Apellido(s) Invalido"
              control={control}
              value={user.apellidos}
              required={{ value: true, message: 'El apellido es requerido.' }}
              name="apellidos"
            />
            {errors.apellidos && (
              <Text style={styles.error}>{errors.apellidos.message}</Text>
            )}

            <InputForm
              Icon={Correo}
              regExp={regExp.email}
              placeholder="Correo Electrónico"
              msjError="Correo Invalido"
              control={control}
              validate={existCorreo}
              value=""
              required={{ value: true, message: 'El correo es requerido.' }}
              name="correo"
              keyboardType={"email-address"}
            />
            {errors.correo && (
              <Text style={styles.error}>{errors.correo.message}</Text>
            )}
          </View>
          <View style={{ marginTop: hp("1%") }}>
            <CustomButton
              text={"Continuar"}
              onPress={handleSubmit(onSubmit)}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              height: 40,
              marginVertical: 12,
            }}
          >
            <View style={styles.line} />
            <Text style={styles.other}>Más Opciones</Text>
            <View style={styles.line} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#333" }}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity style={{ marginStart: 4 }}>
              <Text
                style={styles.textLink}
                onClick={(e) => {
                  e.stopPropagation();
                  navigation.navigate("Login");
                }}
                onPress={(e) => {
                  e.stopPropagation();
                  navigation.navigate("Login");
                }}
              >
                Inicia Sesión
              </Text>
            </TouchableOpacity>
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
  textLink: {
    color: "#0d6efd",
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  other: {
    marginHorizontal: 12,
    color: "#2f2f2f",
    opacity: 0.7,
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#2f2f2f",
    opacity: 0.4,
    flex: 1,
    height: 3,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 4,
  },
});

export default Register;
