/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {
    const { messageOne, messageTwo, messageOneStyle, messageTwoStyle, constainerStyle } = props
    return (
        <View style={constainerStyle}>
            <Text style={messageOneStyle}>{messageOne}</Text>
            <Text style={messageTwoStyle}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RowText;