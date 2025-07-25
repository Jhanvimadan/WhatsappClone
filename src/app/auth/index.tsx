import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale, moderateScale } from "react-native-size-matters";

const Auth = () => {
    const [isLoading, setIsLoading] = useState(true);

    let navigate_to_welcome = () => {
        router.push("/auth/terms_agree")
    };
    let loadingTimeout = () => {
        setIsLoading(true)
        setTimeout(navigate_to_welcome, 3000);
    }
    useEffect(() => {
        const timeoutId = setTimeout(loadingTimeout,2000);

        return () => clearTimeout(timeoutId)
    }, []);
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={require("../../assets/images/icon.png")} // <-- replace with your actual image path
          style={styles.image}
          resizeMode = "contain"
        />
        <Text style={styles.from_text}> Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
            <>
            <ActivityIndicator size= {moderateScale(48)} color={"#0CCC83"}/>
             <Text style={styles.from_text}>Loading...</Text>
            </>
        ) : (
            <>
        <Text style={styles.from_text}>From</Text>
        <Text style = {styles.facebook_text}>Meta</Text>
        </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between", // Fixed typo
    paddingVertical: 70,
    backgroundColor: "white",
  },
  header: {
    
  },
  body: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  footer: {
    alignItems: "center",
    height: verticalScale(60),
  },
  from_text: {
    fontSize: 12,
    color: "#867373", // Fixed missing comma
  },
  facebook_text: {
    fontSize: 15,
    color: "#000000",
  },
});
export default Auth;
