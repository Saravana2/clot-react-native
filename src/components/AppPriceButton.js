import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { AppStyles } from "../styles";

export default function AppPriceButton(props) {
  return (
    <View style={[AppStyles.buttonContainer, props.style]}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        onPress={props.onPress}
      >
        <Text style={AppStyles.buttonTextBold}>{props.leadingText}</Text>
        <Text style={AppStyles.buttonText}>{props.trailingText}</Text>
      </TouchableOpacity>
    </View>
  );
}
