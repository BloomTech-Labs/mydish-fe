import React from "react";
import Search from "./Search.js";

import { SafeAreaView, ScrollView, View, Image } from "react-native";
import RecipeShareLogo from "./RecipeShareLogo.js";
import RecipeList from "./RecipeList.js";
import logo from "../assets/LogoGreen.png";

const HomePage = () => {
    return (
        <SafeAreaView>
            <View style={{ height: "100%" }}>

                <Search />

                <ScrollView>
                    <RecipeList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomePage;


HomePage.navigationOptions = {
    headerBackground: (<RecipeShareLogo />),

}