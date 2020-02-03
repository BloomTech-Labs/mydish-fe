import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/createRecipeStyles";

const RecipeName = ({ recipe, setRecipe, missing }) => {
    const maxLength = 23;
    return (
        <>
            <View style={styles.heading}>
                <Text>Title</Text>
                {missing && <Text style={styles.missing}>*</Text>}
            </View>
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
