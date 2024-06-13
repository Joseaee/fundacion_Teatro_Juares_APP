import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/InputForm";

import Cedula from "../../../../assets/icons/cedula.svg";
import Password from "../../../../assets/icons/lock.svg";
import CustomButton from "../../../components/CustomButton";

function Login({ navigation }) {
    const [inputId, setInputId] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
        defaultValues: {
        cedula: "",
        password: "",
      },
    });

  const onSubmit = () => {
    navigation.navigate("Home");
  };

  return (
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
              }}
            >
              <Image
                style={styles.image}
                source={require("../../../../assets/logoo.png")}
              />
              <Text style={styles.title}>¡Iniciar Sesión!</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "center", marginTop: hp("2%") }}>
              <InputForm Icon={Cedula} regExp={/^[0-9]{7,8}$/} placeholder='Cedula' msjError='Cédula Invalida' control={control} value='' name='cedula'/>
              {errors.cedula && (
                <Text style={styles.error}>Error en la Cedula.</Text>
              )}
              
              <InputForm Icon={Password} regExp={/^[a-zA-Z0-9_\.\-]{8}$/} placeholder='Contraseña' msjError='Contraseña Invalida' control={control} value='' name='password'/>
              {errors.password && (
                <Text style={styles.error}>Error en la Contraseña.</Text>
              )}
            </View>

            <View style={{ marginTop: hp("1%") }}>
              <CustomButton
                text={"Iniciar Sesión"}
                screen={"Home"}
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
              <Text style={{ color: "#333" }}>¿No tienes una cuenta?</Text>
              <TouchableOpacity style={{ marginStart: 4 }}>
                <Text
                  style={styles.textLink}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigation.navigate("Register");
                  }}
                  onPress={(e) => {
                    e.stopPropagation();
                    navigation.navigate("Register");
                  }}
                >
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ flex: 1, alignItems: "center", marginTop: 10 }}
              onClick={(e) => {
                e.stopPropagation();
                navigation.navigate("ForgetPassword");
              }}
              onPress={(e) => {
                e.stopPropagation();
                navigation.navigate("ForgetPassword");
              }}
            >
              <Text style={styles.textLink}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
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
  },
});

export default Login;
