import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addNote, setCurrentActive, resetCurrentActive } from "../../store/singleRecipe/singleRecipeActions";

import Add from "../Add";

const AddNote = ({ currentActive }) => {
    const dispatch = useDispatch();
    const [adding, setAdding] = useState(false);
    const [note, setNote] = useState("");
    const [highlighted, setHighlighted] = useState(false);

    const startAdding = () => {
        if (currentActive && currentActive.close) currentActive.close();
        setAdding(true);
        dispatch(
            setCurrentActive({
                type: "add",
                field: "note",
                index: null,
                close: () => setAdding(false),
            }),
        );
    };

    const stopAdding = () => {
        setHighlighted(false);
        setAdding(false)
        dispatch(resetCurrentActive())
    }

    const submitAdd = () => {
        if (!note.length) {
            setHighlighted(true);
        } else {
            dispatch(addNote(note));
            stopAdding()
        }
    };

    return (
        <View>
            {adding ? (
                <View style={{ alignItems: "center" }}>
                    <TextInput
                        multiline
                        placeholder="Add Notes"
                        returnKeyType="done"
                        onSubmitEditing={submitAdd}
                        style={{
                            borderWidth: highlighted ? 1 : 0.8,
                            borderColor: highlighted ? "#FF0000" : "#363838",
                            borderRadius: 4,
                            width: "80%",
                            minHeight: 40,
                            maxWidth: "80%",
                            fontSize: 16,
                        }}
                        onChangeText={note => setNote(note)}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Button title="Cancel" onPress={stopAdding} />
                        <Button title="Submit" onPress={submitAdd} />
                    </View>
                </View>
            ) : (
                <Add text="Add Notes" submit={startAdding} />
            )}
        </View>
    );
};

export default AddNote;
