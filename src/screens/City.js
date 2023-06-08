/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import IconText from '../components/IconText'
// want to pass multiple objects as style pass it as array of object
const City = () => {
    return (
        <SafeAreaView style={style.container}>
            <ImageBackground
                source={require('../../assets/cityBackground.jpg')}
                style={style.imageLayout}>
                <Text style={[style.cityName, style.textLayout]}>London</Text>
                <Text style={[style.countryName, style.textLayout]}>UK</Text>
                <View style={style.populationWrapper}>
                    <IconText
                        iconName={'user'} size={50} style={[style.populationWrapper]}
                        bodyText={8000} color={'red'} />
                </View>
                <View style={style.sunTimeZoneWrapper}>
                    <IconText
                        iconName={'sunrise'} size={50} style={[style.sunTimeZoneWrapper]}
                        bodyText={'5:45 am'} color={'white'} />
                    <IconText
                        iconName={'sunset'} size={50} style={[style.sunTimeZoneWrapper]}
                        bodyText={'6:30 pm'} color={'white'} />
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 30
    },
    countryName: {
        fontSize: 40
    },
    textLayout: {
        marginTop: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        padding: 2
    },
    populationWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'

    },
    sunTimeZoneWrapper: {
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City