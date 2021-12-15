import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Logo = () => {

    const title = "TNI"
    const istitle = false
    const showD = () =>
        <Text>Hello Santie</Text>


    return (
        <View>
            <Text style={{ color: 'blue', fontSize: 18 }}>Hello World</Text>
            {
                //istitle === true && <Text>{title}</Text>
            }
            {
                istitle === false ? <Text>Thai-Nichi</Text> : <Text>{title}</Text>
            }
            {showD()}
            <Button title='bibi'></Button>
        </View>
    )
}

export default Logo
