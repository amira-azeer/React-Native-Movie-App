import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import styles from "./person-screen";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../../components/movie-list/MovieList";
import LoadScreen from "../../components/load-screen/LoadScreen";

export default function PersonScreen() {
  const { height, width } = Dimensions.get("window");
  const topMargin = Platform.OS === "ios" ? "10%" : "80%";
  const navigation = useNavigation();
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.ScrollView}
    >
      {/* Back Button */}
      <SafeAreaView style={styles.SafeAreaView(topMargin)}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </SafeAreaView>

      {loading ? (
        <LoadScreen />
      ) : (
        <View>
          {/* Person Details */}
          <View style={styles.PersonDetailView}>
            <Image
              source={require("../../assets/castImage2.png")}
              style={styles.ActorImage(height, width)}
            />
          </View>

          {/* Person Name */}
          <View style={styles.ActorNameView}>
            <Text style={styles.ActorName}>Keanu Reaves</Text>
            <Text style={styles.ActorBirthPlace}>London, United Kingdom</Text>
          </View>

          <View style={styles.ActorDetailView}>
            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Gender</Text>
              <Text style={styles.ActorDetails}>Male</Text>
            </View>

            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Birthday</Text>
              <Text style={styles.ActorDetails}>1945-08-14</Text>
            </View>

            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Known For</Text>
              <Text style={styles.ActorDetails}>Acting</Text>
            </View>

            <View style={styles.ActorDetailView.PopularitySubView}>
              <Text style={styles.ActorDetails}>Popularity</Text>
              <Text style={styles.ActorDetails}>64.23</Text>
            </View>
          </View>

          <View style={styles.ActorDescriptionView}>
            <Text style={styles.ActorDescriptionView.ActorBiography}>
              Biography
            </Text>
            <Text style={styles.ActorDescriptionView.ActorBioDescription}>
              Keanu Reeves is a Canadian actor known for his diverse roles and
              distinctive presence in the film industry. Born on September 2,
              1964, in Beirut, Lebanon, Reeves rose to fame with his
              performances in iconic films spanning various genres.
            </Text>
          </View>

          <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
}
