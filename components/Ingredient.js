import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, TouchableOpacity, Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import {
    addIngredient,
    editIngred,
} from "../store/singleRecipe/singleRecipeActions";
import Picker from "./Picker";
import MinusDeleteButton from "./MinusDeleteButton";

const Ingredient = ({
    recipeIng,
    removeIng,
    index,
    setRecipe,
    stopAdding,
    parent,
    closeEdit,
}) => {
    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const dispatch = useDispatch();

    const [highlighted, setHighlighted] = useState({
        name: false,
        quantity: false,
        units: false,
    });
    const [ingredient, setIngredient] = useState(
        // Use the initial recipeIng value if it exists
        recipeIng
            ? recipeIng
            : {
                  name: "",
                  quantity: "",
                  units: "",
              },
    );

    useEffect(() => {
        if (recipeIng) {
            setIngredient({
                name: recipeIng.name,
                quantity: String(recipeIng.quantity),
                units: recipeIng.units,
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
            recipeIng.units === ingredient.units
        )
            return;

        // If our parent component is the IndividualRecipeIngredient, then
        //     this will dispatch the editIngred() to update the store

        if (parent === "IndividualRecipeIngredient") {
            dispatch(editIngred(index, ingredient));
        }
    }, [ingredient]);

    const handleChange = (key, value) => {
        setIngredient({ ...ingredient, [key]: value });

        // If the parent component is the CreateRecipeForm, then
        //     this will update our parent recipe with any changes we type.
        if (parent === "create") {
            setRecipe(oldRecipe => ({
                ...oldRecipe,
                ingredients: oldRecipe.ingredients.map((ing, i) => {
                    if (i === index) return { ...ingredient, [key]: value };
                    else return ing;
                }),
            }));
        }
    };

    const cancelAdd = () => {
        setHighlighted({ name: false, quantity: false, units: false });
        stopAdding();
    };

    const submitAdd = () => {
        const lengthObj = {
            name: !ingredient.name.length,
            quantity: !ingredient.quantity.length,
            units: !ingredient.units.length,
        };

        if (Object.values(lengthObj).find(x => !!x)) {
            setHighlighted(lengthObj);
        } else {
            stopAdding();
            dispatch(addIngredient(ingredient));
        }
    };

    const submitToStopEdit = () => {
        if (parent === "IndividualRecipeIngredient") {
            closeEdit();
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
                        minHeight: 40,
                        width: "50%",
                        borderWidth: highlighted.name ? 1 : 0.8,
                        borderColor: highlighted.name ? "#FF0000" : "#363838",
                        borderRadius: 4,
                        textAlign: "center",
                    }}
                    multiline
                    maxLength={44}
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
                    maxLength={3}
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
                    onClose={submitToStopEdit}
                    handleChange={handleChange}
                    unit={ingredient.units}
                    highlighted={highlighted}
                />
                {/* A remove button for the CreateRecipeForm */}
                {parent === "create" && (
                    <MinusDeleteButton
                        parent="ingredient"
                        action={() => removeIng(index)}
                    />
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
