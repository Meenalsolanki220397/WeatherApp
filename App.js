/* eslint-disable no-catch-shadow */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, Alert } from 'react-native'
// For navigation
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

// tab object initalized
// const Tab = createBottomTabNavigator()

const App = () => {
  // custom hook
  const [loading, weather, err] = useGetWeather()
  console.log(loading, weather, err)

  if (weather && weather.list) {
    return (
      <NavigationContainer >
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default App