import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const SuggestedIngredients = () => {
    const suggestedIngredients = useSelector(
        state => state.ingredientPrediction.ingredients,
    );

    return (
        <View>
            {suggestedIngredients.length > 0 && (
                <View>
                    <Text>Suggested Ingredients</Text>
                    {suggestedIngredients.map((ing, i) => {
                        if (i < 7) {
                            return <Text key={i}>{ing}</Text>;
                        }
                    })}
                </View>
            )}
        </View>
    );
};

export default SuggestedIngredients;
