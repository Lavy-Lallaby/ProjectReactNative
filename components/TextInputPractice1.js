import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'

const TextInputPractice1 = () => {

    const [inputText, setInputName] = useState('')
    const [inputMail, setInputMail] = useState('')
    const checkInput = () => {
        if (!inputText.trim() || !inputMail.trim()) {
            if (!inputMail) {
                alert("Please Input Email")
            } else {
                alert("Please Input Name")
            }
        } else {
            alert("Success")
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput placeholder="Enter Your Name"
                    style={styles.textInputStyle}
                    onChangeText={(inputText) => { setInputName(inputText) }}>
                </TextInput>
                <TextInput placeholder="Enter Your Email"
                    style={styles.textInputStyle}
                    onChangeText={(inputMail) => { setInputMail(inputMail) }}>
                </TextInput>
                <View style={{ marginTop: 30 }}>
                    <Button title='SUBMIT' color='#0DEEEA' onPress={checkInput}>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TextInputPractice1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
})
