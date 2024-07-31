import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ProductItem from "./ProductItem";
import Size from "../../resources/Size";

export default function ProductHorizontalList({ onPress, ...props }) {
  const renderItem = ({ item }) => (
    <ProductItem item={item} onPress={onPress} isGrid={false} />
  );
  const keyExtractor = (item) => item.id;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Text>{props.title}</Text>
        <TouchableOpacity onPress={props.onSeeAll}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.productData}
        getItemLayout={(data, index) => ({
          length: Size.productItemWidth,
          offset: Size.productItemWidth * index,
          index,
        })}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
