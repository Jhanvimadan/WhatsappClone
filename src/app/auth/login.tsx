import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CountryPicker from "react-native-country-picker-modal";
import { router } from "expo-router";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const onNextButtonClick = () => {
    if (phone.length === 10) {
      console.log("User agreed to terms.");
      router.push("/auth/verify_otp");
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.{" "}
            <Text style={styles.link_description}>What’s my number?</Text>
          </Text>
        </View>

        <View style={styles.input_main_container}>
          <TouchableOpacity
            style={styles.dropDown_container}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign
              name="caretdown"
              size={moderateScale(14)}
              color="black"
              style={{ marginLeft: scale(5) }}
            />
          </TouchableOpacity>

          <View style={styles.country_code}>
            <Text style={styles.country_code_text}>{countryCode}</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <ButtonComp
          title="Send otp"
          style={{ paddingHorizontal: scale(29) }}
          onPress={onNextButtonClick}
        />
      </View>

      {visible && (
        <CountryPicker
          visible={true}
          withFilter
          withFlag
          onClose={() => setVisible(false)}
          onSelect={(country: any) => {
            setCountryCode(`+${country.callingCode[0]}`);
            setCountryName(country.name);
            setVisible(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(20),
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
  },
  heading_container: {
    marginBottom: verticalScale(20),
    paddingHorizontal: scale(10),
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
    marginTop: verticalScale(10),
  },
  link_description: {
    color: "#002AC0",
  },
  input_main_container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: scale(10),
    marginHorizontal: scale(10),
  },
  dropDown_container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(10),
  },
  dropdown_title: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  country_code: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(10),
  },
  country_code_text: {
    fontSize: moderateScale(16),
    marginRight: scale(5),
  },
  input: {
    fontSize: moderateScale(16),
    flex: 1,
    paddingVertical: scale(10),
  },
  footer: {
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
});
