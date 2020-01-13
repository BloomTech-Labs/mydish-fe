import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import {
    addIngredient,
    stopEdit,
    editIngred,
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
    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const dispatch = useDispatch();

    const [highlighted, setHighlighted] = useState({
        name: false,
        quantity: false,
        unit: false,
    });
    const [ingredient, setIngredient] = useState(
        // Use the initial recipeIng value if it exists
        recipeIng
            ? recipeIng
            : {
                  name: "",
                  quantity: "",
                  unit: "",
              },
    );

    useEffect(() => {
        if (recipeIng) {
            setIngredient({
                name: recipeIng.name,
                quantity: String(recipeIng.quantity),
                unit: recipeIng.unit,
            });
        }
    }, [recipeIng]);

    useEffect(() => {
        // Check to make sure recipeIng and ingredient aren't exactly the same
        // If they were, this would cause a continuous loop with the
        //     useEffect() above ↑↑
        if (
            recipeIng &&
            recipeIng.name === ingredient.name &&
            recipeIng.quantity === ingredient.quantity &&
            recipeIng.unit === ingredient.unit
        )
            return;
        console.log("inhere");
        // If the parent component is the CreateRecipeForm, then
        //     this will update our parent recipe with any changes we type.
        if (parent === "create") {
            setRecipe(oldRec => ({
                ...oldRec,
                ingredients: oldRec.ingredients.map((ing, i) => {
                    if (i === index) return ingredient;
                    else return ing;
                }),
            }));
            // If our parent component is the IndividualRecipeIngredient, then
            //     this will dispatch the editIngred() to update the store
        } else if (parent === "IndividualRecipeIngredient") {
            dispatch(editIngred(index, ingredient));
        }
    }, [ingredient]);

    const handleChange = (key, value) => {
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

    const submitToStopEdit = () => {
        if (parent === "IndividualRecipeIngredient") {
            dispatch(stopEdit());
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
                    onSubmitEditing={submitToStopEdit}
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
                    value={ingredient.quantity.toString()}
                    onSubmitEditing={submitToStopEdit}
                />

                <Picker
                    onClose={onClosePicker}
                    handleChange={handleChange}
                    unit={ingredient.unit}
                    highlighted={highlighted}
                />
                {/* A remove button for the CreateRecipeForm */}
                {parent === "create" && (
                    <TouchableOpacity onPress={() => removeIng(index)}>
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
                                    fontWeight: "bold",
                                }}
                            >
                                –
                            </Text>
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
