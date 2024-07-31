import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/redux/cart";
import Colors from "../../resources/Colors";

export default function CartItems(props) {
  return (
    <>
      <FlatList
        style={{ marginTop: 10, marginHorizontal: 10 }}
        data={props.cartProducts}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.product.id}
      />
    </>
  );
}

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const product = item.product;
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.mediumGrey,
        borderRadius: 25,
        padding: 20,
        marginBottom: 10,
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
        }}
      />
      <View style={{ flex: 1, marginStart: 5 }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "#004799",
          }}
        >
          {product.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {product.price.toLocaleString("en", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <IncreaseDecreaseButton
              bgColor="white"
              icon="minus"
              onPress={() => {
                dispatch(removeFromCart({ id: product.id }));
              }}
            />
            <Text
              style={{
                marginStart: 10,
                marginEnd: 10,
                fontWeight: 700,
                alignSelf: "center",
              }}
            >
              {item.count}
            </Text>
            <IncreaseDecreaseButton
              bgColor="skyblue"
              icon="plus"
              onPress={() => {
                dispatch(addToCart({ data: product }));
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const IncreaseDecreaseButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          backgroundColor: props.bgColor,
          borderRadius: 20,
          width: 25,
          height: 25,
          elevation: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name={props.icon} size={13} color="#000" />
      </View>
    </TouchableOpacity>
  );
};
