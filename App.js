/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
// For navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
// tab object initalized
// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const App = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])
  if (location) {
    console.log(location)
  }
  if (loading) {
    return (
      <ActivityIndicator />
    )
  } else {
    return (
      <NavigationContainer >
        <Tabs />
      </NavigationContainer>
    )
  }

}

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   }
// })

export default App;