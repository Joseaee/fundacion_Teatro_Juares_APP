import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Controller } from "react-hook-form";

export default function InputForm({
  Icon,
  regExp,
  msjError,
  placeholder,
  keyboardType,
  name,
  validate,
  control,
  onChangeFunction
}) {

  
  const [selected, setSelected] = useState(false);
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
          required: true,
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
            onChangeText={onChange}
            onChange = {onChangeFunction}
            value={value}
          />
        )}
        name={name}
      />
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
