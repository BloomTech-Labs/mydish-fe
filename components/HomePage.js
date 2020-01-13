import React from "react";
import Search from "./Search.js";

import { SafeAreaView, View } from "react-native";
import RecipeShareLogo from "./RecipeShareLogo.js";
import RecipeList from "./RecipeList.js";

const HomePage = () => {
    return (
        <SafeAreaView>
            <View style={{ height: "100%" }}>
                <Search />

                <RecipeList />
            </View>
        </SafeAreaView>
    );
};

export default HomePage;

HomePage.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};
