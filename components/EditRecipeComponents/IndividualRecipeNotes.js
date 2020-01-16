import React, { useRef, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles/individualRecipeStyles";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    startEdit,
    editNotes,
    stopEdit,
    setCurrentActive,
    resetCurrentActive,
    deleteNote,
} from "../../store/singleRecipe/singleRecipeActions";

export default function IndividualRecipeNotes() {
    const dispatch = useDispatch();

    const notes = useSelector(state => state.singleRecipe.recipe.notes);
    const currentActive = useSelector(
        state => state.singleRecipe.currentActive,
    );

    const [editing, setEditing] = useState(false);

    const swipeableEl = useRef(null);

    const close = () => swipeableEl.current.close();

    const editHandler = () => {
        setEditing(true);
        dispatch(startEdit());
        close();
    };

    const checkActive = () => {
        if (currentActive.field && currentActive.field !== "notes") return;
        else {
            return false;
        }
    };

    const makeActive = () => {
        dispatch(setCurrentActive({ field: "notes", index: 1, close }));
    };

    const handleWillOpen = () => {
        if (checkActive() !== false) {
            currentActive.close();
        }
        // dispatch(stopEdit());
    };

    const handleClose = () => {
        if (checkActive() === false) {
            dispatch(resetCurrentActive());
        }
    };

    return (
        <>
            <View style={{ paddingRight: "80%" }}>
                <Text style={styles.notes}>NOTES</Text>
            </View>

            {editing ? (
                <View style={styles.stepTextView}>
                    <TextInput
                        value={notes}
                        onChangeText={notes => dispatch(editNotes(notes))}
                        multiline
                        returnKeyType="done"
                        autoFocus={true}
                        enablesReturnKeyAutomatically={true}
                    />
                </View>
            ) : (
                <View style={styles.swipeableContainer}>
                    <Swipeable
                        ref={swipeableEl}
                        onSwipeableWillOpen={handleWillOpen}
                        onSwipeableOpen={makeActive}
                        onSwipeableClose={handleClose}
                        renderRightActions={() => (
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={editHandler}
                                    style={styles.editButton}
                                >
                                    <FontAwesome
                                        name="pencil-square-o"
                                        size={20}
                                        color="white"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch(deleteNote());
                                        dispatch(resetCurrentActive());
                                    }}
                                    style={styles.deleteButton}
                                >
                                    <FontAwesome
                                        name="trash-o"
                                        size={20}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    >
                        <View style={styles.stepTextView}>
                            <Text style={styles.stepText}>{notes}</Text>
                            <MaterialCommunityIcons
                                name="drag-vertical"
                                size={32}
                                color="#2E2E2E"
                            />
                        </View>
                    </Swipeable>
                </View>
            )}
        </>
    );
}
