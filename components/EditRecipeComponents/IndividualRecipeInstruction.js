import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../styles/individualRecipeStyles";

import { Swipeable } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {
    editInstruct,
    startEdit,
} from "../../store/singleRecipe/singleRecipeActions";

const IndividualRecipeInstruction = ({ index, color }) => {
    const dispatch = useDispatch();
    const mainEditing = useSelector(state => state.singleRecipe.editing);
    
    // Two steps here to grab our specific instruction.
    // This just makes sure that, if there's only an empty array,
    // `instruction` is still an object, so the page will load.
    const steps = useSelector(state => state.singleRecipe.recipe.steps);
    const instruction = steps && steps[index] ? steps[index] : {};
    
    const [editing, setEditing] = useState(false);

    const swipeableEl = useRef(null);

    const editHandler = () => {
        setEditing(true);
        dispatch(startEdit());
        swipeableEl.current.close();
    };

    useEffect(() => {
        // If our mainEditing variable is false,
        // setEditing to false as well.
        // This makes sure that this individual component doesn't also
        //     enter edit mode if we start editing a different swipeale
        if (!mainEditing) {
            setEditing(false);
        }
    }, [mainEditing]);

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
                        value={instruction.body}
                        onChangeText={step => dispatch(editInstruct(step))}
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
                            {instruction.ordinal}. {instruction.body}
                        </Text>
                    </View>
                )}
            </Swipeable>
        </View>
    );
};

export default IndividualRecipeInstruction;
