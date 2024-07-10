import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function ButtonTab({ children, isSelected, rowSeparation, onPress, bgColor = "#dfdfdf", width, elevation }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { marginHorizontal: rowSeparation },
        { backgroundColor: isSelected ? "#E31734" : bgColor },
        width ? {width} : null,
        elevation ? {elevation: 6}: null 
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: isSelected ? "#eee" : "#333" }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    minWidth: 80,
    height: 36,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
  },
  text: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
