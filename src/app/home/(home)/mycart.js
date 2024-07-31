import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Strings from "../../../resources/Strings";
import { AppStyles } from "../../../styles";
import CartItems from "../../../components/cart/CartItems";
import AppBackButton from "../../../components/AppBackButton";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../../components/AppButton";
import { clearCart } from "../../../store/redux/cart";
import { router } from "expo-router";

export default function mycart() {
  const cartProducts = useSelector((state) => state.cartProducts.datas);
  const dispatch = useDispatch();
  const subTotal = cartProducts.reduce(
    (total, item) => (total += item.count * item.product.price),
    0,
  );

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View
        style={[
          AppStyles.screenContent,
          {
            marginTop: 40,
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <AppBackButton />

          <Text
            style={[
              AppStyles.textNormalBold,
              { marginStart: 40, alignSelf: "center" },
            ]}
          >
            {Strings.cart}
          </Text>
        </View>
        {cartProducts.length !== 0 ? (
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(clearCart());
              }}
            >
              <Text>Remove All</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <CartItems cartProducts={cartProducts} />
        {cartProducts.length !== 0 ? (
          <View style={{ marginButton: 16, marginTop: 16 }}>
            <PriceView subTotal={subTotal} shippingCost={8.0} tax={0.0} />
            <AppButton
              text="Checkout"
              style={{ marginButton: 16, marginTop: 16 }}
              onPress={() => {
                router.back();
              }}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const PriceView = ({ subTotal, shippingCost, tax }) => {
  return (
    <View>
      <PriceItem text={"Subtotal"} cost={subTotal} />
      <PriceItem text={"Shipping cost"} cost={shippingCost} />
      <PriceItem text={"Tax"} cost={tax} />
      <PriceItem text={"Total"} cost={subTotal + shippingCost + tax} />
    </View>
  );
};

const PriceItem = ({ text, cost }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{text}</Text>

      <Text>
        {cost.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
      </Text>
    </View>
  );
};
