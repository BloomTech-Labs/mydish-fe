import React from "react";
import { View, Text } from "react-native";

import styles from "../../styles/individualRecipeStyles";

const DisplayRecipeIngredient = ({ ingredient }) => {
    return (
        <View style={styles.ingredientList}>
            <Text style={styles.ingredientText}>
                {ingredient.quantity} {ingredient.units} {ingredient.name}
            </Text>
        </View>
    );
};

export default DisplayRecipeIngredient;
