import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/redux/store";
import FavouritesContextProvider from "../store/context/fav-context";

export default function RootLayout() {
  return (
    <FavouritesContextProvider>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="signin/password" />
          <Stack.Screen name="signin/createaccount" />
          <Stack.Screen name="signin/forgotpassword" />
          <Stack.Screen name="signin/forgotpasswordsuccess" />
          <Stack.Screen name="home" />
        </Stack>
      </Provider>
    </FavouritesContextProvider>
  );
}
