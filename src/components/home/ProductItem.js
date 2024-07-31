import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../resources/Colors";
import Size from "../../resources/Size";
import { FavContext } from "../../store/context/fav-context";

export default function ProductItem({ item, onPress, isGrid }) {
  const favProductContext = useContext(FavContext);

  const isFavouriteProduct =
    favProductContext.products.find((product) => product.id === item.id) !==
    undefined;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={
        isGrid
          ? {
              flex: 1,
              maxWidth: "50%", // 100% devided by the number of rows you want
            }
          : {
              width: Size.productItemWidth,
            }
      }
      onPress={() => onPress(item)}
    >
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 5,
          padding: 8,
          borderRadius: 8,
          backgroundColor: Colors.mediumGrey,
          borderWidth: 1.5,
          borderColor: "#eee",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginEnd: 4 }}
          onPress={() => {
            if (isFavouriteProduct) {
              favProductContext.removeFavourite(item.id);
            } else {
              favProductContext.addFavourite(item);
            }
          }}
        >
          <MaterialCommunityIcons
            name={isFavouriteProduct ? "heart" : "heart-outline"}
            size={16}
            color={isFavouriteProduct ? "#e1e" : "black"}
          />
        </TouchableOpacity>
        <ProductImage image={item.image} />
        <ProductInfo
          name={item.title}
          rating={item.rating.rate}
          price={item.price}
        />
      </View>
    </TouchableOpacity>
  );
}

const ProductImage = ({ image }) => (
  <Image
    source={{
      uri: image,
    }}
    style={{ width: 80, height: 120, resizeMode: "contain" }}
  />
);

const ProductInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }} numberOfLines={1}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>
        {props.price.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
      </Text>
    </View>
  </View>
);
