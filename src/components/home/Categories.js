import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../resources/Colors";

export default function Categories(props) {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Text>Categories</Text>
        <TouchableOpacity onPress={props.onSeeAll}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.categories}
        renderItem={({ item }) => (
          <CategoryItem item={item} onPress={() => props.onPress(item)} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const CategoryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        key={item.text}
        style={{
          alignItems: "center",
          marginRight: 20,
          padding: 10,
          backgroundColor: Colors.primary,
          borderRadius: 25,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: 600, color: "white" }}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
