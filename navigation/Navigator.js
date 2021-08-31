import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import Categories from "../views/Categories"
import Meals from "../views/Meals"
import MealDetails from "../views/MealDetails"

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="categories">
        <Stack.Screen
          name="categories"
          options={{ title: "Welcome, Akshay!" }}
          component={Categories}
        />
        <Stack.Screen
          name="meals"
          options={{ title: "Meals" }}
          component={Meals}
        />
        <Stack.Screen
          name="meal-details"
          options={{ title: "Meal Details" }}
          component={MealDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
