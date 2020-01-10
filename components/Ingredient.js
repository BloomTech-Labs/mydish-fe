import React, { useState, useRef, useEffect } from "react";
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Button,
    Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import {
    addIngredient,
    stopEdit,
} from "../store/singleRecipe/singleRecipeActions";
// import styles from '../styles/createRecipeStyles';
// import ReactNativePickerModule from 'react-native-picker-module'
import Picker from "./Picker.android";

const Ingredient = ({
    recipeIng,
    removeIng,
    index,
    setRecipe,
    setAdding,
    parent,
}) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [highlighted, setHighlighted] = useState({
        name: false,
        quantity: false,
        unit: false,
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

    useEffect(() => {
        if (recipeIng) {
            setIngredient({
                name: recipeIng.name,
                quantity: String(recipeIng.quantity),
                unit: recipeIng.unit,
            });
        }
    }, [recipeIng]);

    const [ingredient, setIngredient] = useState({
        name: "",
        quantity: "",
        unit: "",
    });
    useEffect(() => {
        // If our current recipeIng and ingredient aren't the same
        //     (to prevent a continuous loop)
        // AND, the parent component is the CreateRecipeForm, then
        //     this will update our parent recipe with any changes we type.
        if (
            parent === "create" &&
            (recipeIng.name !== ingredient.name ||
                recipeIng.quantity !== ingredient.quantity ||
                recipeIng.unit !== ingredient.unit)
        ) {
            setRecipe(oldRec => ({
                ...oldRec,
                ingredients: oldRec.ingredients.map((ing, i) => {
                    if (i === index) return ingredient;
                    else return ing;
                }),
            }));
        }
    }, [ingredient]);

    const [toEdits, setToEdits] = useState([]);

    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const handleChange = (key, value, i) => {
        setChoices({ ...choices, selectedValue: i });
        setIngredient({ ...ingredient, [key]: value });
    };

    const onClosePicker = () => {
        dispatch(stopEdit());
    };

    const cancelAdd = () => {
        setHighlighted({ name: false, quantity: false, unit: false });
        setAdding(false);
    };

    const submitAdd = () => {
        const lengthObj = {
            name: !ingredient.name.length,
            quantity: !ingredient.quantity.length,
            unit: !ingredient.unit.length,
        };

        if (Object.values(lengthObj).find(x => !!x)) {
            setHighlighted(lengthObj);
            console.log("HIGHLIGHT TEST:", highlighted);
        } else {
            setAdding(false);
            dispatch(addIngredient(ingredient));
        }
    };

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    justifyContent: "space-evenly",
                    width: "100%",
                }}
            >
                <TextInput
                    ref={nameInput}
                    style={{
                        height: 40,
                        width: "50%",
                        borderWidth: highlighted.name ? 1 : 0.8,
                        borderColor: highlighted.name ? "#FF0000" : "#363838",
                        borderRadius: 4,
                        textAlign: "center",
                    }}
                    placeholder="Ingredient Name"
                    onChangeText={event => handleChange("name", event)}
                    returnKeyType="done"
                    value={ingredient.name}
                    onSubmitEditing={() => quantityInput.current.focus()}
                />
                <TextInput
                    ref={quantityInput}
                    style={{
                        height: 40,
                        width: "20%",
                        borderWidth: highlighted.quantity ? 1 : 0.8,
                        borderColor: highlighted.quantity
                            ? "#FF0000"
                            : "#363838",
                        borderRadius: 4,
                        textAlign: "center",
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
                    value={ingredient.quantity}
                    onSubmitEditing={() => setVisible(true)}
                />

                <Picker
                    onClose={onClosePicker}
                    choices={choices}
                    handleChange={handleChange}
                    ingredient={ingredient}
                    setVisible={setVisible}
                    visible={visible}
                    setIngredient={setIngredient}
                    highlighted={highlighted}
                />
                {/* A remove button for the CreateRecipeForm */}
                {parent === "create" && (
                    <TouchableOpacity onPress={() => removeIng(index)}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View
                                style={{
                                    backgroundColor: "#FF0000",
                                    borderRadius: 100 / 2,
                                    width: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#FFFFFF",
                                        textAlign: "center",
                                    }}
                                >
                                    –
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            {parent === "AddIngredient" && (
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Button title="Cancel" onPress={cancelAdd} />
                    <Button title="Submit" onPress={submitAdd} />
                </View>
            )}
        </View>
    );
};

export default Ingredient;
