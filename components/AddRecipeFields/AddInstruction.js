import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import Add from "../Add";

const AddInstruction = ({ color }) => {
    const [adding, setAdding] = useState(false);
    const [instruction, setInstruction] = useState("");

    const cancelAdd = () => {
        setAdding(false);
    };

    const submitAdd = () => {};

    return (
        <View style={color.active !== "Instructions" && { display: "none" }}>
            {adding && (
                <View>
                    <TextInput
                        multiline
                        style={{ borderWidth: 1, borderColor: "#363838" }}
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
            <Add text="Add Instruction" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddInstruction;
