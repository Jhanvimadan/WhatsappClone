import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MessageCardProps {
  name: string;
  message: string;
  time?: string;
  image: any;
  count?: number;
  showAddIcon?: boolean;
}

const MessageCard: React.FC<MessageCardProps> = ({
  name,
  message,
  time,
  image,
  count,
  showAddIcon = false,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.avatar} />

        {showAddIcon && (
          <View style={styles.addIconContainer}>
            <Ionicons name="add-circle" size={20} color="green" />
          </View>
        )}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      {time && <Text style={styles.time}>{time}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  imageContainer: {
    position: "relative",
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addIconContainer: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    color: "gray",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
});

export default MessageCard;