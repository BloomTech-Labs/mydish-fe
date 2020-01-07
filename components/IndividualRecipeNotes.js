import React, { useRef } from "react";
import { View, Text } from "react-native";
import styles from "../styles/individualRecipeStyles";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function IndividualRecipeNotes({ color, notes }) {

    const swipeableEl = useRef(null);
    const editHandler = () => {
        // setEditing(true);
        // dispatch(startEdit());
        console.log('editing note')
        swipeableEl.current.close();
    };

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
            <View style={styles.swipeableContainer}>
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
                    <Text
                        style={
                            color.active.includes("Ingredients")
                                ? styles.hidden
                                : styles.stepTextView
                        }
                    >
                        {notes}
                    </Text>
                </Swipeable>
            </View>
        </>
    );
}
