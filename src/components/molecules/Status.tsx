import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MessageCard from "./MessageCard"; // Reusing MessageCard
import imagePath from "@/src/constants/imagePath";

const myStatus = {
  name: "My Status",
  message: "Tap to add status update",
  image: require("../../assets/images/user.png"),
  time: "",
  count: 0,
};

const recentUpdates = [
  {
    name: "Riya Kapoor",
    message: "Posted a photo",
    image: { uri: "https://i.pravatar.cc/150?img=1" },
    time: "Today, 8:00 AM",
    count: 1,
  },
  {
    name: "Ankit Sharma",
    message: "Shared a video",
    image: { uri: "https://i.pravatar.cc/150?img=2" },
    time: "Today, 6:00 AM",
    count: 2,
  },
];

const viewedUpdates = [
  {
    name: "Sakshi Jain",
    message: "Shared an image",
    image: require("../../assets/images/user.png") ,
    time: "Yesterday, 9:00 PM",
    count: 0,
  },
];

const Status = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>My Status</Text>
     <MessageCard {...myStatus} showAddIcon />

      <Text style={styles.section}>Recent Updates</Text>
      <FlatList
        data={recentUpdates}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <MessageCard {...item} />}
      />

      <Text style={styles.section}>Viewed Updates</Text>
      <FlatList
        data={viewedUpdates}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <MessageCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
});

export default Status;
