import React, { useState } from "react";
import { View } from "react-native";

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
            {!adding && (
                <Add text="Add Ingredient" submit={() => setAdding(true)} />
            )}
        </View>
    );
};

export default AddIngredient;
