import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/createRecipeStyles";
import XDeleteButton from "./XDeleteButton";
import theme from "../styles/theme.style";

const Notes = ({ index, removeNote, note, setRecipe }) => {
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
                marginLeft: theme.MARGIN_SIDE_STANDARD,
                marginRight: theme.MARGIN_SIDE_STANDARD,
                marginBottom: 10,
                flexWrap: "nowrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <TextInput
                style={styles.notesContainer}
                placeholder="Add Notes"
                multiline={true}
                onChangeText={changeHandler}
                value={note}
            />
            <XDeleteButton action={() => removeNote(index)} parent="note" />
        </View>
    );
};

export default Notes;
