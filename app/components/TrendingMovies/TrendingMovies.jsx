import { View, Text, Dimensions } from "react-native";
import React from "react";

import styles from "./trending-movies.style";
import Carousel from "react-native-snap-carousel";

import MovieCard from "../movie-card/MovieCard";

import { useNavigation } from "@react-navigation/native";


const TrendingMovies = ({ data }) => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };



  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Trending Movies</Text>
      <Carousel
        data={data}
        renderItem={({item}) => ( // Destructure item before passing
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default TrendingMovies;
