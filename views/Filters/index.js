import React, { useState } from "react"
import { View, Text, StyleSheet, Switch } from "react-native"
import { Colors } from "../../constants/Colors"

const FilterSwitch = ({ label, state, onChange }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Colors.primaryColor}
      value={state}
      onValueChange={() => onChange(!state)}
    />
  </View>
)

export default function Filters() {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isNonVegetarian, setIsNonVegetarian] = useState(true)
  const [isVegan, setIsVegan] = useState(false)
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      {[
        {
          label: "Gluten-Free",
          state: isGlutenFree,
          onChange: setIsGlutenFree
        },
        { label: "Vegetarian", state: isVegetarian, onChange: setIsVegetarian },
        {
          label: "NonVegetarian",
          state: isNonVegetarian,
          onChange: setIsNonVegetarian
        },
        {
          label: "Is Vegan",
          state: isVegan,
          onChange: setIsVegan
        }
      ].map((rule) => (
        <FilterSwitch
          label={rule.label}
          state={rule.state}
          onChange={rule.onChange}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20
  }
})
