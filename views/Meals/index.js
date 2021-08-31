import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Meals() {
  return (
    <View style={styles.screen}>
      <Text>Meals Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
