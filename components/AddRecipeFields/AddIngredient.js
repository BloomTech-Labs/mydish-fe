import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../../styles/individualRecipeStyles";

import Add from "../Add";
import Picker from "../Picker.ios";

const AddIngredient = () => {
    const [adding, setAdding] = useState(false);
    const [visible, setVisible] = useState(false);
    const [ingredient, setIngredient] = useState({
        name: "",
        quantity: null,
        unit: "",
    });
    const [choices, setChoices] = useState({
        selectedValue: null,
        data: [
            "tsp",
            "tbsp",
            "cup",
            "g",
            "mg",
            "oz",
            "pinch",
            "L",
            "ml",
            "can",
            "whole",
            "pint",
            "package",
            "lbs",
        ],
    });

    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const handleChange = (key, value, i) => {
        setChoices({ ...choices, selectedValue: i });
        setIngredient({ ...ingredient, [key]: value });
    };

    return (
        <View>
            {adding && (
                // <View>
                //     <TextInput
                //         ref={nameInput}
                //         autoFocus
                //         onSubmitEditing={() => quantityInput.current.focus()}
                //     />
                //     <TextInput ref={quantityInput} />
                //     <Picker ref={unitInput}>
                //         <Picker.Item label="cups" />
                //         <Picker.Item label="tbs" />
                //         <Picker.Item label="tsp" />
                //         <Picker.Item label="oz" />
                //     </Picker>
                // </View>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                    <TextInput
                        ref={nameInput}
                        style={{
                            height: 40,
                            width: "42%",
                            borderWidth: 0.8,
                            borderColor: "#363838",
                            borderRadius: 4,
                            textAlign: "center",
                            marginLeft: "3%",
                            marginRight: 14,
                        }}
                        placeholder="Ingredient Name"
                        autoFocus
                        returnKeyType="done"
                        onChangeText={name => handleChange("name", name)}
                        value={ingredient.name}
                        onSubmitEditing={() => quantityInput.current.focus()}
                    />
                    <TextInput
                        ref={quantityInput}
                        style={{
                            height: 40,
                            width: "19%",
                            borderWidth: 0.8,
                            borderColor: "#363838",
                            borderRadius: 4,
                            textAlign: "center",
                            marginLeft: 14,
                        }}
                        placeholder="Amount"
                        keyboardType={"numeric"}
                        returnKeyType="done"
                        onChangeText={quantity =>
                            handleChange("quantity", quantity)
                        }
                        value={ingredient.quantity}
                        onSubmitEditing={() => setVisible(true)}
                    />

                    <Picker
                        choices={choices}
                        handleChange={handleChange}
                        ingredient={ingredient}
                        visible={visible}
                    />
                </View>
            )}
            <Add text="Add Ingredient" submit={() => setAdding(true)} />
        </View>
    );
};

export default AddIngredient;
