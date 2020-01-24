import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "../../styles/individualRecipeStyles";

const DisplayRecipeInstruction = ({ instruction }) => {
    return (
        <View style={styles.swipeableContainer}>
            <View style={styles.stepTextView}>
                <Text style={styles.stepText}>
                    {instruction.step_number}. {instruction.description}
                </Text>
            </View>
        </View>
    );
};

export default DisplayRecipeInstruction;
