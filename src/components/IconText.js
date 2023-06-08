/* eslint-disable prettier/prettier */
import { StyleSheet, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'


const IconText = (props) => {
    const { iconName, bodyText, size, style, color } = props
    const { container, textTheme } = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={size} color={color} />
            <Text style={[textTheme, style]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textTheme: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default IconText