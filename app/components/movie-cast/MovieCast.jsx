import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./movie-cast.style";



const MovieCast = ({ navigation, cast }) => {
  let personName = "Keanu Reaves";
  let characterName = "John Wick";
  let { width, height } = Dimensions.get('window')

  return (
    <View style={styles.View}>
      <Text style={styles.CastHeader}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity key={index} style={styles.ScrollView} 
                onPress={() => navigation.navigate('Person', person)}
              >
                <Image
                  source={require("../../assets/castImage1.png")}
                  style={styles.ActorImage(width, height)}
                />
                <Text style={styles.CharacterName}>
                  {" "}
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}{" "}
                </Text>

                <Text style={styles.ActorName}>
                  {" "}
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}{" "}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default MovieCast;
