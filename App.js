import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'

const App = () => {
  return (
    <View style={style.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App;