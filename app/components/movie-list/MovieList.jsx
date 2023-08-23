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
import { fallbackMoviePoster, image185 } from "../../api/movie-db-request";


const MovieList = ({title, hideSeeAll, data }) => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");

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
        // contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        { data && data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View>
                <Image
                  source={{uri: image185(item.poster_path) || fallbackMoviePoster}}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    margin: 5,
                    borderRadius: 30,
                  }}
                />
                <Text style={styles.MovieName}>
                  {" "}
                  {item.original_title?.length > 14
                    ? item.original_title.slice(0, 15) + "..."
                    : item.original_title}{" "}
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
