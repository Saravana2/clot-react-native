import React from "react";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductList({ onPress, ...props }) {
  const renderItem = ({ item }) => (
    <ProductItem item={item} onPress={onPress} isGrid={true} />
  );
  return (
    <>
      <FlatList
        data={props.productData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
