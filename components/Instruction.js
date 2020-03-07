import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import XDeleteButton from "./XDeleteButton";
import theme from "../styles/theme.style";
import styles from "../styles/createRecipeStyles";

const Instruction = ({ instruction, setRecipe, index, removeInstruction }) => {
    const [highlighted, setHighlighted] = useState(false);
    const handleChange = value => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            instructions: oldRecipe.instructions.map((step, i) => {
                if (i === index) return value;
                else return step;
            }),
        }));
    };

    return (
        <View
            style={{
                marginLeft: theme.MARGIN_SIDE_STANDARD,
                marginRight: theme.MARGIN_SIDE_STANDARD,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    flexGrow: 1,
                    flexDirection: "column",
                    maxWidth: "100%",
                }}
            >
                <Text style={{ marginLeft: 14, marginBottom: 5 }}>
                    Step {index + 1}
                </Text>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <TextInput
                        style={{
                            maxWidth: "100%",
                            width: "90%",
                            paddingLeft: 12,
                            borderWidth: theme.INPUT_BORDER_WIDTH,
                            borderColor: highlighted
                                ? theme.INPUT_BORDER_HIGHLIGHT_COLOR
                                : theme.INPUT_BORDER_COLOR,
                            borderRadius: theme.INPUT_BORDER_RADIUS,
                            minHeight: theme.INPUT_HEIGHT,
                        }}
                        placeholder=" Add Instructions"
                        multiline
                        onChangeText={handleChange}
                        value={instruction}
                        onFocus={() => setHighlighted(true)}
                        onBlur={() => setHighlighted(false)}
                    />
                    <XDeleteButton
                        action={() => removeInstruction(index)}
                        parent="instruction"
                    />
                </View>
            </View>
        </View>
    );
};

export default Instruction;
