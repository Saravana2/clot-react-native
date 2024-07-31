import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AppStyles } from "../styles";
import { router } from "expo-router";

export default function AppBackButton() {
  return (
    <TouchableOpacity
      style={AppStyles.backButton}
      onPress={() => router.back()}
    >
      <MaterialIcons name="arrow-back-ios-new" size={16} color={"black"} />
    </TouchableOpacity>
  );
}
