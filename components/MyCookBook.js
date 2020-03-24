import React, { useEffect } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { cookbookHeaderOptions } from "./header/navigationHeader";

import styles from "../styles/recipe-styles";
import { fetchCookbook } from "../store/cookbook/cookbookAction";
import { useDispatch, useSelector } from "react-redux";
import RecipeList from "./RecipeList";
import { FlatList } from "react-native-gesture-handler";
import Recipe from "./Recipe";

const MyCookBook = props => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.cookbook.isLoading);
    const allCookbookRecipes = useSelector(
        state => state.cookbook.cookbookRecipes,
    );
    useEffect(() => {
        dispatch(fetchCookbook());
    }, [dispatch, fetchCookbook]);

    const getAllCategories = allRecipes => {
        let categoryList = [];
        allRecipes.forEach((recipe, index) => {
            if (recipe.tags && recipe.tags[0]) {
                if (!categoryList.includes(recipe.tags[0].name)) {
                    categoryList = [...categoryList, recipe.tags[0].name];
                }
            }
        });
        return categoryList;
    };

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </View>
        );
    } else {
        const categories = getAllCategories(allCookbookRecipes);
        console.log("All Cookbook Recipes ", allCookbookRecipes);
        return (
            <View style={{ maxWidth: "90%", marginLeft: "5%" }}>
                <ScrollView style={{ paddingBottom: "10%" }}>
                    {categories.map(tag => {
                        return (
                            <>
                                <Text style={styles.heading}>{`${tag}`}</Text>
                                {allCookbookRecipes
                                    .filter(recipeToFilter => {
                                        return (
                                            recipeToFilter.tags[0].name === tag
                                        );
                                    })
                                    .map(filteredRecipe => {
                                        return (
                                            <Recipe
                                                key={filteredRecipe.id}
                                                recipe={filteredRecipe}
                                                parent={"Cookbook"}
                                            />
                                        );
                                    })}
                            </>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
};

export default MyCookBook;

MyCookBook.navigationOptions = cookbookHeaderOptions;
