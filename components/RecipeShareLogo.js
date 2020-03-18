import React from "react";
import {Text, Image, View} from "react-native";
import logo from "../assets/LogoRed.png";

function RecipeShareLogo() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Image
        source={logo}
        style={{
          width: 34,
          height: 40,
          marginLeft: 10,
          marginBottom: 10,
        }}
      />
    </View>
  );
}

export default RecipeShareLogo;
