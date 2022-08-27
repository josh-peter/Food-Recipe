import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import DATA from "../Components/DATA";

const RecipeDetailsScreen = ({ navigation, route }) => {
  return <RecipeDetails recipe={DATA[0].recipes[0]} navigation={navigation} />;
};

export default RecipeDetailsScreen;
