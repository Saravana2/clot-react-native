import React, { useState } from "react";
import { Text, View } from "react-native";
import Strings from "../../resources/Strings";
import { AppStyles } from "../../styles";
import { Link, router } from "expo-router";
import AppTextField from "../../components/AppTextField";
import AppButton from "../../components/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  function onSubmitHandler() {
    const userPassword = "password@123";
    if (!password) {
      setError("Password is required");
      return;
    } else if (userPassword !== password) {
      setError("Password is invalid");
      return;
    }
    router.dismiss();
    router.replace("home");
  }

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View style={[AppStyles.screenContent, { marginTop: 100 }]}>
        <Text style={AppStyles.loginHeaderText}>Sign in</Text>
        <AppTextField
          style={{ marginTop: 16 }}
          text={password}
          error={error}
          onChangeText={(text) => {
            setError(undefined);
            setPassword(text);
          }}
          textInputConfig={{
            placeholder: "Password",
            secureTextEntry: true,
          }}
        />
        <AppButton
          text="Continue"
          style={{ marginTop: 16 }}
          onPress={onSubmitHandler}
        />
        <View style={{ flexDirection: "row", marginTop: 8, marginBottom: 60 }}>
          <Text style={AppStyles.textSmall}>{Strings.forgotPassword} </Text>
          <Link href="signin/forgotpassword">
            <Text style={AppStyles.textSmallBold}>{Strings.reset}</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
