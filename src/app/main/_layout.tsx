import { Stack } from "expo-router";
import React from "react";

const MainLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // We hide headers since you have a custom WhatsAppHeader
        animation: "fade_from_bottom",
      }}
    />
  );
};

export default MainLayout;
