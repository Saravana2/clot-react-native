import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../../../resources/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SearchBar";
import Categories from "../../../components/home/Categories";
import ProductHorizontalList from "../../../components/home/ProductHorizontalList";
import { router } from "expo-router";

export default function HomePage() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategoryFromStore = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

  const getProductsFromStore = async () => {
    const url = "https://fakestoreapi.com/products";
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  };

  useEffect(() => {
    getCategoryFromStore();
    getProductsFromStore();
  }, []);

  return (
    <SafeAreaView style={AppStyles.screenbackground}>
      <View style={[AppStyles.screenContent, { marginTop: 40 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Image
            style={{ borderRadius: 25, borderWidth: 2, borderColor: "grey" }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
              width: 40,
              height: 40,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 25,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              router.push("home/mycart");
            }}
          >
            <FontAwesome name="shopping-basket" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <SearchBar />

        <Categories
          categories={categories}
          onPress={(category) => {}}
          onSeeAll={() => {}}
        />

        <View style={{ height: 20 }} />
        <ProductHorizontalList
          productData={productData.slice(0, 10)}
          onPress={(product) => {
            router.push({
              pathname: "home/productdetail",
              params: { id: product.id },
            });
          }}
          onSeeAll={() => {}}
          title={"Top Selling"}
        />
        <View style={{ height: 20 }} />

        <ProductHorizontalList
          productData={productData.slice(10, 20)}
          onPress={(product) => {
            router.push({
              pathname: "home/productdetail",
              params: { id: product.id },
            });
          }}
          onSeeAll={() => {}}
          title={"New In"}
        />
      </View>
    </SafeAreaView>
  );
}
