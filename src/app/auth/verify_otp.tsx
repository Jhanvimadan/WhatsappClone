import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    // Simulate OTP verification
    if (otp === "1234") {
      router.replace("/main"); // go to main app after verification
    } else {
      alert("Invalid OTP");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="4-digit OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        maxLength={4}
      />
  

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
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

export default VerifyOTP;
