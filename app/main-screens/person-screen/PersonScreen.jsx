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
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import styles from "./person-screen";
import { useNavigation, useRoute } from "@react-navigation/native";
import MovieList from "../../components/movie-list/MovieList";
import LoadScreen from "../../components/load-screen/LoadScreen";
import { fallbackPersonImage, fetchPersonDetails, fetchPersonMovie, image342 } from "../../api/movie-db-request";

export default function PersonScreen() {
  const { params : item } = useRoute()
  const { height, width } = Dimensions.get("window");
  const topMargin = Platform.OS === "ios" ? "10%" : "80%";
  const navigation = useNavigation();
  const [ personDetails, setpersonDetails ] = useState();
  const [ personMovies, setpersonMovies ] = useState();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPersonDetails(item.id)
    getPersonMovies(item.id)
  }, [])


  const getPersonDetails = async(id) => {
    const data = await fetchPersonDetails(id)
    if(data) setpersonDetails(data)
    setLoading(false)
  }

  const getPersonMovies = async(id) => {
    const data = await fetchPersonMovie(id)
    if(data && data.cast) setpersonMovies(data.cast)
    setLoading(false)
  }

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
              source={{uri: image342(personDetails?.profile_path) || fallbackPersonImage }}
              style={styles.ActorImage(height, width)}
            />
          </View>

          {/* Person Name */}
          <View style={styles.ActorNameView}>
            <Text style={styles.ActorName}>{personDetails?.name}</Text>
            <Text style={styles.ActorBirthPlace}>{personDetails?.place_of_birth}</Text>
          </View>

          <View style={styles.ActorDetailView}>
            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Gender</Text>
              <Text style={styles.ActorDetails}>{ personDetails?.gender == '1' ? 'Female' : 'Male'}</Text>
            </View>

            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Birthday</Text>
              <Text style={styles.ActorDetails}>{personDetails?.birthday}</Text>
            </View>

            <View style={styles.ActorDetailView.SubView}>
              <Text style={styles.ActorDetails}>Known For</Text>
              <Text style={styles.ActorDetails}>{personDetails?.known_for_department}</Text>
            </View>

            <View style={styles.ActorDetailView.PopularitySubView}>
              <Text style={styles.ActorDetails}>Popularity</Text>
              <Text style={styles.ActorDetails}>{personDetails?.popularity}</Text>
            </View>
          </View>

          <View style={styles.ActorDescriptionView}>
            <Text style={styles.ActorDescriptionView.ActorBiography}>
              Biography
            </Text>
            <Text style={styles.ActorDescriptionView.ActorBioDescription}>
              {personDetails?.biography}
            </Text>
          </View>

          <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
}
