import React, { useState } from "react";
import { View } from "react-native";

import Add from "../Add";

const AddInstruction = ({ color }) => {
    const [adding, setAdding] = useState(false);

    return (
        <View style={color.active !== "Instructions" && { display: "none" }}>
            <Add text="Add Instruction" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddInstruction;
