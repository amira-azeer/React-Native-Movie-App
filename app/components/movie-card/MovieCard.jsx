import { View, Text, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import styles from './movie-card.style'


const MovieCard = ({ item, handleClick }) => {
    const { height, width } = Dimensions.get('window')
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image
            source={require('../../assets/moviePoster1.png')}
            style={{
                width: width * 0.6,
                height: height * 0.4,
                borderRadius:10,
            }}
            
        />
    </TouchableWithoutFeedback>
  )
}

export default MovieCard