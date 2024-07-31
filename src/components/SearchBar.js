import React from "react";
import AppTextField from "./AppTextField";

export default function SearchBar(props) {
  return (
    <AppTextField
      onChangeText={(text) => {}}
      textInputConfig={{
        placeholder: "Search",
      }}
    />
  );
}
