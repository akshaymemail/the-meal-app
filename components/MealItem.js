import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native"
import { Colors } from "../constants/Colors"

const MealItem = ({ item, navigation, route }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate("meal-details", {
            color: route.params ? route.params.color : Colors.primaryColor,
            title: item.title,
            item: item
          })
        }
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: item.imageUrl }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "90%"
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,.5)",
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: "#f1f1f1"
  }
})
