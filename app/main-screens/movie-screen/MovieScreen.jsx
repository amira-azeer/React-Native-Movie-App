import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./movie-screen.style";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import MovieCast from "../../components/movie-cast/MovieCast";
import MovieList from "../../components/movie-list/MovieList";
import LoadScreen from "../../components/load-screen/LoadScreen";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  const { height, width } = Dimensions.get("window");
  const topMargin = Platform.OS === "ios" ? "10%" : "80%";

  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similiarMovies, setSimiliarMovies] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    // API call to catch movie details
  }, [item]);

  return (
    <ScrollView
      style={styles.ScrollView}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.View}>
        {/* Back Button */}
        <SafeAreaView style={styles.SafeAreaView(topMargin)}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <HeartIcon size="35" color={isFavourite ? "red" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>

        {/* Movie Poster */}
        {loading ? (
          <LoadScreen />
        ) : (
          <View>
            <Image
              source={require("../../assets/moviePoster1.png")}
              style={{
                width: width,
                height: height * 0.7,
              }}
            />
            <LinearGradient
              style={{
                width,
                height: height * 0.4,
                position: "absolute",
                bottom: 0,
              }}
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 0.9 }}
            />
          </View>
        )}
      </View>

      <View style={{ marginTop: -(height * 0.09) }}>
        {/* Movie Title */}
        <Text style={styles.MovieName}>Marvel : Lava Girl</Text>

        {/* Movie status, release date, runtime */}
        <Text style={styles.MovieDetails}>Released : 2021 - 170 min</Text>

        {/* Genres */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 4,
            margin: 2,
          }}
        >
          <Text style={styles.MovieDetails}>
            Action | Adventure | Superhero{" "}
          </Text>
        </View>

        {/* Description */}
        <Text style={styles.MovieDescription}>
          Captain Marvel is a 2019 American superhero film based on Marvel
          Comics featuring the character Carol Danvers / Captain Marvel.
          Produced by Marvel Studios and distributed by Walt Disney Studios
          Motion Pictures, it is the 21st film in the Marvel Cinematic Universe
          (MCU).
        </Text>
      </View>

      {/* Cast of the movie */}
      <MovieCast navigation={navigation} cast={cast} />

      {/* Similiar movies */}
      <MovieList
        title="Similiar Movies"
        hideSeeAll={true}
        data={similiarMovies}
      />
    </ScrollView>
  );
};

export default MovieScreen;
