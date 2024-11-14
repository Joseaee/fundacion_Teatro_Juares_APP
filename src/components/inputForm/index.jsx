import { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Controller } from "react-hook-form";
import Eye from "../../../assets/icons/eye.svg"; 
import EyeSlash from "../../../assets/icons/eye-slash.svg"; 

export default function InputForm({
  Icon,
  regExp,
  msjError,
  placeholder,
  keyboardType,
  name,
  validate,
  control,
  onChangeFunction,
  maxLength,
  required,
  passwordInput,
}) {

  
  const [selected, setSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  return (
    <View
      style={[
        styles.input,
        {
          marginTop: hp("0.5%"),
          borderColor: selected ? "#CB2139" : "#656565",
        },
      ]}
    >
      <Icon height={wp("5%")} width={hp("5%")} fill="#555" />
      <Controller
        control={control}
        rules={{
          required: required ? required : true,
          pattern: {
            value: regExp? regExp : '',
            message: msjError,
          },
          validate: validate ? validate : ''
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ flex: 1 }}
            placeholder={placeholder}
            placeholderTextColor="#656565"
            onFocus={() => {
              setSelected(true);
            }}
            onBlur={() => {
              onBlur;
              setSelected(false);
            }}
            onChangeText={(e) => {onChange(e.replace(/\s+/g, ' '))}}
            onChange = {onChangeFunction}
            onEndEditing = {(e) => {onChange(e.nativeEvent.text.trim());}}
            value={value}
            maxLength={maxLength ?? maxLength} 
            keyboardType= {keyboardType}
            secureTextEntry={ passwordInput && !showPassword }
          />
        )}
        name={name}
      />
      {passwordInput && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeSlash width={24} height={24} fill="#979797"/> : <Eye width={24} height={24} fill="#979797"/>}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#2f2f2f",
    borderWidth: 2,
    padding: 12,
    fontSize: hp("2%"),
    color: "#2f2f2f",
    borderRadius: 20,
    marginBottom: 6,
    shadowColor: "#000",
  },
});
