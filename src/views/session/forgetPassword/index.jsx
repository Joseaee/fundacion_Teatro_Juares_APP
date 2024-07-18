import { View, Text, StyleSheet, Image, Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from '../../../hooks/store';
import { addCorreo } from '../../../store/user/slice';
import { confirmEmail } from '../../../store/user/thunks';
import { useEncryption } from "../../../hooks/encryption";

import Navbar from "../../../components/navbar";
import CustomButton from "../../../components/customButton";
import InputForm from "../../../components/inputForm";
import Correo from "../../../../assets/icons/envelope.svg";

function ForgetPassword({ navigation }) {

  const user = useAppSelector((state)=> state.user.correo)
  const loading = useAppSelector((state)=> state.auth.loading)
  const dispatch = useAppDispatch()
  const { encryptData } = useEncryption();

  const {
    control,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      correo: "",
    },
  });

  const onSubmit = async (data) => {

    try {

      const encryptedData = encryptData(JSON.stringify(data));

      if(await dispatch(confirmEmail(encryptedData)).unwrap()){

        dispatch(addCorreo(data));
        navigation.navigate("CodePassword");
      }
    } catch (error) {

      setError("correo", {
        type: "manual",
        message: error.message,
      });
    }
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Navbar
        title={""}
        back={true}
        backArrowColor="#E31734"
        loggedIn={false}
        transparent={true}
        screen={'Login'}
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
            <Text style={styles.title}>¡Recuperar Contraseña!</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", marginTop: hp("2%") }}
          >
            <InputForm
              Icon={Correo}
              regExp={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
              placeholder="Correo Electrónico"
              msjError="Correo Invalido"
              control={control}
              value=""
              name="correo"
              required={{ value: true, message: 'El correo es requerido' }}
              onChangeFunction={() => {
                clearErrors("correo");
              }}
            />
            {errors.correo && (
              <Text style={styles.error}>{errors.correo.message}.</Text>
            )}
          </View>

          <View style={{ marginTop: hp("1%") }}>
            <CustomButton
              text={"Continuar"}
              screen={"CodePassword"}
              onPress={() => { handleSubmit(onSubmit)();}}
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

export default ForgetPassword;
