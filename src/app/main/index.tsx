import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chats from "@/src/components/molecules/Chats";
import Calls from "@/src/components/molecules/Calls";
import Status from "@/src/components/molecules/Status";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

// --- Tab options ---
const tabs = [
  { label: "Chats", key: "chat" },
  { label: "Status", key: "status" },
  { label: "Calls", key: "calls" },
];

const Main = () => {
  const [currentPage, setCurrentPage] = useState("chat");

  // --- Conditionally render tabs ---
  const renderCurrentTab = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };

  // --- Header for WhatsApp ---
  const WhatsappHeader = () => (
    <View style={styles.WhatsappHeaderStyle}>
      <Text style={styles.whatsappText}>WhatsApp</Text>
      <View style={styles.iconContainer}>
        <AntDesign name="search1" style={styles.headerIcon} />
        <Entypo name="dots-three-vertical" style={styles.headerIcon} />
      </View>
    </View>
  );

  // --- Tab selector ---
  const TopBarTabs = () => (
    <View style={styles.topBarContainer}>
      {tabs.map(({ label, key }, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.topBarButton,
            currentPage === key && styles.activeTab,
          ]}
          onPress={() => setCurrentPage(key)}
        >
          <Text
            style={[
              styles.topBarText,
              currentPage === key && styles.activeText,
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" barStyle="light-content" />
      <WhatsappHeader />
      <TopBarTabs />
      {renderCurrentTab()}
    </SafeAreaView>
  );
};

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  WhatsappHeaderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    backgroundColor: "#008069",
    paddingVertical: verticalScale(12),
  },
  whatsappText: {
    color: "white",
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    columnGap: scale(20),
  },
  headerIcon: {
    fontSize: moderateScale(20),
    color: "white",
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#008069",
    paddingVertical: verticalScale(8),
  },
  topBarButton: {
    paddingBottom: verticalScale(6),
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  topBarText: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "#ccc",
    textTransform: "uppercase",
  },
  activeTab: {
    borderColor: "white",
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Main;
