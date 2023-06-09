/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
    return (

        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name="sun" size={40} color="black" />
                <Text style={styles.feels}>Current Weather</Text>
                <Text style={styles.container.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <RowText containerStyle={styles.highLowWrapper}
                    messageOneStyle={styles.highLowWrapper.highLow}
                    messageTwoStyle={styles.highLowWrapper.highLow}
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                />
            </View>
            <RowText containerStyle={styles.footer}
                messageOneStyle={styles.footerText}
                messageTwoStyle={styles.footerText}
                messageOne={'Its sunny'}
                messageTwo={'Its perfect t-shirt weather'}
            />

            {/* Code refactoring following components structure
                <View style={styles.footer}>
                <Text style={styles.footer.t}>Its sunny</Text>
                <Text style={styles.footer.t}>Its perfect t-shirt weather</Text>
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    },
    container: {
        //marginTop: 50,
        flex: 1,
        alignItems: 'center',
        // nexted json object in styling
        temp: {
            fontSize: 30,
            fontWeight: 900
        }
    },
    feels: {
        fontSize: 20
    },
    // separte object
    highLowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        highLow: {
            fontSize: 20,
            fontWeight: 900,
            padding: 2
        }
    },
    footer: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        fontWeight: 900
    }

})

export default CurrentWeather
