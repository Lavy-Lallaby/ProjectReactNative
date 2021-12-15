import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

const Footer = () => {

    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Emo')
    const usersid = [
        { id: 1, name: 'John' },
        { is: 2, name: 'Timmo' }
    ]

    //once time use ef
    useEffect(() => {
        console.log('use ef')
    }, [])
    useEffect(() => {
        console.log('use ef2')
    }, [])
    useEffect(() => {
        console.log('use ef3')
    }, [title])

    return (
        <View>
            <Text style={styles.title}>Jakkit Ch{count}</Text>
            {
                usersid.map((user, index) => {
                    return <Text>{index + 1} {user.name}</Text>
                })
            }
            {/*{
                usersid.map((user) => {
                    return <Text>{user.name}</Text>
                })
            }
            {
                usersid.map((user) => {
                    return <Text key={user.id}>{user.name}</Text>
                })
            }*/}
            <Button title='bibi' onPress={setCount(count + 5)}></Button>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    }
})
