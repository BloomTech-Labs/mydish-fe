import React, { useState } from "react";
import { View } from "react-native";

import Add from "../Add";
import Ingredient from "../Ingredient";

const AddIngredient = ({ color }) => {
    const [adding, setAdding] = useState(false);

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
