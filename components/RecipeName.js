import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe, missing }) => {
    const maxLength = 23;
    const [highlighted, setHighlighted] = useState(false);
    return (
        <>
            <View style={styles.heading}>
                <Text>Title</Text>
                {missing && <Text style={styles.missing}>*</Text>}
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
                maxLength={maxLength}
                placeholder="Enter Title"
                onChangeText={event => setRecipe({ ...recipe, title: event })}
                value={recipe.title}
                onFocus={() => setHighlighted(true)}
                onBlur={() => setHighlighted(false)}
            />

            <Text style={styles.fiftyFive}>
                {`${recipe.title.length}/${maxLength}`}
            </Text>
        </>
    );
};

export default RecipeName;
