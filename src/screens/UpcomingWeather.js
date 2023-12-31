/* eslint-disable prettier/prettier */
import React from 'react'
import {
    SafeAreaView, Text, StyleSheet, FlatList,
    StatusBar, ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA =

    [
        {
            'main': {
                'temp_min': 296.34,
                'temp_max': 298.24,
            },
            'weather': [
                {
                    'description': 'light rain',
                }
            ],
            'dt_txt': '2022-08-30 16:00:00'
        },
        {
            'main': {
                'temp_min': 296.2,
                'temp_max': 296.31,
            },
            'weather': [
                {
                    'description': 'light rain',
                }
            ],
            'dt_txt': '2022-08-30 17:00:00'
        },
        {
            'main': {
                'temp_min': 292.84,
                'temp_max': 294.94,
            },
            'weather': [
                {
                    'description': 'light rain'
                }
            ],
            'dt_txt': '2022-08-30 17:10:00'
        }]

// single item in lst to be rendered will follow this format
// const Item = (props) => {
//     const { dt_txt, min, max, condition } = props // destructering props
//     return (
//         <View style={style.item}>
//             <Feather name={'sun'} size={50} color={'white'} />
//             <Text style={style.date}>{dt_txt}</Text>
//             <Text style={style.temp}>{min}</Text>
//             <Text style={style.temp}>{max}</Text>

//         </View>
//     )
// }

const UpcomingWeather = () => {

    // making custom render function which is passed to flat list
    const render = ({ item }) => {
        return (
            <ListItem dt_txt={item.dt_txt} min={item.main.temp_min}
                max={item.main.temp_max} condition={item.weather[0].description} />
        )
    }
    return (
        <SafeAreaView style={style.wrapper}>
            <ImageBackground style={style.image}
                source={require('../../assets/upcomingWeather-backgound.jpg')}>

                <Text>Upcoming Weather</Text>
                {/* 
                using static image example
                but we eventually want to set background image
                so we are using imagebackground component
                <Image style={style.image}
                    source={require('../../assets/upcomingWeather-backgound.jpg')} /> */}
                <FlatList
                    data={DATA}
                    // renderItem accepts call back function which iterates
                    // over item and return some JSX
                    renderItem={render}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'red',
        //marginTop: StatusBar.currentHeight || 0
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderWidth: 3
    },
    temp: {
        fontSize: 20,
        padding: 2
    },
    date: {
        padding: 5,
        fontSize: 12
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default UpcomingWeather
