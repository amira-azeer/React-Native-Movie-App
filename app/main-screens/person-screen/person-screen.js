import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: "#161715",
  },
  SafeAreaView: (topMargin) => ({
    // position: "absolute",
    zIndex: 20,
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: topMargin,
  }),
  PersonDetailView: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: '#161715',
    // shadowColor: "grey",
    // shadowRadius: 40,
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.8,
  },
  ActorImage: (height, width) => ({
    height: height * 0.43,
    width: width * 0.6,
    borderRadius: 100,
  }),
  ActorName: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    display: "flex",
    textAlign: "center",
  },
  ActorNameView: {
    marginTop: "6%",
    width: "100%",
  },
  ActorBirthPlace: {
    color: "grey",
    textAlign: "center",
    fontSize: 12,
    marginBottom: "2%",
  },
  ActorDetailView: {
    backgroundColor: "#61615D",
    borderRadius: "20%",
    flexDirection: "row",
    SubView: {
      margin: "2%",
      borderRightColor: "white",
      borderRightWidth: "1.5%",
    },
    PopularitySubView: {
      margin: "2%",
    },
  },
  ActorDetails: {
    color: "white",
    textAlign: "center",
    margin: "3%",
  },

  
  ActorDescriptionView: {
    margin: "2%",
    ActorBioDescription: {
      color: "#C3C3C2",
      fontSize: 15,
      letterSpacing: 1,
      margin: "1%",
    },
    ActorBiography: {
      color: "yellow",
      fontSize: 22,
      fontWeight: "600",
      margin: 5,
    },
  },
  
});

export default styles;
