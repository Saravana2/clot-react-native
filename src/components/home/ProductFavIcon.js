import React from "react";
import { AppStyles } from "../../styles";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProductFavIcon(props) {
  return (
    <TouchableOpacity
      style={[AppStyles.backButton, { marginEnd: 20 }]}
      onPress={() => props.toggleFavStatus()}
    >
      <MaterialCommunityIcons
        name={props.isFavProduct ? "heart" : "heart-outline"}
        size={16}
        color={props.isFavProduct ? "#e1e" : "black"}
      />
    </TouchableOpacity>
  );
}
