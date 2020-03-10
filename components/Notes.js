import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import XDeleteButton from "./XDeleteButton";
import styles from "../styles/createRecipeStyles";

const Notes = ({ index, removeNote, note, setRecipe }) => {
    const [highlighted, setHighlighted] = useState(false);
    const changeHandler = value => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            notes: oldRecipe.notes.map((note, i) => {
                if (i === index) return value;
                else return note;
            }),
        }));
    };

    return (
        <View
            style={{
                marginBottom: 10,
                flexWrap: "nowrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <TextInput
                style={
                    highlighted
                        ? { ...styles.notesContainer, ...styles.highlighted }
                        : styles.notesContainer
                }
                placeholder="Add Notes"
                multiline={true}
                onChangeText={changeHandler}
                value={note}
                onFocus={() => setHighlighted(true)}
                onBlur={() => setHighlighted(false)}
            />
            <XDeleteButton action={() => removeNote(index)} parent="note" />
        </View>
    );
};

export default Notes;
