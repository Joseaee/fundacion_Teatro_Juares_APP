import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {  widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useForm } from "react-hook-form";
import { useEncryption } from "../../../hooks/encryption";
import { useAuthActions } from "../../../hooks/useAuthActions";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { setLoading } from "../../../store/auth/slice";
import axios from "axios";
import { API_URL } from "../../../config/constants";

import Navbar from "../../../components/navbar";
import CustomButton from "../../../components/customButton";
import Correo from "../../../../assets/icons/envelope.svg";

import InputForm from "../../../components/inputForm";

function CodePassword({ navigation }) {

  
  const loading = useAppSelector((state)=> state.auth.loading)
  const dispatch = useAppDispatch()
  const { encryptData } = useEncryption();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data) => {

    const encryptedData = encryptData(JSON.stringify(data));
    dispatch(setLoading(true))

    axios({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        url: 'app',
        type: 'forgetPassword'
      },
      data: {
        codeRecover: encryptedData
      }
    }).then(function (response) {

        navigation.navigate("ChangePassword");
    }).catch(function (error) {

      setError('code', {
        type: 'manual',
        message: error.response.data.message})

    }).finally (function () {
      dispatch(setLoading(false))
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Navbar
        title={""}
        back={true}
        backArrowColor="#E31734"
        loggedIn={false}
        transparent={true}
        screen={'ForgetPassword'}
      />
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
            <Text style={styles.title}>
              ¡Ingrese el código enviado a su correo!
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", marginTop: hp("2%") }}
          >
            <InputForm
              Icon={Correo}
              regExp={/^[0-9]{5}$/}
              placeholder="Código enviado a su correo"
              msjError="Código Invalido"
              control={control}
              value=""
              name="code"
              required={{ value: true, message: 'EL codigo es requerido' }}
              maxLength={5}
            />
            {errors.code && (
              <Text style={styles.error}>{errors.code.message}.</Text>
            )}
          </View>

          <View style={{ marginTop: hp("1%") }}>
            <CustomButton
              text={"Continuar"}
              screen={"ChangePassword"}
              onPress={handleSubmit(onSubmit)}
              loading={loading}
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

export default CodePassword;
