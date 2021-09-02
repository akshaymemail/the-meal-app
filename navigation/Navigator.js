import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import Categories from "../views/Categories"
import Meals from "../views/Meals"
import MealDetails from "../views/MealDetails"
import { Colors } from "../constants/Colors"
import { TouchableNativeFeedback } from "react-native"
import { Ionicons } from "@expo/vector-icons"

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
            title: "Categories"
          }}
          component={Categories}
        />
        <Stack.Screen
          name="meals"
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: route.params.color }
          })}
          component={Meals}
        />
        <Stack.Screen
          name="meal-details"
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: route.params.color },
            headerRight: () => (
              <TouchableNativeFeedback>
                <Ionicons
                  name="ios-star"
                  onPress={() => {}}
                  style={{ fontSize: 25, color: "#f1f1f1" }}
                />
              </TouchableNativeFeedback>
            )
          })}
          component={MealDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
