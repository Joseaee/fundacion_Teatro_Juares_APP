import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
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

import User from '../../../../assets/icons/user.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'
import Cedula from '../../../../assets/icons/cedula.svg'
import Correo from '../../../../assets/icons/envelope.svg'

function Register({ navigation }) {
  const [inputId, setInputId] = useState(false);
  const [inputFistName, setInputFistName] = useState(false);
  const [inputLastName, setInputLastName] = useState(false);
  const [inputMail, setInputMail] = useState(false);

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
            <View
              style={[
                styles.input,
                {
                  marginTop: hp("0.5%"),
                  borderColor: inputId ? "#CB2139" : "#656565",
                },
              ]}
            >
            <Cedula height={wp("5%")} width={hp("5%")} fill="#555"/>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[0-9]{7,9}$/,
                    message: "Ingrese una cedula valida",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Cedula"
                    placeholderTextColor="#656565"
                    keyboardType="number-pad"
                    onFocus={() => {
                      setInputId(true);
                    }}
                    onBlur={() => {
                      onBlur;
                      setInputId(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="cedula"
              />
            </View>
            {errors.cedula && (
              <Text style={styles.error}>Error en la cedula.</Text>
            )}
            <View
              style={[
                styles.input,
                {
                  marginTop: hp("0.5%"),
                  borderColor: inputFistName ? "#CB2139" : "#656565",
                },
              ]}
            >
            <User height={wp("5%")} width={hp("5%")} fill="#555"/>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/,
                    message: "Ingrese un nombre valido",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Nombre(s)"
                    placeholderTextColor="#656565"
                    onFocus={() => {
                      setInputFistName(true);
                    }}
                    onBlur={() => {
                      onBlur;
                      setInputFistName(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="nombres"
              />
            </View>
            {errors.nombres && (
              <Text style={styles.error}>Error en el nombre(s).</Text>
            )}
            <View
              style={[
                styles.input,
                {
                  marginTop: hp("0.5%"),
                  borderColor: inputLastName ? "#CB2139" : "#656565",
                },
              ]}
            >
                <UserGroup height={wp("5%")} width={hp("5%")} fill="#555"/>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/,
                    message: "Ingrese apellido valido",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Apellido(s)"
                    placeholderTextColor="#656565"
                    onFocus={() => {
                      setInputLastName(true);
                    }}
                    onBlur={() => {
                      onBlur;
                      setInputLastName(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="apellidos"
              />
            </View>
            {errors.apellidos && (
              <Text style={styles.error}>Error en los apellido(s).</Text>
            )}
            <View
              style={[
                styles.input,
                {
                  marginTop: hp("0.5%"),
                  borderColor: inputMail ? "#CB2139" : "#656565",
                },
              ]}
            >
                <Correo height={wp("5%")} width={hp("5%")} fill="#555"/>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Ingrese un correo valido",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ flex: 1 }}
                    placeholder="Correo electronico"
                    placeholderTextColor="#656565"
                    keyboardType="email-address"
                    onFocus={(e) => {
                      setInputMail(true);
                    }}
                    onBlur={(e) => {
                      onBlur;
                      setInputMail(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="correo"
              />
            </View>
            {errors.correo && (
              <Text style={styles.error}>Error en el correo.</Text>
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
    padding: "4%",
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
  },
});

export default Register;
