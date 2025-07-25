import { Redirect, Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

SplashScreen.preventAutoHideAsync();

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  return token;
}

const RootNav = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();

    // Register for push notifications
    registerForPushNotificationsAsync();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href="/main" /> : <Redirect href="/auth" />}
    </>
  );
};

export default RootNav;
