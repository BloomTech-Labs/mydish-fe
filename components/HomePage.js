import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import { useDispatch } from "react-redux";

<<<<<<< HEAD
import { SafeAreaView, View } from "react-native";
=======
import { SafeAreaView, View, ScrollView, Text } from "react-native";
import RecipeShareLogo from "./RecipeShareLogo.js";
>>>>>>> c74c8f39c163e2569fc36248c2a9fb4eb35be2b8
import RecipeList from "./RecipeList.js";
// import { homepageHeaderOptions } from "./header/navigationHeader";
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

// HomePage.navigationOptions = homepageHeaderOptions;
