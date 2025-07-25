import React from "react";
import { View, FlatList } from "react-native";
import MessageCard from "./MessageCard";
import imagePath from "@/src/constants/imagePath";

const callData = [
  {
    name: "Ritika Sharma",
    message: "Incoming | Today, 10:30 AM",
    image: require("../../assets/images/user.png"),
    time: "",
    count: 0,
  },
  {
    name: "Aman Verma",
    message: "Outgoing | Yesterday, 6:15 PM",
    image: require("../../assets/images/user.png"),
    time: "",
    count: 0,
  },
];

const CallsList = () => {
  return (
    <FlatList
      data={callData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <MessageCard
          name={item.name}
          message={item.message}
          time={item.time}
          count={item.count}
          image={item.image}
        />
      )}
    />
  );
};

export default CallsList;
