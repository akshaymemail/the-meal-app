import React from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native"
import { Colors } from "../../constants/Colors"
import { CATEGORIES } from "../../data/fake-data"

export default function Categories({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate("meals", {
            id: itemData.item.id,
            title: itemData.item.title
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
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
