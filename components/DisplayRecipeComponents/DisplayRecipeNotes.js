import React from "react";
import { View, Text } from "react-native";

import styles from "../../styles/individualRecipeStyles";

export default function DisplayRecipeNotes({ notes }) {
    return (
        <>
            <View style={styles.swipeableContainer}>
                <View style={styles.stepTextView}>
                    <Text style={styles.stepText}>{notes.description}</Text>
                </View>
            </View>
        </>
    );
}
