import React from "react";
import { Text, TextInput } from "react-native";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe }) => {
    return (
        <>
            <Text style={styles.heading}>Title</Text>

            <TextInput
                style={styles.RecipeNameContainer}
                maxLength={55}
                placeholder="Enter Title"
                onChangeText={event => setRecipe({ ...recipe, title: event })}
                value={recipe.title}
            />

            <Text style={styles.fiftyFive}>{recipe.title.length}/55</Text>
        </>
    );
};

export default RecipeName;
