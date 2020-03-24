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
            if (!categoryList.includes(recipe.tags[0].name)) {
                categoryList = [...categoryList, recipe.tags[0].name];
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
        console.log(
            "magical magic is ",
            categories.map(tag => {
                return allCookbookRecipes.filter((recipe, index) => {
                    return recipe.tags[0].name === tag;
                });
            }),
        );
        return (
            <View style={{ width: "90%", marginLeft: "5%" }}>
                <ScrollView style={{ paddingBottom: "10%" }}>
                    {categories.map(tag => {
                        return (
                            <>
                                <Text key={`${Math.random()}`}>{`${tag}`}</Text>
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
