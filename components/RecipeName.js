import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { editTitle } from "../store/singleRecipe/singleRecipeActions";
import { maxRecipeName } from "../constants/maxLenth";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe, missing, parent }) => {
    const [highlighted, setHighlighted] = useState(false);
    const dispatch = useDispatch();

    const handleChange = value => {
        if (parent === "editRecipe") {
            dispatch(editTitle(value));
        }
        if (parent === "create") {
            setRecipe({ ...recipe, title: value });
        }
    };

    return (
        <>
            <View style={styles.heading}>
                <Text>Recipe Name</Text>
                {missing && <Text style={styles.missingAsterisk}>*</Text>}
            </View>
            <TextInput
                style={
                    highlighted
                        ? {
                              ...styles.RecipeNameContainer,
                              ...styles.highlighted,
                          }
                        : styles.RecipeNameContainer
                }
                maxLength={maxRecipeName}
                placeholder="Enter recipe name"
                onChangeText={handleChange}
                value={recipe.title}
                onFocus={() => setHighlighted(true)}
                onBlur={() => setHighlighted(false)}
            />

            <Text style={styles.maxLengthIndicator}>
                {`${recipe.title.length}/${maxRecipeName}`}
            </Text>
        </>
    );
};

export default RecipeName;
