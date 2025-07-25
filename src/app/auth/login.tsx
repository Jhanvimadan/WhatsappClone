import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleSendOtp = () => {
    // Ideally, validate phone number and send request here
    if (phoneNumber.length === 10) {
      router.push("/auth/verify_otp"); // move to OTP screen
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: moderateScale(24),
    marginBottom: verticalScale(20),
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    fontSize: moderateScale(16),
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: "#804884",
    padding: verticalScale(12),
    borderRadius: moderateScale(5),
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: moderateScale(16),
  },
});

export default Login;
