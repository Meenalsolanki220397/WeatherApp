/* eslint-disable prettier/prettier */
import React from 'react'
// For navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './src/components/Tabs'
// tab object initalized
// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer >
      <Tabs />
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