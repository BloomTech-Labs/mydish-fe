import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import { useDispatch } from "react-redux";
import theme from "../styles/theme.style";

import { SafeAreaView, View, ScrollView, Text } from "react-native";
import RecipeShareLogo from "./RecipeShareLogo.js";
import RecipeList from "./RecipeList.js";
import { fetchRecipes } from "../store/recipes/recipeActions";

//Analytics
import { Analytics, PageHit } from "expo-analytics";
import HomeCookBook from "./HomeCookBook.js";
const analytics = new Analytics("UA-160806654-1");

analytics
    .hit(new PageHit("Home"))
    .then(() => console.log("User has landed"))
    .catch(e => console.log(e.message));

const HomePage = () => {
    let [dish, setDish] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchRecipes(dish));
        }, 600);

        return () => clearTimeout(timer);
    }, [dish]);

    return (
        <SafeAreaView>
            <View
                style={{
                    height: "100%",
                }}
            >
                <Search setDish={setDish} dish={dish} />
                <ScrollView>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginVertical: "2%",
                            paddingLeft: 10,
                        }}
                    >
                        Cookbook
                    </Text>
                    <HomeCookBook />
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginVertical: "2%",
                            paddingLeft: 10,
                        }}
                    >
                        Suggested Recipes
                    </Text>
                    <RecipeList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomePage;

HomePage.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
    headerStyle: {
        backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
    },
};
