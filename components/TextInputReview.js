import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native'

const TextInputReview = () => {

    const [inputT, setInput] = useState("")

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ color: 'blue' }}>
                    {inputT}
                </Text>
                <TextInput style={styles.input}
                    onChangeText={(inputT) => { setInput(inputT) }}>
                </TextInput>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
    }
})

export default TextInputReview