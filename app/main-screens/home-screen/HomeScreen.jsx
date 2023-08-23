import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import styles from "./home-screen.style";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import MovieList from "../../components/movie-list/MovieList";
import LoadScreen from "../../components/load-screen/LoadScreen";
import { fetchTopRatedgMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../../api/movie-db-request";


const HomeScreen = () => {
  const [trending, setTrending] = useState();
  const [upcoming, setUpcoming] = useState();
  const [topRated, setTopRated] = useState();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies()
    if( data && data.results) setTrending(data.results)
    setLoading(false)
  }

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies()
    if( data && data.results) setUpcoming(data.results)
    setLoading(false)
  }

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedgMovies()
    if( data && data.results) setTopRated(data.results)
    setLoading(false)
  }


  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar style="light" />

      {/* Search bar & Logo */}
      <View style={styles.View}>
        <TouchableOpacity>
          <Bars3Icon style={styles.Icons} />
        </TouchableOpacity>

        <Text style={styles.Text}>
          {" "}
          <Text style={styles.Letter}>M</Text>ovies{" "}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <MagnifyingGlassIcon style={styles.Icons} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <LoadScreen />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          {/* Trending movies carousel */}
          { trending?.length>0 && <TrendingMovies data={trending} />
}
          {/* Upcoming movies row */}
          <MovieList title="Upcoming Movies" data={upcoming} />

          {/* To rated movies row */}
          <MovieList title="Top-Rated" data={topRated} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
