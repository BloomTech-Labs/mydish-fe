import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "../../styles/individualRecipeStyles";

const DisplayRecipeIngredient = ({ index, color }) => {
    const mainEditing = useSelector(state => state.singleRecipe.editing);
    const ingredients = useSelector(
        state => state.singleRecipe.recipe.ingredients,
    );
    const recipeIng =
        ingredients && ingredients[index] ? ingredients[index] : {};

    return (
        <View
            style={
                color.active.includes("Instructions")
                    ? styles.hidden
                    : styles.ingredientList
            }
        >
            <View style={styles.ingredientView}>
                <Text style={styles.ingredientText}>
                    {recipeIng.quantity} {recipeIng.unit}
                </Text>
            </View>
            <View style={styles.ingredientView}>
                <Text style={styles.ingredientText}>{recipeIng.name}</Text>
            </View>
        </View>
    );
};

export default DisplayRecipeIngredient;
