import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SPACING from "../Components/SPACING";
import colors from "../Components/Colors";
import DATA from "../Components/DATA";
const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const ITEM_WIDTH = width / 2 - SPACING * 3;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: SPACING * 2, backgroundColor: "#fff" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.img}
                  source={require("../assets/images/avatar.jpg")}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.7,
                    fontWeight: "800",
                    color: colors.dark,
                  }}
                >
                  Erikaasav
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={{ marginRight: SPACING }}>
                  <Ionicons
                    name="notifications-outline"
                    size={SPACING * 3.5}
                    color={colors.dark}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="menu"
                    size={SPACING * 3.5}
                    color={colors.dark}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "60%", marginTop: SPACING * 2 }}>
              <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
                What would you like to order?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#eee",
                marginVertical: SPACING * 3,
                padding: SPACING * 1.5,
                borderRadius: SPACING,
              }}
            >
              <Ionicons
                name="search"
                color={colors.gray}
                size={SPACING * 2.7}
              />
              <TextInput
                placeholder="Want to .."
                placeholderTextColor={colors.gray}
                style={{
                  color: colors.gray,
                  fontSize: SPACING * 2,
                  marginLeft: SPACING,
                }}
              />
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {DATA.map((category, index) => (
                <TouchableOpacity
                  style={{ marginRight: SPACING * 3 }}
                  key={index}
                  onPress={() => setActiveCategory(index)}
                >
                  <Text
                    style={[
                      {
                        fontSize: SPACING * 1.7,
                        fontWeight: "600",
                        color: colors.gray,
                      },
                      activeCategory === index && {
                        color: colors.black,
                        fontWeight: "700",
                        fontSize: SPACING * 1.8,
                      },
                    ]}
                  >
                    {category.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginVertical: SPACING * 2,
              }}
            >
              {DATA[activeCategory].recipes.map((item) => (
                <View
                  style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                  key={item.id}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("RecipeDetailsScreen")}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: ITEM_WIDTH + SPACING * 3,
                        borderRadius: SPACING * 2,
                      }}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      fontWeight: "700",
                      marginTop: SPACING,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.5,
                      color: colors.gray,
                      marginVertical: SPACING / 2,
                    }}
                  >
                    Today discount {item.discount}
                  </Text>
                  <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                    $ {item.price}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: SPACING * 4.5,
    height: SPACING * 4.5,
    borderRadius: SPACING * 3,
    marginRight: SPACING,
  },
});
