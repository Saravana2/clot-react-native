import React from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserPage() {
  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <Text>User</Text>
    </SafeAreaView>
  );
}
