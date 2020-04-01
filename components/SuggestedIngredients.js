import React from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/ingredientPredictionStyles";

const SuggestedIngredients = ({ recipe, setRecipe }) => {
    const suggestedIngredients = useSelector(
        state => state.ingredientPrediction.ingredients,
    );
    const isEmpty = ingredient => {
        return !ingredient.quantity && !ingredient.units && !ingredient.name;
    };
    const addIngredient = name => {
        const ingredient = {
            quantity: "",
            units: "",
            name: name,
        };
        const ingredients = recipe.ingredients;
        const length = ingredients.length;
        if (isEmpty(ingredients[length - 1])) {
            ingredients.splice(length - 1, 1, ingredient);
        } else {
            ingredients.push(ingredient);
        }
        setRecipe(recipe => ({
            ...recipe,
            ingredients: ingredients,
        }));
    };
    return (
        <>
            {suggestedIngredients.length > 0 && (
                <View>
                    <Text style={styles.headText}>Suggested Ingredients</Text>
                    {suggestedIngredients.map((ing, i) => {
                        if (i < 5) {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => addIngredient(ing)}
                                >
                                    <Text style={styles.ingredientText}>
                                        {ing}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }
                    })}
                </View>
            )}
        </>
    );
};

export default SuggestedIngredients;
