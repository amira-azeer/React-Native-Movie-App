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
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimiliarMovies,
  image500,
} from "../../api/movie-db-request";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const { height, width } = Dimensions.get("window");
  const topMargin = Platform.OS === "ios" ? "10%" : "80%";

  const [cast, setCast] = useState();
  const [similiarMovies, setSimiliarMovies] = useState();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id)
    getSimiliarMovies(item.id)
  }, [item]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
    setLoading(false);
  };

  const getSimiliarMovies = async (id) => {
    const data = await fetchSimiliarMovies(id);
    if (data && data.results){
      setSimiliarMovies(data.results)
    };
    setLoading(false);
  };

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
              source={{
                uri: image500(movie?.poster_path) || fallbackMoviePoster,
              }}
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
        <Text style={styles.MovieName}> {movie?.original_title} </Text>

        {/* Movie status, release date, runtime */}
        {movie.id ? (
          <Text style={styles.MovieDetails}>
            {" "}
            {movie?.status} : {movie?.release_date} - {movie?.runtime} min
          </Text>
        ) : null}

        {/* Genres */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 4,
            margin: 2,
          }}
        >
          {movie?.genres?.map((genre, index) => {
            let showAsterisk = index + 1 != movie.genres.length;
            return <Text key={index} style={styles.MovieDetails}>{genre?.name} {showAsterisk ? '-' : null} </Text>;
          })}
        </View>

        {/* Description */}
        <Text style={styles.MovieDescription}>{movie?.overview}</Text>
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
