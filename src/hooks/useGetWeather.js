/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [err, setError] = useState(null)
    // api.openweathermap.org / data / 2.5 / forecast ? lat = { lat } & lon={ lon }& appid={API key }
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2625d84e503475b0be0e9865282063c`)
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

    return [loading, weather, err]
}