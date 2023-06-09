/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
// For navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// tab object initalized
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather} />
        <Tab.Screen name={'UpcomingWeather'} component={UpcomingWeather} />
        <Tab.Screen name={'City'} component={City} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name={'Current'} component={CurrentWeather} />
        <Stack.Screen name={'UpcomingWeather'} component={UpcomingWeather} />
        <Stack.Screen name={'City'} component={City} />
      </Stack.Navigator> */}
      {/* <View style={style.container}>
        <CurrentWeather />
        {/* <UpcomingWeather /> */}
      {/* <City />}
      </View> */}
    </NavigationContainer>

  )
}

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   }
// })

export default App;