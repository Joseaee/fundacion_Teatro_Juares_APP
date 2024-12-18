import { useState } from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/inputForm";
import { addPasswod, resetState } from '../../../store/user/slice';
import { setLoading } from '../../../store/auth/slice'
import Navbar from "../../../components/navbar";
import Password from "../../../../assets/icons/lock.svg";
import CustomButton from "../../../components/customButton";
import { useAppSelector, useAppDispatch } from '../../../hooks/store';
import { useEncryption } from "../../../hooks/encryption";
import { API_URL } from "../../../config/constants";
import { regExp } from "../../../hooks/constants";
import CustomModal from "../../../components/CustomModal";
import axios from 'axios';

function MakePassword({ navigation }) {

  const user = useAppSelector((state)=> state.user)
  const loading = useAppSelector((state)=> state.auth.loading)
  const dispatch = useAppDispatch()
  const { encryptData } = useEncryption();
  const [modalVisible, setModalVisible] = useState(false);
  
  const samePassword = (value) =>{

    if (value != getValues().inputPassword) {

      return 'Las contraseñas no coinciden';
    }

    return true;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      inputPassword: "",
      inputPassword2: "",
    },
  });
  
  const reactivarCuenta = () =>{

    const encryptedData = encryptData(JSON.stringify(user));
    axios({
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
        activarUser: encryptedData
      }
    }).then(function (response) {
      dispatch(resetState());

      navigation.navigate("Success", {
          title: "Registrarse",
          message: "El usuario se ha habilitado",
      }); 
    }).catch(function (error) {

      setModalVisible(false)
      setError('register', {
        type: 'manual',
        message: error.response.data.message})
    })
  }

  const onSubmit = (data) => {

    const encryptedData = encryptData(JSON.stringify(user));
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
        type: 'register'
      },
      data: {
        user: encryptedData
      }
    }).then(function (response) {

      if(response.data.data.activateAccount){

        setModalVisible(true)
      } else{
        dispatch(resetState());
        navigation.navigate("Success", {
          title: "Registrarse",
          message: "¡Registro de usuario exitoso!",
        }); 
      }
    }).catch(function (error) {

      setError('register', {
        type: 'manual',
        message: error.response.data.message})

    }).finally (function () {
      dispatch(setLoading(false))
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

            <InputForm 
              Icon={Password} 
              regExp={regExp.password} 
              placeholder='Contraseña'   
              maxLength={8} 
              msjError='Contraseña Invalida' 
              control={control} 
              value='' 
              required={{ value: true, message: 'La contraseña es requerida' }} 
              name='inputPassword'
              onChangeFunction={() => {
                clearErrors("inputPassword2");
                dispatch(addPasswod(getValues().inputPassword))
              }}
              passwordInput={true}
              />
            {errors.inputPassword && (
              <Text style={styles.error}>{errors.inputPassword.message}.</Text>
            )}

            <InputForm 
            Icon={Password}
            validate={samePassword}
            placeholder='Repetir Contraseña' 
            control={control} 
            value=''
            required={{ value: true, message: 'La contraseña es requerida' }} 
            maxLength={8}  
            onChangeFunction={(e) => {
              dispatch(addPasswod(getValues().inputPassword))
            }}
            name='inputPassword2'
            passwordInput={true}
            />
            {errors.inputPassword2 && (
              <Text style={styles.error}>{errors.inputPassword2.message}.</Text>
            )}
            {errors.register && (
              <Text style={styles.error}>{errors.register.message}</Text>
            )}
          </View>

            <View style={{marginTop: 10}}>
              <CustomButton text={'Finalizar'} onPress={()=> { clearErrors("register"); handleSubmit(onSubmit)()}}  loading={loading}/>
            </View>
            <CustomModal
            icons={
              {
                question: true,
              }
            }
            title="Cuenta deshabilita, ¿Desea activar su cuenta?"
            visible={modalVisible}
            customFunctionAcceptButton={reactivarCuenta}
            onClose={() => setModalVisible(false)}
          />
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
