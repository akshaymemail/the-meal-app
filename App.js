import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import Navigator from "./navigation/Navigator"

// loading custom fonts
const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={(e) => console.log(e)}
      />
    )
  }
  return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
