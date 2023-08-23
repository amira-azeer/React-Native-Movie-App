import {
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useCallback, useState } from "react";

import styles from "./search-screen.style";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { moviePoster } from "../../assets/moviePoster2.png";
import LoadScreen from "../../components/load-screen/LoadScreen";
import { debounce } from "lodash";
import {
  fallbackMoviePoster,
  fetchSearchMovieResults,
  image185,
} from "../../api/movie-db-request";

const SearchScreen = () => {
  const { height, width } = Dimensions.get("window");
  let movieName = "Ant-Man and the Wasp: Quantumania ";
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value) => {
    console.log(value)
    if (value && value.length > 2) {
      setLoading(true);
      try {
        fetchSearchMovieResults({
          query: value,
          include_adult: "false",
          language: "en-US",
          page: "1",
        }).then((data) => {
          console.log("Got search results", data.results);
          setLoading(false);
          if (data && data.results) setResults(data.results);
        });
      } catch (error) {
        console.log("Error fetching search results:", error);
        setLoading(false);
        setResults([]);
      }
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.SearchView}>
        <TextInput
          onChangeText={handleTextDebounce}
          style={styles.TextInput}
          placeholderTextColor={"lightgray"}
          placeholder="Search Movie..."
        />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.goBack()}
        >
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <LoadScreen />
      ) : (
        // Search results
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ paddingVertical: 3 }}
        >
          <Text style={styles.SearcResultsText}>Results</Text>

          <View style={styles.SearchResultView}>
            {loading ? (
              <LoadScreen />
            ) : results?.length > 0 ? (
              results?.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigation.push("Movie", item)}
                  >
                    <View style={styles.MoviePoster}>
                      <Image
                        source={{
                          uri:
                            image185(item?.poster_path) || fallbackMoviePoster,
                        }}
                        style={{
                          width: width * 0.44,
                          height: height * 0.3,
                        }}
                      />
                      <Text style={styles.MovieName}>
                        {item.title?.length > 10
                          ? item.title.slice(0, 10) + "..."
                          : item.title}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })
            ) : (
              <Text style={styles.MovieName}>
                {" "}
                Oops sorry! No movies found.
              </Text>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
