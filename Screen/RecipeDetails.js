import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const { height } = Dimensions.get("window");
import Ionicons from "react-native-vector-icons/Ionicons";
import SPACING from "../Components/SPACING";
import colors from "../Components/Colors";

const RecipeDetails = ({ navigation, recipe }) => {
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={styles.container}
            //implementing dynamic image change detections
            source={recipe.image}
          >
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={SPACING * 2.5}
                color={colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="share" size={SPACING * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={{ width: "70%" }}>
                <Text style={styles.title}>{recipe.name}</Text>
              </View>
              <View style={styles.rating}>
                <Ionicons
                  name="star"
                  color={colors.black}
                  size={SPACING * 1.7}
                />
                <Text style={styles.ratingText}>{recipe.rating}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.ingredients}>
                <Ionicons
                  name="time"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text style={styles.ingredientsText}>{recipe.time}</Text>
              </View>
              <View style={styles.ingredientsIcon}>
                <Ionicons
                  name="bicycle"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text style={styles.delbtn}>{recipe.del_time}</Text>
              </View>
              <View style={styles.resIcon}>
                <Ionicons
                  name="restaurant"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text style={styles.cookIcon}>{recipe.cooking_time}</Text>
              </View>
            </View>
            <View style={{ marginVertical: SPACING * 3 }}>
              <Text style={styles.menu}>Ingredients</Text>
              {recipe.ingredients.map((ingredient) => (
                <View style={styles.ingredienttexts} key={ingredient.id}>
                  <View style={styles.ingredientHeader} />
                  <Text style={styles.ingredientTitle}>{ingredient.title}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.description}>Description</Text>
            <Text
              style={{
                fontSize: SPACING * 1.7,
                fontWeight: "500",
                color: colors.gray,
              }}
            >
              {recipe.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2 }}>
          <TouchableOpacity style={styles.recipeBtn}>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.white,
                fontWeight: "700",
              }}
            >
              Choose this for
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.yellow,
                fontWeight: "700",
                marginLeft: SPACING / 2,
              }}
            >
              $ {recipe.price}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    padding: SPACING * 2,
    height: height / 2.5,
    padding: SPACING * 2,
    paddingTop: SPACING * 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    height: SPACING * 4.5,
    width: SPACING * 4.5,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING * 2.5,
  },
  iconContainer: {
    height: SPACING * 4.5,
    width: SPACING * 4.5,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING * 2.5,
  },
  content: {
    padding: SPACING * 2,
    paddingTop: SPACING * 3,
    marginTop: -SPACING * 3,
    borderTopLeftRadius: SPACING * 3,
    borderTopRightRadius: SPACING * 3,
    backgroundColor: colors.white,
  },
  rating: {
    padding: SPACING,
    paddingHorizontal: SPACING * 3,
    backgroundColor: colors.yellow,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginBottom: SPACING * 3,
    alignItems: "center",
  },
  title: {
    fontSize: SPACING * 3,
    color: colors.black,
    fontWeight: "700",
  },
  ratingText: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.black,
  },
  ingredients: {
    padding: SPACING,
    paddingHorizontal: SPACING * 2,
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientsText: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.gray,
  },
  ingredientsIcon: {
    padding: SPACING,
    paddingHorizontal: SPACING * 2,
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  delbtn: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.gray,
  },
  resIcon: {
    padding: SPACING,
    paddingHorizontal: SPACING * 2,
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  cookIcon: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.gray,
  },
  menu: {
    fontSize: SPACING * 2,
    fontWeight: "700",
    color: colors.dark,
  },
  ingredienttexts: {
    marginVertical: SPACING,
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientHeader: {
    width: SPACING,
    height: SPACING,
    backgroundColor: colors.light,
    borderRadius: SPACING,
  },
  ingredientTitle: {
    fontSize: SPACING * 1.7,
    fontWeight: "600",
    color: colors.gray,
    marginLeft: SPACING,
  },
  description: {
    fontSize: SPACING * 2,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: SPACING,
  },
  recipeBtn: {
    width: "100%",
    padding: SPACING * 2,
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING * 2,
  },
});
