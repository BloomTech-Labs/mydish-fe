import React, { useRef, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/individualRecipeStyles";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    startEdit,
    editNotes,
} from "../store/singleRecipe/singleRecipeActions"

export default function IndividualRecipeNotes({ color }) {

    const dispatch = useDispatch();

    const mainEditing = useSelector(state => state.singleRecipe.editing);
    const notes = useSelector(state => state.singleRecipe.recipe.notes)


    const [editing, setEditing] = useState(false);

    const swipeableEl = useRef(null);
    const editHandler = () => {
        setEditing(true);
        dispatch(startEdit());
        console.log('editing note')
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
        <>
            <View style={{ paddingRight: "80%" }}>
                <Text
                    style={
                        color.active.includes("Ingredients")
                            ? styles.hidden
                            : styles.notes
                    }
                >
                    NOTES
                </Text>
            </View>

            {editing && mainEditing ?

                <View style={styles.stepTextView}>

                    <TextInput
                        value={notes}
                        onChangeText={(notes) => dispatch(
                            editNotes(notes)
                        )
                        }

                        multiline
                        returnKeyType="done"
                        autoFocus={true}
                        enablesReturnKeyAutomatically={true}
                    />
                </View>

                : <View style={styles.swipeableContainer}>
                    <Swipeable
                        ref={swipeableEl}
                        renderRightActions={() => (
                            <View style={styles.buttonContainer}>
                                <View style={styles.editButton}>
                                    <FontAwesome
                                        name="pencil-square-o"
                                        size={20}
                                        color="white"
                                        style={styles.icon}
                                        onPress={editHandler}
                                    />
                                </View>
                                <View style={styles.deleteButton}>
                                    <FontAwesome
                                        name="trash-o"
                                        size={20}
                                        color="white"
                                        style={styles.icon}
                                        onPress={() => { }}
                                    />
                                </View>
                            </View>
                        )}>
                        <View style={
                            color.active.includes("Ingredients")
                                ? styles.hidden
                                : styles.stepTextView
                        }>
                            <Text
                                style={styles.stepText}
                            >
                                {notes}

                            </Text>
                            <MaterialCommunityIcons
                                name="drag-vertical"
                                size={32}
                                color="#2E2E2E"

                            />

                        </View>

                    </Swipeable>
                </View>}


        </>
    );
}
