import React from "react";
import { Image, Text, View } from "react-native";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";
import { AppStyles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function forgotpasswordsuccess() {
  return (
    <SafeAreaView
      style={[
        AppStyles.screenbackground,
        { alignContent: "center", justifyContent: "center" },
      ]}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/reset_mail.png")} />
        <Text
          style={[AppStyles.textBig, { marginTop: 16, textAlign: "center" }]}
        >
          We Sent you an Email to reset your password.
        </Text>
        <AppButton
          style={{ marginTop: 16 }}
          text="Return to Login"
          onPress={() => router.navigate("/")}
        />
      </View>
    </SafeAreaView>
  );
}
