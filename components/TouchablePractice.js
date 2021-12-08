import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, View, TouchableOpacity } from 'react-native'

const TouchablePractice = () => {

    const [inputMail, setInputMail] = useState('')
    const [inputPass, setInputPass] = useState('')
    const checkInput = () => {
        alert('email:' + inputMail + '\n' + 'password:' + inputPass)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput color='#4dc4da'
                    placeholder="Email"
                    style={styles.textInputStyle}
                    onChangeText={(inputMail) => { setInputMail(inputMail) }}>
                </TextInput>
                <TextInput color='#4dc4da'
                    placeholder="Password"
                    style={styles.textInputStyle}
                    onChangeText={(inputPass) => { setInputPass(inputPass) }}>
                </TextInput>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity activeOpacity={0.25} style={styles.buttonStyle} onPress={checkInput}>
                        <View style={styles.ButtonStyle}></View>
                        <Text style={styles.buttonTextStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.25,
        marginTop: 15,
        borderColor: '#4dc4da'
    },
    ButtonStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4dc4da',
        borderColor: '#fff',
        borderWidth: 0.5,
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
})
