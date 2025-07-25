import React from "react";
import { Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// Props interface (optional for type safety)
interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const ButtonComp = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button_container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#804884",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
  } as ViewStyle,

  button_text: {
    fontSize: moderateScale(14),
    color: "white",
  } as TextStyle,
});

export default ButtonComp;
