import React from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../styles";
import Colors from "../resources/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AuthApp(props) {
  return (
    <View
      style={[
        AppStyles.buttonContainer,
        {
          padding: 12,
          backgroundColor: Colors.mediumGrey,
          flexDirection: "row",
          marginTop: 8,
        },
      ]}
    >
      <FontAwesome name={props.icon} size={25} color={props.color} />
      <Text style={[AppStyles.textNormal, { flex: 1, textAlign: "center" }]}>
        {props.text}
      </Text>
    </View>
  );
}
