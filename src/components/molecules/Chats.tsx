import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const sampleChats = [
  {
    id: "1",
    name: "Jhanvi",
    message: "Hello! How are you?",
    time: "5:27 AM",
    messageCount: 2,
    image: "https://i.pravatar.cc/150?img=1", // sample image URL
  },
  {
    id: "2",
    name: "Sini",
    message: "Can we talk later?",
    time: "9:10 AM",
    messageCount: 0,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Riya Singh",
    message: "Okay, see you!",
    time: "Yesterday",
    messageCount: 1,
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Chats = () => {
  const router = useRouter();

  const handleChatPress = (chat) => {
    router.push({
      pathname: "/(main)/chat",
      params: {
        name: chat.name,
        image: chat.image,
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleChatPress(item)}
            style={styles.card}
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
            <View style={styles.meta}>
              <Text style={styles.time}>{item.time}</Text>
              {item.messageCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.messageCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    color: "#666",
    fontSize: 14,
    marginTop: 2,
  },
  meta: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#aaa",
  },
  badge: {
    backgroundColor: "#804884",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
  },
});
