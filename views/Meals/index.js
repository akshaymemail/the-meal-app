import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function Meals({ navigation }) {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.heading}>Meals Screen</Text>
      </View>
      <View style={styles.action}>
        <Button
          title="Go to meal details"
          onPress={() => navigation.navigate("meal-details")}
        />
      </View>
    </View>
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
