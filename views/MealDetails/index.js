import React from "react"
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native"

export default function MealDetails({ navigation, route }) {
  const { item } = route.params
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.details}>
        <Text>{item.duration}m</Text>
        <Text>{item.complexity.toUpperCase()}</Text>
        <Text>{item.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}> Ingredients </Text>
      {item.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.listItem}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.title}> Steps </Text>
      {item.steps.map((step, index) => (
        <Text key={index} style={styles.listItem}>
          {step}
        </Text>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%"
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10
  }
})
