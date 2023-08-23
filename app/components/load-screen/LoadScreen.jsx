import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import styles from './load-screen.style'
import * as Progress from 'react-native-progress';


export default function LoadScreen() {
    const { height, width } = Dimensions.get('window')

  return (
    <View style={styles.MainView(height, width)}> 
      <Progress.CircleSnail thickness={10} size={100} color='#eab308'/>
    </View>
  )
}