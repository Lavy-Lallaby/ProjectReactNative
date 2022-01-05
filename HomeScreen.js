import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Ionicons name='home' size={30} color='#79D5EC'></Ionicons>
            <Text>หน้าหลัก</Text>
            <Button
                title="เกี่ยวกับ"
                onPress={() => navigation.navigate('About Me',
                {email:'Jakkit_st@tni.ac.th'})}
            ></Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
