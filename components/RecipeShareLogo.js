import React from "react";
import { Text, Image, View } from "react-native";
import logo from "../assets/LogoGreen.png";

function RecipeShareLogo() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={logo}
                style={{
                    width: 34,
                    height: 40,
                    marginLeft: 10,
                    marginBottom: 10,
                }}
            />
            <Text
                style={{
                    color: "#42C200",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 10,
                }}
            >
                RecipeShare
            </Text>
        </View>
    );
}

export default RecipeShareLogo;
