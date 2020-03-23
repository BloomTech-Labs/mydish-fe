import React from "react";
import { TouchableOpacity, Image } from "react-native";
import RecipeShareLogo from "../components/RecipeShareLogo";
import search from "../assets/search-icon.png";

export const homepageHeaderOptions = {
    headerTitle: <RecipeShareLogo />,
    headerRight: (
        <TouchableOpacity onPress={() => {}} style={{ marginRight: 22 }}>
            <Image source={search} style={{}} />
        </TouchableOpacity>
    ),
};
