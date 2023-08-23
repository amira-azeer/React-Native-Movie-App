import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./movie-cast.style";
import { fallbackPersonImage, image185 } from "../../api/movie-db-request";



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
                  source={{ uri: image185(person.profile_path) || fallbackPersonImage}}
                  style={styles.ActorImage(width, height)}
                />
                <Text style={styles.CharacterName}>
                  {" "}
                  {person.name.length > 10
                    ? person.character.slice(0, 10) + "..."
                    : person.character}{" "}
                </Text>

                <Text style={styles.ActorName}>
                  {" "}
                  {person.name.length > 10
                    ? person.name.slice(0, 10) + "..."
                    : person.name}{" "}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default MovieCast;
