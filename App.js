import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'

const App = () => {
  return (
    <View style={style.container}>
      <CurrentWeather />
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