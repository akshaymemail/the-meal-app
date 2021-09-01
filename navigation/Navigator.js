import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import Categories from "../views/Categories"
import Meals from "../views/Meals"
import MealDetails from "../views/MealDetails"
import { Colors } from "../constants/Colors"

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="categories"
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTintColor: Colors.secondaryColor,
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name="categories"
          options={{
            title: "Categories!"
          }}
          component={Categories}
        />
        <Stack.Screen
          name="meals"
          options={({ route }) => ({ title: route.params.title })}
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
