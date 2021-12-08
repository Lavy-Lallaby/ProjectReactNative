import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const TouchableExample = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonFacebookStyle}
                activeOpacity={0.5}>
                <Image source={require('../images/facebook.png')}
                    style={styles.buttonImageIconStyle}>
                </Image>
                <View style={styles.buttonIconSeparatorStyle}></View>
                <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGPlusStyle}
                activeOpacity={0.5}>
                <Image source={require('../images/google-plus.png')}
                    style={styles.buttonImageIconStyle}>
                </Image>
                <View style={styles.buttonIconSeparatorStyle}></View>
                <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
            </TouchableOpacity>
        </View>

    )
}

export default TouchableExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderColor: '#fff',
        borderWidth: 0.5,
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
})
