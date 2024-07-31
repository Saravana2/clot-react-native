import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text } from "react-native";
import AppButton from "../components/AppButton";
import { AppStyles } from "../styles";
import AppTextField from "../components/AppTextField";
import Strings from "../resources/Strings";
import AuthApp from "../components/AuthApp";
import Colors from "../resources/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
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
    router.push("signin/password");
  }

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View style={[AppStyles.screenContent, { marginTop: 100 }]}>
        <Text style={AppStyles.loginHeaderText}>Sign in</Text>
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
        <View style={{ flexDirection: "row", marginTop: 8, marginBottom: 60 }}>
          <Text style={AppStyles.textSmall}>{Strings.dontHaveAccount} </Text>
          <Link href="signin/createaccount">
            <Text style={AppStyles.textSmallBold}>{Strings.createOne}</Text>
          </Link>
        </View>

        <AuthApp text={Strings.authApple} icon="apple" color={"black"} />
        <AuthApp
          text={Strings.authGoogle}
          icon="google"
          color={Colors.googleRed}
        />
        <AuthApp
          text={Strings.authFacebook}
          icon="facebook"
          color={Colors.facebookBlue}
        />
      </View>
    </SafeAreaView>
  );
}
