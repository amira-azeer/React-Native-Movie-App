import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "#161715",
  },
  View: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  Icons: {
    size: 30,
    strokeWidth: 2,
    color: "white",
  },
  Letter: {
    color: "#eab308",
  },
  ScrollView: {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: 10,
    },
  },
});

export default styles;
