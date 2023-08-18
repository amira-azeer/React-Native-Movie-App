import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: "#161715",
  },
  SafeAreaView: (topMargin) => ({
    position: "absolute",
    zIndex: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: topMargin,
  }),
  View: {
    width: "100%",
  },
  TouchableOpacity: {
    margin: 10,
    borderRadius: 10,
  },
  MovieName: {
    color: "white",
    textAlign: "center",
    fontSize: "30%",
    fontWeight: "600",
    letterSpacing: 2,
  },
  MovieDetails: {
    color: "#C3C3C2",
    textAlign: "center",
    fontSize: "15%",
    letterSpacing: 2,
  },
  MovieDescription: {
    color: "#C3C3C2",
    fontSize: "15%",
    letterSpacing: 1,
    margin: '2.5%',
  },
});

export default styles;
