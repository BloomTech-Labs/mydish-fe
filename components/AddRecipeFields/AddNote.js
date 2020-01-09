import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/singleRecipe/singleRecipeActions";

import Add from "../Add";

const AddNote = () => {
    const dispatch = useDispatch();
    const [adding, setAdding] = useState(false);
    const [note, setNote] = useState("");
    const [highlighted, setHighlighted] = useState(false);

    const cancelAdd = () => {
        setAdding(false);
        setHighlighted(false);
    };

    const submitAdd = () => {
        if (!note.length) {
            setHighlighted(true);
        } else {
            setAdding(false);
            dispatch(addNote(note));
        }
    };

    return (
        <View>
            {adding ? (
                <View style={{ alignItems: "center" }}>
                    <TextInput
                        multiline
                        returnKeyType="done"
                        onSubmitEditing={submitAdd}
                        style={{
                            borderWidth: highlighted ? 1 : 0.8,
                            borderColor: highlighted ? "#FF0000" : "#363838",
                            borderRadius: 4,
                            padding: 5,
                            width: "90%",
                            minHeight: 50,
                            maxWidth: "90%",
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
                        <Button title="Cancel" onPress={cancelAdd} />
                        <Button title="Submit" onPress={submitAdd} />
                    </View>
                </View>
            ) : (
                <Add text="Add Notes" submit={() => setAdding(true)} />
            )}
        </View>
    );
};

export default AddNote;
