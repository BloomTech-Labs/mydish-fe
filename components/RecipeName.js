import React from "react";
import { Text, TextInput } from "react-native";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe }) => {
    const maxLength = 23;
    return (
        <>
            <Text style={styles.heading}>Title</Text>

            <TextInput
                style={styles.RecipeNameContainer}
                maxLength={maxLength}
                placeholder="Enter Title"
                onChangeText={event => setRecipe({ ...recipe, title: event })}
                value={recipe.title}
            />

            <Text style={styles.fiftyFive}>
                {`${recipe.title.length}/${maxLength}`}
            </Text>
        </>
    );
};

export default RecipeName;
