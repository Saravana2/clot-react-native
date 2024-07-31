import { Stack, Tabs } from "expo-router";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../../resources/Colors";

export default function TabRootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(notification)"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell-o" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(order)"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(user)"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
