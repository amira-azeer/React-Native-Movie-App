import { View, Text, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import styles from './movie-card.style'
import { fallbackMoviePoster, image500 } from '../../api/movie-db-request'


const MovieCard = ({ item, handleClick, }) => {

    const { height, width } = Dimensions.get('window')
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
        <Image
            source={{uri: image500(item.poster_path) || fallbackMoviePoster}}
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