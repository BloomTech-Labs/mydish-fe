import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import { fetchCookbook } from "../store/cookbook/cookbookAction";

const RecipeList = ({ parent, folder }) => {
    console.log('this is folder')
    const isLoading = useSelector(store => store.allRecipes.isLoading)
    const dispatch = useDispatch();
    // If the RecipeList is being rendered from the cookbook,
    //     grab the props from that the cookbook is passing down.
    // If the RecipeList ISN'T coming from the cookbook, then we
    //     useSelector to get all of the recipes.
    const recipeList =
        parent === "cookbook"
            ? folder
            : useSelector(store => store.allRecipes.recipeList);
    const cookbook = useSelector(store => store.cookbook.cookbookRecipes);
    console.log('this is the recipe list', recipeList)
    // Recipe.js does not use the "likedByUser" property,
    //     but we'll keep this function for now because it is setting state
    //     for the "recipes" variable
    const [recipes, setRecipes] = useState([]);
    const likedByUser = () => {
        newRecipeList = recipeList.map(rec => {
            const match = cookbook.find(({ id }) => id === rec.id);
            if (match) {
                rec.likedByUser = true;
            } else {
                rec.likedByUser = false;
            }
            return rec;
        });
        setRecipes(newRecipeList);
    };

    const loadCookbook = useCallback(async () => {
        // setIsLoading(true)
        try {
            await dispatch(fetchCookbook);

        } catch (error) {
            throw new Error("This is an error")
        }
        // setIsLoading(false)
    }, [dispatch])

    useEffect(() => {

        // Only call this action if the recipe is NOT coming
        //     from the cookbook
        if (!cookbook.length || parent !== "cookbook") {
            loadCookbook()
        }

        likedByUser();
    }, [cookbook, recipeList, loadCookbook, dispatch]);

    // TODO: Talk with backend - If we can get each recipe to have an
    //       extra property called "forkCount", we can pass the forkCount
    //       down to the <Recipe/> component. This could help the user see
    //       how many times a recipe has been forked '' '

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {recipes.length !== 0 && (
                <FlatList
                    contentContainerStyle={{ paddingBottom: 150 }}
                    data={recipes}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Recipe key={item.id} recipe={item} />
                    )}
                />
            )}
            {}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "2%",
        marginRight: "2%",
    },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default RecipeList;
