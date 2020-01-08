import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "../../styles/individualRecipeStyles";

import Add from "../Add";
import Ingredient from "../Ingredient";

const AddIngredient = () => {
    const [adding, setAdding] = useState(false);

    return (
        <View>
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
