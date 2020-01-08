import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "../../styles/individualRecipeStyles";

import Add from "../Add";
import Ingredient from "../Ingredient";

const AddIngredient = ({ color }) => {
    const [adding, setAdding] = useState(false);
    console.log("COLOR:", color.active);

    return (
        <View style={color.active !== "Ingredients" && { display: "none" }}>
            {adding && (
                <View>
                    <Ingredient
                        setRecipe={() => ({})}
                        setAdding={setAdding}
                        parent="AddIngredient"
                    />
                </View>
            )}
            <Add text="Add Ingredient" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddIngredient;
