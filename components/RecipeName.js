import React from "react";
import { Text, TextInput } from "react-native";
import Heading from "./StyledComponents/Heading";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe }) => {
    return (
        <>
            <Heading>Recipe Name</Heading>

            <TextInput
                style={styles.RecipeNameContainer}
                maxLength={55}
                placeholder="Enter Recipe Name"
                onChangeText={event => setRecipe({ ...recipe, title: event })}
                value={recipe.title}
            />

            <Text style={styles.fiftyFive}>{recipe.title.length}/55</Text>
        </>
    );
};

export default RecipeName;
