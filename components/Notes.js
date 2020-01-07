import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/createRecipeStyles";
import Heading from "./StyledComponents/Heading";


const Notes = ({ recipe, setRecipe }) => {

    return (
        <View>

            <Heading>Notes : </Heading>

            <TextInput
                style={styles.notesContainer}
                placeholder=""
                multiline={true}
                onChangeText={event => setRecipe({ ...recipe, notes: event })}
                value={recipe.notes}
            />

        </View>
    );
};

export default Notes;
