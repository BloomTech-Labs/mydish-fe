import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe, missing }) => {
    return (
        <>
            <View style={styles.heading}>
                <Text>Title</Text>
                {missing && <Text style={styles.missing}>*</Text>}
            </View>
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
