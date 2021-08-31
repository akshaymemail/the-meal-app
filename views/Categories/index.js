import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { CATEGORIES } from "../../data/fake-data"

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

export default function Categories({ navigation }) {
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 200,
    alignItems: "center"
  }
})
