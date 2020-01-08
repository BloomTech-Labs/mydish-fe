import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "../../styles/individualRecipeStyles";

const DisplayRecipeInstruction = ({ index, color }) => {
    // Two steps here to grab our specific instruction.
    // This just makes sure that, if there's only an empty array,
    // `instruction` is still an object, so the page will load.
    const steps = useSelector(state => state.singleRecipe.recipe.steps);
    const instruction = steps && steps[index] ? steps[index] : {};

    return (
        <View style={styles.swipeableContainer}>
            <View
                style={
                    color.active.includes("Ingredients")
                        ? styles.hidden
                        : styles.stepTextView
                }
            >
                <Text style={styles.stepText}>
                    {instruction.ordinal}. {instruction.body}
                </Text>
            </View>
        </View>
    );
};

export default DisplayRecipeInstruction;
