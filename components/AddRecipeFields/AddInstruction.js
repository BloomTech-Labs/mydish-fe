import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addInstruction } from "../../store/singleRecipe/singleRecipeActions";

import Add from "../Add";

const AddInstruction = ({ color }) => {
    const dispatch = useDispatch();
    const [adding, setAdding] = useState(false);
    const [instruction, setInstruction] = useState("");
    const [highlighted, setHighlighted] = useState(false);
    const steps = useSelector(state => state.singleRecipe.recipe.steps);
    const ordinal = steps.length + 1;

    const cancelAdd = () => {
        setAdding(false);
        setHighlighted(false);
    };

    const submitAdd = () => {
        if (!instruction.length) {
            setHighlighted(true);
        } else {
            setAdding(false);
            dispatch(addInstruction({ ordinal, body: instruction }));
        }
    };

    return (
        <View style={color.active !== "Instructions" && { display: "none" }}>
            {adding && (
                <View>
                    <TextInput
                        multiline
                        returnKeyType="done"
                        onSubmitEditing={submitAdd}
                        style={{
                            borderWidth: highlighted ? 1 : 0.8,
                            borderColor: highlighted ? "#FF0000" : "#363838",
                            borderRadius: 4,
                            padding: 5,
                        }}
                        onChangeText={instruction =>
                            setInstruction(instruction)
                        }
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            width: "90%",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Button title="Cancel" onPress={cancelAdd} />
                        <Button title="Submit" onPress={submitAdd} />
                    </View>
                </View>
            )}
            {!adding && (
                <Add text="Add Instruction" submit={() => setAdding(true)} />
            )}
        </View>
    );
};

export default AddInstruction;