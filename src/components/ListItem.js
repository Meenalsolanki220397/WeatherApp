/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props // destructering props
    return (
        <View style={style.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={style.date}>{dt_txt}</Text>
            <Text style={style.temp}>{min}</Text>
            <Text style={style.temp}>{max}</Text>

        </View>
    )
}

const style = StyleSheet.create({
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
    }
})
export default ListItem