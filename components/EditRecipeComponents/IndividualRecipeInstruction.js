import React, { useState, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/individualRecipeStyles";

import { Swipeable } from "react-native-gesture-handler";

const IndividualRecipeInstruction = ({
    step,
    color,
    setMainEditing,
    mainEditing,
}) => {
    const [editing, setEditing] = useState(false);

    const [instruction, setInstruction] = useState();

    const swipeableEl = useRef(null);

    const editHandler = () => {
        setEditing(true);
        setMainEditing(true);
        swipeableEl.current.close();
    };

    return (
        <View style={styles.swipeableContainer}>
            <Swipeable
                ref={swipeableEl}
                renderRightActions={() => (
                    <View style={styles.buttonContainer}>
                        <View style={styles.editButton}>
                            <Text onPress={editHandler}>Edit</Text>
                        </View>
                        <View style={styles.deleteButton}>
                            <Text>Delete</Text>
                        </View>
                    </View>
                )}
            >
                {editing && mainEditing ? (
                    <TextInput
                        value={instruction ? instruction : step.body}
                        onChangeText={step => setInstruction(step)}
                        style={styles.instructionInput}
                    />
                ) : (
                    <View
                        style={
                            color.active.includes("Ingredients")
                                ? styles.hidden
                                : styles.stepTextView
                        }
                    >
                        <Text style={styles.stepText}>
                            {step.ordinal}.{" "}
                            {instruction ? instruction : step.body}
                        </Text>
                    </View>
                )}
            </Swipeable>
        </View>
    );
};

export default IndividualRecipeInstruction;
