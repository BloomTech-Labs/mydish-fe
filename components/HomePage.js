import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withNavigation } from "react-navigation";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    AsyncStorage,
} from "react-native";
import { homepageHeaderOptions } from "./header/navigationHeader";
import { fetchRecipes } from "../store/recipes/recipeActions";
import { profilePageToggle } from "../store/navigation/navigationActions";

import Search from "./Search.js";
import RecipeList from "./RecipeList.js";
import HomeCookBook from "./HomeCookBook.js";
import styles from "../styles/homepageStyles";

//Analytics
import { Analytics, PageHit } from "expo-analytics";
const analytics = new Analytics("UA-160806654-1");

analytics
    .hit(new PageHit("Home"))
    .then(() => console.log("User has landed"))
    .catch(e => console.log(e.message));

const HomePage = ({ navigation }) => {
    let [dish, setDish] = useState("");
    const profile = useSelector(state => state.navigation.profileOpen);
    const search = useSelector(state => state.navigation.search.homepage);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchRecipes(dish));
        }, 200);

        return () => clearTimeout(timer);
    }, [dish]);

    useEffect(() => {
        if (profile) {
            AsyncStorage.clear();
            navigation.navigate("Login");
            dispatch(profilePageToggle(false));
        }
    }, [profile]);

    useEffect(() => {
        setDish("");
    }, [search]);

    return (
        <SafeAreaView style={styles.homepageContainer}>
            <View>
                {search && <Search setDish={setDish} dish={dish} />}
                <ScrollView>
                    {!search && (
                        <>
                            <Text style={styles.heading}>Cookbook</Text>
                            <HomeCookBook />
                            <Text style={styles.heading}>All Recipes</Text>
                        </>
                    )}
                    <RecipeList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

HomePage.navigationOptions = homepageHeaderOptions;

export default withNavigation(HomePage);
