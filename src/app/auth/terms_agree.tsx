import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import user from "@/src/constants/imagePath";
import { router } from "expo-router";

const TermsAgree = () => {
  const onAgree = () => {
    console.log("User agreed to terms.");
    router.push("/auth/login");
    // You can navigate to login screen here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={user.welcome}
          style={styles.image_style}
          resizeMode="contain"
        />
        <Text style={styles.description_text}>
          Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap "Agree and continue" to accept the{" "}
          <Text style={styles.link_text}>Terms of Service</Text>.
        </Text>
        <View style={{ width: moderateScale(300) }}>
          <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30),
  },
  header: {
    alignItems: "center",
    gap: verticalScale(30),
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  welcome_text: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
    marginBottom: verticalScale(10),
  },
  image_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    textAlign: "center",
    fontSize: moderateScale(13),
  },
  link_text: {
    color: "#25D366",
    fontWeight: "bold",
  },
});

export default TermsAgree;
