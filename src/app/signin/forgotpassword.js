import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text } from "react-native";
import Strings from "../../resources/Strings";
import { AppStyles } from "../../styles";
import AppTextField from "../../components/AppTextField";
import AppButton from "../../components/AppButton";
import AppBackButton from "../../components/AppBackButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(undefined);

  function onSubmitHandler() {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      setError("Email Address is required");
      return;
    } else if (!regexp.test(email)) {
      setError("Invalid Email Address");
      return;
    }
    router.push("signin/forgotpasswordsuccess");
  }

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View style={[AppStyles.screenContent, { marginTop: 40 }]}>
        <AppBackButton />
        <Text style={[AppStyles.loginHeaderText, { marginTop: 20 }]}>
          {Strings.forgotPassword}
        </Text>
        <AppTextField
          style={{ marginTop: 16 }}
          text={email}
          error={error}
          onChangeText={(text) => {
            setError(undefined);
            setEmail(text);
          }}
          textInputConfig={{
            placeholder: "Email Address",
            keyboardType: "email-address",
          }}
        />
        <AppButton
          text="Continue"
          style={{ marginTop: 16 }}
          onPress={onSubmitHandler}
        />
      </View>
    </SafeAreaView>
  );
}
