import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { AppStyles } from "../styles";

export default function AppButton(props) {
  return (
    <View style={[AppStyles.buttonContainer, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={AppStyles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
