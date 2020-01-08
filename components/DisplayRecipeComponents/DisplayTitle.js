import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "../../styles/individualRecipeStyles";

const DisplayTitle = props => {
    const recipeTitle = useSelector(state => state.singleRecipe.recipe.title);

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {recipeTitle ? recipeTitle : props.title}
            </Text>
        </View>
    );
};

export default DisplayTitle;
