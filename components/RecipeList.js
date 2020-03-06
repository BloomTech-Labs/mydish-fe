import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

const RecipeList = ({ parent, folder }) => {
    const isLoading = useSelector(store => store.cookbook.isLoading);

    const storeThing = useSelector(store => store);

    console.log("!!!\n\nALERT ALERT ALERT\n\n!!!\n\nSTORE IS ", storeThing);

    // If the RecipeList is being rendered from the cookbook,
    //     grab the props that the cookbook is passing down.
    // If the RecipeList ISN'T coming from the cookbook, then we
    //     useSelector to get all of the recipes.
    const recipeList =
        parent === "cookbook"
            ? folder
            : useSelector(store => store.allRecipes.recipeList);

    // TODO: Talk with backend - If we can get each recipe to have an
    //       extra property called "forkCount", we can pass the forkCount
    //       down to the <Recipe/> component. This could help the user see
    //       how many times a recipe has been forked '' '

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            {recipeList.length !== 0 && (
                <FlatList
                    contentContainerStyle={{ paddingBottom: 150 }}
                    data={recipeList}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Recipe key={item.id} recipe={item} />
                    )}
                />
            )}
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
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default RecipeList;
