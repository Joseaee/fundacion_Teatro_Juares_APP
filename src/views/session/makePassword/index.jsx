import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../../../components/inputForm";

import Navbar from "../../../components/navbar";
import Password from "../../../../assets/icons/lock.svg";
import CustomButton from "../../../components/customButton";

function MakePassword({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inputPassword: "",
      inputPassword2: "",
    },
  });

  const onSubmit = () => {
    navigation.navigate("SuccessSession", {
      title: "Registrarse",
      message: "¡Registro de usuario exitoso!",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Navbar back={true} backArrowColor="#E31734" title={""} transparent={true} />
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
            <Text style={styles.title}>¡Haz tu Contraseña!</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", marginTop: hp("3%") }}
          >

            <InputForm Icon={Password} regExp={/^[a-zA-Z0-9_\.\-]{8}$/} placeholder='Contraseña' msjError='Contraseña Invalida' control={control} value='' name='inputPassword'/>
            {errors.inputPassword && (
              <Text style={styles.error}>Error en la contraseña.</Text>
            )}

            <InputForm Icon={Password} regExp={/^[a-zA-Z0-9_\.\-]{8}$/} placeholder='Repetir Contraseña' msjError='Las contraseñas no coinciden' control={control} value='' name='inputPassword2'/>
            {errors.inputPassword2 && (
              <Text style={styles.error}>Error en la contraseña.</Text>
            )}
          </View>

            <View style={{marginTop: 10}}>
              <CustomButton text={'Finalizar'} onPress={handleSubmit(onSubmit)} />
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
    fontWeight: "700",
    fontSize: hp("3%"),
    textAlign: "center",
  },
  input: {
    borderColor: "#656565",
    borderBottomWidth: 3,
    padding: "4%",
    fontSize: hp("2%"),
    color: "#2f2f2f",
    marginHorizontal: wp("10%"),
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

export default MakePassword;
