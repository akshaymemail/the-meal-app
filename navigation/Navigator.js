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
import Filters from "../views/Filters"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { AntDesign } from "@expo/vector-icons"

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const Drawer = createDrawerNavigator()

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
        options={({ navigation }) => ({
          title: "CATEGORIES",
          headerLeft: () => (
            <AntDesign
              name="menuunfold"
              onPress={() => navigation.openDrawer()}
              style={{ fontSize: 30, color: "#f1f1f1", marginRight: 10 }}
            />
          )
        })}
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
        options={({ navigation }) => ({
          title: "MY FAVORITES",
          headerLeft: () => (
            <AntDesign
              name="menuunfold"
              onPress={() => navigation.openDrawer()}
              style={{ fontSize: 30, color: "#f1f1f1", marginRight: 10 }}
            />
          )
        })}
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

  // filter stack  navigation
  const FilterNavigation = () => (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.secondaryColor,
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="filters"
        options={({ navigation }) => ({
          title: "Filters",
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerLeft: () => (
            <AntDesign
              name="menuunfold"
              onPress={() => navigation.openDrawer()}
              style={{ fontSize: 30, color: "#f1f1f1", marginRight: 10 }}
            />
          )
        })}
        component={Filters}
      />
    </Stack.Navigator>
  )

  const TabNavigation = () => (
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
  )

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="filter"
          component={FilterNavigation}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
