import React from "react"
import { StyleSheet, FlatList } from "react-native"
import MealItem from "../../components/MealItem"
import { MEALS } from "../../data/fake-data"

export default function Meals({ route, navigation }) {
  const Meals = MEALS.filter(
    (meal) => meal.categoryids.indexOf(route.params.id) >= 0
  )
  return (
    <FlatList
      numColumns={2}
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
