import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import AppBackButton from "../../../components/AppBackButton";
import PagerView from "react-native-pager-view";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStyles } from "../../../styles";
import AppPriceButton from "../../../components/AppPriceButton";
import Strings from "../../../resources/Strings";
import Colors from "../../../resources/Colors";
import ProductFavIcon from "../../../components/home/ProductFavIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/redux/cart";
import { FavContext } from "../../../store/context/fav-context";

export default function productdetailPage() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState([]);
  const favProductContext = useContext(FavContext);

  const isFavProduct =
    favProductContext.products.find((item) => item.id === product.id) !==
    undefined;

  function toggleFavStatus() {
    if (isFavProduct) {
      favProductContext.removeFavourite(product.id);
    } else {
      favProductContext.addFavourite(product);
    }
  }

  const getProductDetails = async () => {
    const url = "https://fakestoreapi.com/products/" + id;
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View
        style={[
          AppStyles.screenContent,
          {
            marginTop: 40,
            height: "100%",
            flex: 1,
          },
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppBackButton />

          <ProductFavIcon
            isFavProduct={isFavProduct}
            toggleFavStatus={() => {
              toggleFavStatus();
            }}
          />
        </View>

        <ScrollView>
          <ProductImage image={product.image} />
          <ProductInfo product={product} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const ProductImage = (props) => (
  <View style={{ alignItems: "center" }}>
    <PagerView
      initialPage={0}
      style={{
        width: 200,
        height: 200,
      }}
    >
      <PagerImage
        image={props.image}
        resizeMode="contain"
        backgroundColor="#b5d7ff"
      />
      <PagerImage
        image={props.image}
        resizeMode="cover"
        backgroundColor="#fff1ad"
      />
      <PagerImage
        image={props.image}
        resizeMode="stretch"
        backgroundColor="#deffe2"
      />
    </PagerView>
  </View>
);
const PagerImage = (props) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: props.backgroundColor,
        borderRadius: 150,
      }}
    />
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: 150,
        height: 150,
        resizeMode: props.resizeMode,
        position: "absolute",
      }}
    />
  </View>
);

function ProductInfo(props) {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#004799",
        }}
      >
        {props.product.title}
      </Text>

      <Text
        style={{
          marginTop: 16,
          fontSize: 18,
          fontWeight: "bold",
          color: Colors.primary,
        }}
      >
        {Number(props.product.price).toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
      </Text>

      <Text
        numberOfLines={4}
        ellipsizeMode="tail"
        style={{ marginTop: 10, fontSize: 14, color: "#004799" }}
      >
        {props.product.description}
      </Text>
      {/* <AddToCart product={props.product} navigation={props.navigation} /> */}
      <AppPriceButton
        style={{ marginTop: 16, marginBottom: 16 }}
        leadingText={Number(props.product.price).toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
        trailingText={Strings.addToBag}
        onPress={() => {
          dispatch(addToCart({ data: props.product }));
          router.replace("home/mycart");
        }}
      />
    </View>
  );
}
