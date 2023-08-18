import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../main-screens/home-screen/HomeScreen'
import MovieScreen from '../main-screens/movie-screen/MovieScreen'

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{ headerShown: false, }} component={HomeScreen}/>
            <Stack.Screen name='Movie' options={{ headerShown: false, }} component={MovieScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation