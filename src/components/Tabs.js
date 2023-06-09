/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from '../screens/CurrentWeather'
import City from '../screens/City'
import UpcomingWeather from '../screens/UpcomingWeather'
// For navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
// tab object initalized
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'lightblue'
            },
            headerStyle: {
                backgroundColor: 'lightblue'
            }, headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25
            }
        }}>

            <Tab.Screen name={'current'} component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'droplet'} size={25}
                            color={focused ? 'tomato' : 'black'} />
                    )
                }} />
            <Tab.Screen name={'Upcoming Weather'} component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Feather name={'clock'} size={20} color={focused ? 'tomato' :
                                'black'} />
                        )
                    }
                }} />
            <Tab.Screen name={'city'} component={City}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Feather name={'home'} size={20} color={focused ? 'tomato' :
                            'black'} />)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default Tabs