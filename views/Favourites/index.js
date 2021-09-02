import React from "react"
import { StyleSheet, FlatList } from "react-native"
import MealItem from "../../components/MealItem"
import { MEALS } from "../../data/fake-data"

export default function Favorites({ route, navigation }) {
  const Meals = MEALS.filter(
    (meal) =>
      meal.id === "m1" ||
      meal.id === "m2" ||
      meal.id === "m3" ||
      meal.id === "m4" ||
      meal.id === "m5"
  )

  return (
    <FlatList
      data={Meals}
      renderItem={({ item }) => (
        <MealItem navigation={navigation} route={route} item={item} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 30
  },
  action: {
    marginVertical: 20
  }
})
