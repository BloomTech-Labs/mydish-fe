import React from "react";
import { View, Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";

import {
    editPreptime,
    editCooktime,
} from "../store/singleRecipe/singleRecipeActions";
import styles from "../styles/createRecipeStyles";

function TimeInput({
    type,
    title,
    errors,
    highlighted,
    setHighlighted,
    recipe,
    setRecipe,
    recipeToRender,
    savedRecipe,
}) {
    const dispatch = useDispatch();
    return (
        <View style={styles.timeContainer}>
            <View style={styles.heading}>
                <Text>{title}</Text>
                {errors.includes("prep_time and/or cook_time") && (
                    <Text style={styles.missingAsterisk}>*</Text>
                )}
            </View>
            <TextInput
                style={{
                    ...styles.timeInputContainer,
                    ...(highlighted[type] && styles.highlighted),
                }}
                placeholder="minutes"
                keyboardType={"numeric"}
                onChangeText={min => {
                    if (min !== "" && (isNaN(Number(min)) || Number(min) === 0))
                        return;
                    if (savedRecipe) {
                        if (type === "prep_time") {
                            dispatch(editPreptime(min));
                        } else if (type === "cook_time") {
                            dispatch(editCooktime(min));
                        }
                    } else {
                        setRecipe({
                            ...recipe,
                            [type]: min,
                        });
                    }
                }}
                value={recipeToRender[type] ? String(recipeToRender[type]) : ""}
                onFocus={() => setHighlighted({ [type]: true })}
                onBlur={() => setHighlighted({ [type]: false })}
            />
        </View>
    );
}

export default TimeInput;
