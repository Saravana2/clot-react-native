import { StyleSheet } from "react-native";
import Colors from "./resources/Colors";
import FontSize from "./resources/FontSize";
import Size from "./resources/Size";

export const AppStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: Size.normal,
    borderRadius: Size.big,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: FontSize.fontNormal,
    color: "white",
    alignSelf: "center",
  },
  buttonTextBold: {
    fontWeight: "700",
    fontSize: FontSize.fontNormal,
    color: "white",
    alignSelf: "center",
  },
  loginHeaderText: {
    fontWeight: "700",
    fontSize: FontSize.fontBigX,
    color: Colors.darkBlack,
  },
  textInputField: {
    backgroundColor: Colors.mediumGrey,
    paddingHorizontal: Size.small,
    paddingVertical: Size.medium,
    borderRadius: Size.tiny,
  },
  textInputError: {
    color: Colors.googleRed,
    fontSize: FontSize.fontMedium,
  },
  screenbackground: {
    backgroundColor: "white",
    flex: 1,
  },
  screenContent: {
    margin: Size.normal,
  },
  textSmall: {
    fontWeight: "500",
    fontSize: FontSize.fontMedium,
    color: Colors.darkBlack,
  },
  textSmallBold: {
    fontWeight: "700",
    fontSize: FontSize.fontMedium,
    color: Colors.darkBlack,
  },
  textNormal: {
    fontWeight: "500",
    fontSize: FontSize.fontNormal,
    color: Colors.darkBlack,
  },
  textNormalBold: {
    fontWeight: "700",
    fontSize: FontSize.fontNormal,
    color: Colors.darkBlack,
  },
  textBig: {
    fontWeight: "500",
    fontSize: FontSize.fontBig,
    color: Colors.darkBlack,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.mediumGrey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
