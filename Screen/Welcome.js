import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SPACING from "../Components/SPACING";
import Colors from "../Components/Colors";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.imgbck}
      source={require(".././assets/images/HomeScreen.jpg")}
    >
      <View style={{ flex: 1, backgroundColor: Colors.black, opacity: 0.2 }} />
      <View style={styles.container}>
        <View>
          <Text style={styles.texts}>Let your favorite food find you</Text>
          <Text style={styles.text}>
            Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Explore Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  btn: {
    padding: SPACING * 2,
    backgroundColor: Colors.white,
    borderRadius: SPACING * 2,
    alignItems: "center",
    marginTop: SPACING * 3,
  },
  container: {
    position: "absolute",
    height: "100%",
    zIndex: 2,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: SPACING * 2,
    paddingBottom: SPACING * 5,
  },
  imgbck: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    opacity: 14,
  },
  text: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: SPACING * 1.7,
  },
  texts: {
    color: Colors.white,
    fontWeight: "800",
    fontSize: SPACING * 4.5,
    textTransform: "capitalize",
  },
  btnText: {
    color: Colors.black,
    fontSize: SPACING * 2,
    fontWeight: "700",
  },
});
