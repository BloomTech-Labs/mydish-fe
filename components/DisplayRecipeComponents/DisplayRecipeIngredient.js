import React from "react";
import { View, Text } from "react-native";

import styles from "../../styles/individualRecipeStyles";

const DisplayRecipeIngredient = ({ ingredient }) => {
    return (
        <View style={styles.ingredientList}>
            <View style={styles.ingredientView}>
                <Text style={styles.ingredientText}>
                    {ingredient.quantity} {ingredient.units}
                </Text>
            </View>
            <View style={styles.ingredientView}>
                <Text style={styles.ingredientText}>{ingredient.name}</Text>
            </View>
        </View>
    );
};

export default DisplayRecipeIngredient;
