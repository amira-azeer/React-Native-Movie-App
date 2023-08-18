import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View: {
    marginBottom: 8,
    marginTop: 16,
  },
  SubView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
    margin: 10,
  },
  TextButton: {
    color: "#eab308",
    fontSize: 15,
    margin: 10,
  },
  MovieName: {
    marginLeft: 1,
    color: 'white',
  },
  MoviePoster: {
    margin:20,
  }
});

export default styles;
