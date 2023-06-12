/* eslint-disable no-catch-shadow */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, Alert } from 'react-native'
// For navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { Button } from 'react-native'
//import { WEATHER_API_KEY } from '@env'
// tab object initalized
// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [err, setError] = useState(null)
  // api.openweathermap.org / data / 2.5 / forecast ? lat = { lat } & lon={ lon }& appid={API key }
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=a2625d84e503475b0be0e9865282063c`)
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let currentLocation = await Location.getCurrentPositionAsync({})
      setLat(currentLocation.coords.latitude)
      setLon(currentLocation.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])

  if (loading) {
    return (
      <View style={styles.container}>
        {/* <Button
          title="Press me"
          onPress={fetchWeatherData}
        /> */}
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  return (
    <NavigationContainer >
      <Tabs />
    </NavigationContainer>
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