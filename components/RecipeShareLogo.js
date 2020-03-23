import React from "react";
import { Image, View } from "react-native";
import logo from "../assets/LogoRed.png";

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
                    resizeMode: "contain",
                    height: 35,
                    marginLeft: 10,
                    marginBottom: 4,
                }}
            />
        </View>
    );
}

export default RecipeShareLogo;
