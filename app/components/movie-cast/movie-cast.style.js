import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View: {
    marginVertical: 6,
  },
  CastHeader: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 1,
    margin: '2.4%'
  },
  CharacterName: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 1,
    // margin: '2.5%'
  },
  ActorName: {
    color: 'grey',
    fontSize: 15,
    letterSpacing: 1,
    // margin: '2.5%'
  },
  ScrollView: {
    marginRight: 4,
    justifyContent: 'center',
  },
  ActorImage: (width, height) => ({
    width: width * 0.25,
    height: height * 0.15,
    // borderRadius: 90,
  })
 

});

export default styles;
