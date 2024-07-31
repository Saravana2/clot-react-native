import React from "react";
import { Text, TextInput, View } from "react-native";
import { AppStyles } from "../styles";

export default function AppTextField({
  style,
  text,
  onChangeText,
  error,
  textInputConfig,
}) {
  return (
    <View>
      <TextInput
        style={[AppStyles.textInputField, style]}
        defaultValue={text}
        onChangeText={onChangeText}
        {...textInputConfig}
      />
      {error !== undefined && (
        <Text style={AppStyles.textInputError}>{error}</Text>
      )}
    </View>
  );
}
