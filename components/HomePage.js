import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import { useDispatch, useSelector } from "react-redux"

import { SafeAreaView, View } from "react-native";
import RecipeShareLogo from "./RecipeShareLogo.js";
import RecipeList from "./RecipeList.js";
import { fetchRecipes } from "../store/recipes/recipeActions";

const HomePage = () => {
    const isLoading = useSelector(store => store.cookbook.isLoading);
    let [dish, setDish] = useState("");

    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchRecipes(dish));
        }, 600);

        return () => clearTimeout(timer);
    }, [dish]);

    return (
        <SafeAreaView>
            <View style={{ height: "100%" }}>
                <Search />

                <RecipeList dish={dish} />
            </View>
        </SafeAreaView>
    );
};

export default HomePage;

HomePage.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};
