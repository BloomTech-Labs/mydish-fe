import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import { useDispatch, useSelector } from "react-redux";

import { SafeAreaView, View, ScrollView, Text } from "react-native";
import RecipeList from "./RecipeList.js";
import { homepageHeaderOptions } from "./header/navigationHeader";
import { fetchRecipes } from "../store/recipes/recipeActions";
import styles from "../styles/homepageStyles";

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
    const search = useSelector(state => state.navigation.search.homepage);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchRecipes(dish));
        }, 200);

        return () => clearTimeout(timer);
    }, [dish]);

    useEffect(() => {
        console.log("re-render plz");
    }, [search]);

    return (
        <SafeAreaView style={styles.homepageContainer}>
            <View>
                {search && <Search setDish={setDish} dish={dish} />}
                <ScrollView>
                    <Text style={styles.heading}>Cookbook</Text>
                    <HomeCookBook />
                    <Text style={styles.heading}>Suggested Recipes</Text>
                    <RecipeList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomePage;

HomePage.navigationOptions = homepageHeaderOptions;
