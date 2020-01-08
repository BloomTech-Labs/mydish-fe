import React, { useState, useRef } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
// import styles from '../styles/createRecipeStyles';
// import ReactNativePickerModule from 'react-native-picker-module'
import Picker from "./Picker";

const Ingredient = ({ recipe, setRecipe, autoFocus, setAdding }) => {
    const [visible, setVisible] = useState(false);

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
    const [ingredient, setIngredient] = useState({
        name: "",
        quantity: "",
        unit: "",
    });
    const [toEdits, setToEdits] = useState([]);

    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const handleChange = (key, value, i) => {
        setChoices({ ...choices, selectedValue: i });
        setIngredient({ ...ingredient, [key]: value });
    };

    const handleBlur = event => {
        if (!recipe) return;
        //console.log('handleBlur triggered in <Ingredient/>');
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        if (fullIng.length === 3) {
            setToEdits([...toEdits, ingredient]);
            const recipeIng = [...recipe.ingredients];

            for (let i = 0; i < toEdits.length; i++) {
                for (let j = 0; j < recipeIng.length; j++) {
                    if (toEdits[i].name === recipeIng[j].name) {
                        recipeIng.splice(j, 1);
                    }
                }
            }

            // console.log('recipeIng after splicing', recipeIng);

            setRecipe({ ...recipe, ingredients: [...recipeIng, ingredient] });
        }
    };

    return (
        <View>
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
                    onChangeText={event => handleChange("name", event)}
                    returnKeyType="next"
                    onBlur={handleBlur}
                    value={ingredient.name}
                    autoFocus={autoFocus ? true : false}
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
                    onChangeText={qty =>
                        handleChange(
                            "quantity",
                            isNaN(Number(qty)) ? ingredient.quantity : qty,
                        )
                    }
                    returnKeyType="done"
                    onBlur={handleBlur}
                    value={ingredient.quantity}
                    onSubmitEditing={() => setVisible(true)}
                />

                <Picker
                    choices={choices}
                    handleChange={handleChange}
                    ingredient={ingredient}
                    setVisible={setVisible}
                    visible={visible}
                    setIngredient={setIngredient}
                    setAdding={setAdding}
                />
            </View>
        </View>
    );
};

export default Ingredient;
