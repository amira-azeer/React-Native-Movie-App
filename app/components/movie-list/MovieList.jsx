import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

import styles from "./movie-list.style";
import { useNavigation } from "@react-navigation/native";



const MovieList = ({title, hideSeeAll, data }) => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const movies = "Ant Man Aint got no chill";

  return (
    <View style={styles.View}>
      <View style={styles.SubView}>
        <Text style={styles.Text}> {title} </Text>
        { !hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.TextButton}> See All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View>
                <Image
                  source={require("../../assets/moviePoster1.png")}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                />
                <Text style={styles.MovieName}>
                  {" "}
                  {movies.length > 14
                    ? movies.slice(0, 14) + "..."
                    : movies}{" "}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
