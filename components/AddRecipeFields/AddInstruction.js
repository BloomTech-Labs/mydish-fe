import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addInstruction, setCurrentActive, resetCurrentActive } from "../../store/singleRecipe/singleRecipeActions";

import Add from "../Add";

const AddInstruction = ({ currentActive }) => {
    const dispatch = useDispatch();
    const [adding, setAdding] = useState(false);
    const [instruction, setInstruction] = useState("");
    const [highlighted, setHighlighted] = useState(false);
    const steps = useSelector(state => state.singleRecipe.recipe.steps);
    const ordinal = steps.length + 1;

    const startAdding = () => {
        if (currentActive && currentActive.close) currentActive.close();
        setAdding(true);
        console.log("here?")
        dispatch(
            setCurrentActive({
                type: "add",
                field: "instruction",
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
        if (!instruction.length) {
            setHighlighted(true);
        } else {
            dispatch(addInstruction({ ordinal, body: instruction }));
            stopAdding();
        }
    };

    return (
        <View>
            {adding ? (
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        multiline
                        placeholder="Add Instruction"
                        returnKeyType="done"
                        onSubmitEditing={submitAdd}
                        style={{
                            borderWidth: highlighted ? 1 : 0.8,
                            borderColor: highlighted ? "#FF0000" : "#363838",
                            borderRadius: 4,
                            width: "85%",
                            fontSize: 16,
                            minHeight: 40,
                            maxWidth: "85%",
                        }}
                        onChangeText={instruction =>
                            setInstruction(instruction)
                        }
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
                <Add text="Add Instruction" submit={startAdding} />
            )}
        </View>
    );
};

export default AddInstruction;
