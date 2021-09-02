import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import Categories from "../views/Categories"
import Meals from "../views/Meals"
import MealDetails from "../views/MealDetails"
import { Colors } from "../constants/Colors"
import { TouchableNativeFeedback } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Favorites from "../views/Favourites"

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  //category stack navigation
  const CategoriesNavigation = () => (
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
          title: "CATEGORIES"
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
                name="ios-star-outline"
                onPress={() => {}}
                style={{ fontSize: 25, color: "#f1f1f1" }}
              />
            </TouchableNativeFeedback>
          )
        })}
        component={MealDetails}
      />
    </Stack.Navigator>
  )

  // favorite stack navigation
  const FavoriteNavigation = () => (
    <Stack.Navigator
      initialRouteName="favorites"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.secondaryColor,
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="favorites"
        options={{ title: "MY FAVORITES" }}
        component={Favorites}
      />
      <Stack.Screen
        name="meal-details"
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerRight: () => (
            <TouchableNativeFeedback>
              <Ionicons
                name="ios-star-outline"
                onPress={() => {}}
                style={{ fontSize: 25, color: "#f1f1f1" }}
              />
            </TouchableNativeFeedback>
          )
        })}
        component={MealDetails}
      />
    </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "tomato",
          tabBarActiveTintColor: "#f1f1f1"
        }}
      >
        <Tab.Screen
          name="home"
          component={CategoriesNavigation}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons
                name="ios-restaurant"
                onPress={() => {}}
                style={{ fontSize: 25, color: "#f1f1f1" }}
              />
            )
          }}
        />
        <Tab.Screen
          name="favorite"
          component={FavoriteNavigation}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons
                name="ios-star"
                onPress={() => {}}
                style={{ fontSize: 25, color: "#f1f1f1" }}
              />
            ),
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: Colors.secondaryColor
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
