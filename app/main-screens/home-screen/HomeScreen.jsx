import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import styles from "./home-screen.style";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import MovieList from "../../components/movie-list/MovieList";
import { useNavigation } from "@react-navigation/native";
import LoadScreen from "../../components/load-screen/LoadScreen";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5, 6]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5, 6]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
          <TrendingMovies data={trending} />

          {/* Upcoming movies row */}
          <MovieList title="Upcoming Movies" data={upcoming} />

          {/* To rated movies row */}
          <MovieList title="Top-Rated" data={upcoming} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
