import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import Navbar from "../../../components/navbar";
import CustomButton from "../../../components/customButton";

import User from "../../../../assets/icons/user.svg";
import UserGroup from "../../../../assets/icons/user-group.svg";
import Cedula from "../../../../assets/icons/cedula.svg";
import Correo from "../../../../assets/icons/envelope.svg";
import Telefono from "../../../../assets/icons/phone.svg";
import Password from "../../../../assets/icons/lock.svg";
import InputForm from "../../../components/inputForm";
import StyleText from '../../../components/StyleText';

import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import {setProfile} from "../../../store/profile/slice"

function EditUser() {
  const [inputFistName, setInputFistName] = useState(false);
  const [inputLastName, setInputLastName] = useState(false);
  const [inputMail, setInputMail] = useState(false);
  const [inputPhone, setInputPhone] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);
  const [inputPassword2, setInputPassword2] = useState(false);

  const navigation = useNavigation();
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: profile.nombre,
      apellido: profile.apellido,
      telefono: profile.telefono,
      correo: profile.correo,
      password: "",
      passwordTwo: "",
    },
  });


  const onSubmit = (data) => {
    dispatch(setProfile(data))
    navigation.navigate("DataUser");
  
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar title={"Editar Datos"} back={true} />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={60}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <StyleText tag='Información' size={'big'} style={{ marginTop: 20, justifyContent: 'center' }}>Mi</StyleText>
        </View>

        <View style={styles.containerForm}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <InputForm
              Icon={User}
              regExp={/^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/}
              placeholder="Nombre(s)"
              msjError="Nombre(s) Invalido"
              control={control}
              value= {profile.nombre}
              name="nombre"
            />
            {errors.nombres && (
              <Text style={styles.error}>Error en el Nombre(s).</Text>
            )}

            <InputForm
              Icon={UserGroup}
              regExp={/^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{3,30}$/}
              placeholder="Apellido(s)"
              msjError="Apellido(s) Invalido"
              control={control}
              value={profile.apellido}
              name="apellido"
            />
            {errors.apellidos && (
              <Text style={styles.error}>Error en los Apellido(s).</Text>
            )}

            <InputForm
              Icon={Correo}
              regExp={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
              placeholder="Correo Electrónico"
              msjError="Correo Invalido"
              control={control}
              value={profile.correo}
              name="correo"
            />
            {errors.correo && (
              <Text style={styles.error}>Error en el Correo.</Text>
            )}

            <InputForm
              Icon={Telefono}
              regExp={/^[0-9]{11}$/}
              placeholder="teléfono"
              msjError="Teléfono Invalido"
              control={control}
              value={profile.telefono}
              name="telefono"
            />
            {errors.telefono && (
              <Text style={styles.error}>Error en el teléfono.</Text>
            )}

            <InputForm 
                Icon={Password} regExp={/^[a-zA-Z0-9_\.\-]{8}$/} 
                placeholder='Contraseña' 
                msjError='Contraseña Invalida' 
                control={control} 
                value='' 
                name='inputPassword'/>
            {errors.inputPassword && (
                <Text style={styles.error}>Error en la contraseña.</Text>
            )}

            <InputForm 
                Icon={Password} regExp={/^[a-zA-Z0-9_\.\-]{8}$/} 
                placeholder='Repita Contraseña' 
                msjError='Contraseña Invalida' 
                control={control} 
                value='' 
                name='inputPassword2'/>
            {errors.inputPassword2 && (
                <Text style={styles.error}>Error en la contraseña.</Text>
            )}

          </View>
          <View style={{ marginTop: hp("2%") }}>
            <CustomButton
              text={"Continuar"}
              screen={"DataUser"}
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
    marginTop: hp("3%"),
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

export default EditUser;
