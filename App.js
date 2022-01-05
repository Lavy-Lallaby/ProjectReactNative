import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstP from './screens/FirstP';
import SecondP from './screens/SecondP';
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          //title: 'First Page', headerStyle: {
            title: 'หน้าหลัก', headerStyle: {
            backgroundColor: '#0068FF',
           // backgroundColor: '#E9BFE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="SecondP" component={SecondP} options={{
          title: 'Second Page', headerStyle: {
            backgroundColor: '#E9BFE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
