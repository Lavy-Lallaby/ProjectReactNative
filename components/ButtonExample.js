import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const ButtonExample = () => {

    const onPressAlert = () => {
        alert('Hello')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>
                    Button Example
                </Text>
                <Button onPress={onPressAlert}
                    title='Click Me'
                    color='#0DF051'>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
