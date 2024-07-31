import React, { useState } from "react";
import { Text, View } from "react-native";
import Strings from "../../resources/Strings";
import { AppStyles } from "../../styles";
import { Link, router } from "expo-router";
import AppTextField from "../../components/AppTextField";
import AppButton from "../../components/AppButton";
import AppBackButton from "../../components/AppBackButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAccount() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const [errorValues, setErrorValues] = useState({
    firstName: undefined,
    lastName: undefined,
    emailAddress: undefined,
    password: undefined,
  });

  function inputChangehandler(inputIdentifier, value) {
    setError(inputIdentifier, undefined);
    setInputValues((currentValues) => {
      return { ...currentValues, [inputIdentifier]: value };
    });
  }

  function setError(inputIdentifier, value) {
    setErrorValues((currentValues) => {
      return { ...currentValues, [inputIdentifier]: value };
    });
  }

  function onSubmitHandler() {
    if (!inputValues.firstName) {
      setError("firstName", "Firstname is required");
      return;
    }
    if (!inputValues.lastName) {
      setError("lastName", "Lastname is required");
      return;
    }
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!inputValues.emailAddress) {
      setError("emailAddress", "Email Address is required");
      return;
    } else if (!regexp.test(inputValues.emailAddress)) {
      setError("emailAddress", "Invalid Email Address");
      return;
    }
    if (!inputValues.password) {
      setError("password", "Password is required");
      return;
    }
    router.back();
  }

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View style={[AppStyles.screenContent, { marginTop: 40 }]}>
        <AppBackButton />
        <Text style={[AppStyles.loginHeaderText, { marginTop: 20 }]}>
          {Strings.createAccount}
        </Text>
        <AppTextField
          style={{ marginTop: 16 }}
          text={inputValues.firstName}
          error={errorValues.firstName}
          onChangeText={(text) => {
            inputChangehandler("firstName", text);
          }}
          textInputConfig={{
            placeholder: "Firstname",
          }}
        />
        <AppTextField
          style={{ marginTop: 16 }}
          text={inputValues.lastName}
          error={errorValues.lastName}
          onChangeText={(text) => {
            inputChangehandler("lastName", text);
          }}
          textInputConfig={{
            placeholder: "Lastname",
          }}
        />
        <AppTextField
          style={{ marginTop: 16 }}
          text={inputValues.emailAddress}
          error={errorValues.emailAddress}
          onChangeText={(text) => {
            inputChangehandler("emailAddress", text);
          }}
          textInputConfig={{
            placeholder: "Email Address",
          }}
        />
        <AppTextField
          style={{ marginTop: 16 }}
          text={inputValues.password}
          error={errorValues.password}
          onChangeText={(text) => {
            inputChangehandler("password", text);
          }}
          textInputConfig={{
            placeholder: "Password",
          }}
        />
        <AppButton
          text="Continue"
          style={{ marginTop: 16 }}
          onPress={onSubmitHandler}
        />
        <View style={{ flexDirection: "row", marginTop: 8, marginBottom: 60 }}>
          <Text style={AppStyles.textSmall}>{Strings.forgotPassword} </Text>
          <Link replace href="signin/forgotpassword">
            <Text style={AppStyles.textSmallBold}>{Strings.reset}</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
