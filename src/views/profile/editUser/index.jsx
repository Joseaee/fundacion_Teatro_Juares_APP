import {
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useEncryption } from "../../../hooks/encryption";
import { useForm } from "react-hook-form";
import { editPerfil } from "../../../store/profile/thunks";
import Navbar from "../../../components/navbar";
import CustomButton from "../../../components/customButton";
import { regExp } from "../../../hooks/constants";

import User from "../../../../assets/icons/user.svg";
import UserGroup from "../../../../assets/icons/user-group.svg";
import Correo from "../../../../assets/icons/envelope.svg";
import Telefono from "../../../../assets/icons/phone.svg";
import Password from "../../../../assets/icons/lock.svg";
import InputForm from "../../../components/inputForm";
import StyleText from '../../../components/StyleText';

import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import {setProfile} from "../../../store/profile/slice"

function EditUser() {

  const navigation = useNavigation();
  const loading = useAppSelector((state)=> state.auth.loading)
  const profile = useAppSelector((state) => state.profile);
  const { encryptData } = useEncryption();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
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

  const samePassword = (value) =>{

    if (value != getValues().password) {

      return 'Las contraseñas no coinciden';
    }

    return true;
  }

  const onSubmit = async (data) => {
    data.cedula = profile.cedula;
    const encryptedData = encryptData(JSON.stringify(data));

    try {
      let editado = await dispatch(editPerfil(encryptedData)).unwrap();
      if(editado.status == 'success') dispatch(setProfile(data)); navigation.navigate("DataUser");
    } catch (error) {

      setError("edit", {
        type: "manual",
        message: error.message,
      });
    }
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
              regExp={regExp.nombreUsuario}
              placeholder="Nombre(s)"
              msjError="Nombre(s) Invalido"
              control={control}
              value= {profile.nombre}
              name="nombre"
              required={{ value: true, message: 'El nombre es requerido' }}
            />
            {errors.nombre && (
              <Text style={styles.error}>{errors.nombre.message}.</Text>
            )}

            <InputForm
              Icon={UserGroup}
              regExp={regExp.apellidoUsuario}
              placeholder="Apellido(s)"
              msjError="Apellido(s) Invalido"
              control={control}
              value={profile.apellido}
              name="apellido"
              required={{ value: true, message: 'El apellido es requerido' }}
            />
            {errors.apellido && (
              <Text style={styles.error}>{errors.apellido.message}.</Text>
            )}

            <InputForm
              Icon={Correo}
              regExp={regExp.email}
              placeholder="Correo Electrónico"
              msjError="Correo Invalido"
              control={control}
              value={profile.correo}
              name="correo"
              required={{ value: true, message: 'El correo es requerido' }}
            />
            {errors.correo && (
              <Text style={styles.error}>{errors.correo.message}.</Text>
            )}

            <InputForm
              Icon={Telefono}
              regExp={regExp.nroTelefono}
              placeholder="teléfono"
              msjError="Teléfono Invalido"
              control={control}
              value={profile.telefono}
              required={{ value: false}} 
              name="telefono"
              maxLength={11}
            />
            {errors.telefono && (
              <Text style={styles.error}>{errors.telefono.message}.</Text>
            )}

            <InputForm 
                Icon={Password} regExp={regExp.password} 
                placeholder='Contraseña' 
                msjError='Contraseña Invalida' 
                control={control} 
                value='' 
                maxLength={8}
                required={{ value: true, message: 'La contraseña es requerida' }}
                name='password'/>
            {errors.password && (
                <Text style={styles.error}>{errors.password.message}.</Text>
            )}

            <InputForm 
                Icon={Password} regExp={regExp.password} 
                placeholder='Repita Contraseña' 
                validate={samePassword}
                msjError='Contraseña Invalida' 
                control={control} 
                value='' 
                maxLength={8}
                required={{ value: true, message: 'Repetir la contraseña es requerido' }}
                name='passwordTwo'/>
            {errors.passwordTwo && (
                <Text style={styles.error}>{errors.passwordTwo.message}.</Text>
            )}
              {errors.edit && (
                <Text style={styles.error}>{errors.edit.message}.</Text>
            )}

          </View>
          <View style={{ marginTop: hp("2%") }}>
            <CustomButton
              text={"Continuar"}
              screen={"DataUser"}
              onPress={()=>{clearErrors('edit'); handleSubmit(onSubmit)()}}
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
