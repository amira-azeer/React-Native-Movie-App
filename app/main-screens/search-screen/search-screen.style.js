import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "#161715",
  },
  SearchView: {
    marginHorizontal: 20,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: "50,",
  },
  TextInput: {
    margin: "4%",
    flex: 1,
    fontWeight: "600",
    color: "white",
    fontSize: 15,
  },
  TouchableOpacity: {
    margin: "3%",
  },
  SearcResultsText: {
    color: "white",
    fontWeight: "600",
    margin: "4%",
  },
  SearchResultView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  MoviePoster: {
    marginBottom: "4%",
  },
  MovieName: { color: "white", margin: "2%" },
});

export default styles;
