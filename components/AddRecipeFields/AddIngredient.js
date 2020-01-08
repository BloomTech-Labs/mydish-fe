import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient } from "../../store/singleRecipe/singleRecipeActions";

import styles from "../../styles/individualRecipeStyles";

import Add from "../Add";
import Ingredient from "../Ingredient";

const AddIngredient = () => {
    const dispatch = useDispatch();

    const [adding, setAdding] = useState(false);

    const cancelAdd = () => {
        setAdding(false);
    };

    return (
        <View>
            {adding && (
                <View>
                    <Ingredient setRecipe={() => ({})} setAdding={setAdding} />
                    {/* cancel and submit buttons to dispatch */}
                    <View
                        style={{
                            flexDirection: "row",
                            width: "90%",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Button title="Cancel" onPress={cancelAdd} />
                        <Button title="Submit" />
                    </View>
                </View>
            )}
            <Add text="Add Ingredient" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddIngredient;
