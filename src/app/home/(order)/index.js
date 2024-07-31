import React from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderPage() {
  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <Text>Order</Text>
    </SafeAreaView>
  );
}
