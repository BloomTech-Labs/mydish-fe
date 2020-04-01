import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";
import styles from "../styles/ingredientPredictionStyles";

const SuggestedIngredients = () => {
    const suggestedIngredients = useSelector(
        state => state.ingredientPrediction.ingredients,
    );

    return (
        <>
            {suggestedIngredients.length > 0 && (
                <View>
                    <Text style={styles.headText}>Suggested Ingredients</Text>
                    {suggestedIngredients.map((ing, i) => {
                        if (i < 7) {
                            return (
                                <Text key={i} style={styles.ingredientText}>
                                    {ing}
                                </Text>
                            );
                        }
                    })}
                </View>
            )}
        </>
    );
};

export default SuggestedIngredients;
