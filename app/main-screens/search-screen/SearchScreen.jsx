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
import React, { useState } from "react";

import styles from "./search-screen.style";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { moviePoster } from "../../assets/moviePoster2.png";
import LoadScreen from "../../components/load-screen/LoadScreen";

const SearchScreen = () => {
  const { height, width } = Dimensions.get("window");
  let movieName = "Ant-Man and the Wasp: Quantumania ";
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.SearchView}>
        <TextInput
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
            {results.length > 0 ? (
              results.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    // onPress={() => navigation.push("Movie", item)}
                  >
                    <View style={styles.MoviePoster}>
                      <Image
                        source={require("../../assets/moviePoster2.png")}
                        style={{
                          width: width * 0.44,
                          height: height * 0.3,
                        }}
                      />
                      <Text style={styles.MovieName}>
                        {movieName.length > 22
                          ? movieName.slice(0, 20) + "..."
                          : movieName}
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
