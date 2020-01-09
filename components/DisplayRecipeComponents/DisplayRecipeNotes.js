import React, { useRef, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "../../styles/individualRecipeStyles";

export default function DisplayRecipeNotes() {
    const notes = useSelector(state => state.singleRecipe.recipe.notes);

    return (
        <>
            <View style={{ paddingRight: "80%" }}>
                <Text style={styles.notes}>NOTES</Text>
            </View>
            <View style={styles.swipeableContainer}>
                <View style={styles.stepTextView}>
                    <Text style={styles.stepText}>{notes}</Text>
                </View>
            </View>
        </>
    );
}
