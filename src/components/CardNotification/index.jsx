import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Check from '../../../assets/icons/check.svg'

export default function CardNotification({
  children,
  subtitle,
  Icon,
  onPress = () => {},
  onCheckPress = () => {},
  iconBackground,
  disabled = false,
  loading = false,
  checkButton = true,
  colorSelected = "#48C9B0",
  selected = false
}) {
  const backgroundColor = iconBackground ? iconBackground : "#E31734";
  return (
    <TouchableOpacity
      style={[styles.carta, selected ? {
        borderColor: colorSelected,
        borderWidth: 3,
      } : null]}
      disabled={disabled}
      onPress={
        onPress
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: wp("100%"),
          padding: 16,
          overflow: "hidden",
        }}
      >
        <View style={[styles.boxMessage, { backgroundColor }]}>
          <Icon style={styles.icon} />
        </View>
        <View style={{width: wp('60%'), paddingHorizontal: 12 }}>
          <Text style={styles.title}>{children}</Text>
          <Text style={styles.text}>{subtitle}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={onCheckPress} style={{marginStart: 8}}>
            {loading ?
            <ActivityIndicator size="large" color="#E31734" /> 
            : checkButton ? <Check fill="#0EA014" width={22} height={22} /> : null}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carta: {
    marginVertical: 6,
    marginHorizontal: 14,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 10,
    elevation: 6,
    overflow: "hidden",
  },
  boxMessage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fill: "#fff",
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 18,
    color: "#2f2f2f",
  },
  text: {
    color: "gray",
    fontSize: 14,
  },
});
