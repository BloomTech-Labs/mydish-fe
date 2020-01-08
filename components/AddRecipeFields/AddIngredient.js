import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../../styles/individualRecipeStyles";

import Add from "../Add";
import Ingredient from "../Ingredient";

const AddIngredient = () => {
    const [adding, setAdding] = useState(false);

    return (
        <View>
            {adding && (
                <Ingredient
                    autoFocus={true}
                    setRecipe={() => ({})}
                    setAdding={setAdding}
                />
            )}
            <Add text="Add Ingredient" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddIngredient;
