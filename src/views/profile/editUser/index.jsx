import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { useNavigation, useRoute } from '@react-navigation/native';

import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/navbar'
import CustomButton from "../../../components/customButton";

import User from '../../../../assets/icons/user.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'
import Cedula from '../../../../assets/icons/cedula.svg'
import Correo from '../../../../assets/icons/envelope.svg'
import Telefono from '../../../../assets/icons/phone.svg'
import Lock from '../../../../assets/icons/lock.svg'

function EditUser() {

    const [inputFistName, setInputFistName] = useState(false);
    const [inputLastName, setInputLastName] = useState(false);
    const [inputMail, setInputMail] = useState(false);
    const [inputPhone, setInputPhone] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [inputPassword2, setInputPassword2] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const {data} = route.params;

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        nombres: data.name,
        apellidos: data.lastname,
        telefono: data.phone,
        correo: data.mail,
        password: "",
        passwordTwo: ""
      },
    });
  
    const onSubmit = () => {
    navigation.navigate("DataUser");
    };

    return (

        <SafeAreaView style={{flex: 1}}>

            <Navbar
                title={'Editar Datos'}
                back={true}
            />
            <KeyboardAwareScrollView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={60}
            >
        
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.title}>Mi Informacion</Text>
            </View>

            <View style={styles.containerForm}>
            <View
                style={{ flex: 1, justifyContent: "center"}}
            >
                <View
                style={[
                    styles.input,
                    {
                    marginTop: hp("1.5%"),
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
                        placeholder= {'Nombre(s): '+ data.name}
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
                    marginTop: hp("1.5%"),
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
                        placeholder={"Apellido(s): "+ data.lastname}
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
                    marginTop: hp("1.5%"),
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
                        placeholder={"Correo: " + data.mail}
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

                <View
                style={[
                    styles.input,
                    {
                    marginTop: hp("1.5%"),
                    borderColor: inputPhone ? "#CB2139" : "#656565",
                    },
                ]}
                >
                <Telefono height={wp("5%")} width={hp("5%")} fill="#555"/>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    pattern: {
                        value: /^[0-9]{11}$/,
                        message: "Ingrese una telefono valido",
                    },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder={"Telefono: " + data.phone}
                        placeholderTextColor="#656565"
                        keyboardType="number-pad"
                        onFocus={() => {
                        setInputPhone(true);
                        }}
                        onBlur={() => {
                        onBlur;
                        setInputPhone(false);
                        }}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="telefono"
                />
                </View>
                {errors.telefono && (
                <Text style={styles.error}>Error en el telefono.</Text>
                )}

                <View
                    style={[
                        styles.input,
                        {
                            marginTop: hp("1.5%"),
                            borderColor: inputPassword ? "#CB2139" : "#656565",
                        },
                    ]}
                >
                <Lock height={wp("5%")} width={hp("5%")} fill="#555"/>

                <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: {
                    value: /^[a-zA-Z0-9_\.\-]{8}$/,
                    message: "Ingrese una contraseña valida",
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={{flex: 1}}
                    placeholder="Contraseña (8 caracteres)"
                    placeholderTextColor="#656565"
                    onFocus={(e) => {
                        setInputPassword(true);
                    }}
                    onBlur={(e) => {
                        onBlur;
                        setInputPassword(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="inputPassword"
                />
            
                </View>
                {errors.inputPassword && (
                    <Text style={styles.error}>Error en la contraseña.</Text>
                )}

                <View
                
                    style={[
                        styles.input,
                        {
                        marginTop: hp("1.5%"),
                        borderColor: inputPassword2 ? "#CB2139" : "#656565",
                        },
                    ]}
                >
                <Lock height={wp("5%")} width={hp("5%")} fill="#555"/>
                
                <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: {
                    value: /^[a-zA-Z0-9_\.\-]{8}$/,
                    message: "Ingrese una contraseña valida",
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    style={{flex: 1 }}
                    placeholder="Repita la Contraseña"
                    placeholderTextColor="#656565"
                    onFocus={(e) => {
                        setInputPassword2(true);
                    }}
                    onBlur={(e) => {
                        onBlur;
                        setInputPassword2(false);
                    }}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                name="inputPassword2"
                />
                </View>
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
    )

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
      marginTop: hp('3%'),
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