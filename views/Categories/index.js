import React from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback
} from "react-native"
import { CATEGORIES } from "../../data/fake-data"

export default function Categories({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <TouchableNativeFeedback
          onPress={() =>
            navigation.navigate("meals", {
              id: itemData.item.id,
              title: itemData.item.title,
              color: itemData.item.color
            })
          }
        >
          <View
            style={{
              ...styles.container,
              ...{ backgroundColor: itemData.item.color }
            }}
          >
            <Text style={styles.title}>{itemData.item.title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
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
    overflow: "hidden",
    borderRadius: 15
  },
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "#424242",

    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 18
  }
})
