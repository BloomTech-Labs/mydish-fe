import React, { useState, useRef, useEffect } from "react";
import { TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import {
    editIngred,
    deleteIngredient,
} from "../store/singleRecipe/singleRecipeActions";
import Picker from "./Picker";
import XDeleteButton from "./XDeleteButton";
import theme from "../styles/theme.style";

const Ingredient = ({ recipeIng, removeIng, index, setRecipe, parent }) => {
    const quantityInput = useRef(null);
    const unitInput = useRef(null);
    const nameInput = useRef(null);

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

        if (parent === "editRecipe") {
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

    return (
        <View>
            <View
                style={{
                    marginBottom: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <TextInput
                    ref={quantityInput}
                    style={{
                        height: theme.INPUT_HEIGHT,
                        width: "20%",
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderWidth: theme.INPUT_BORDER_WIDTH,
                        borderColor: highlighted.quantity
                            ? theme.INPUT_BORDER_HIGHLIGHT_COLOR
                            : theme.INPUT_BORDER_COLOR,
                        borderRadius: theme.INPUT_BORDER_RADIUS,
                        textAlign: "center",
                    }}
                    placeholder="Amount"
                    maxLength={5}
                    keyboardType={"numbers-and-punctuation"}
                    onChangeText={qty =>
                        handleChange(
                            "quantity",
                            qty.replace(/[0-9 ./,-]/g, "")
                                ? ingredient.quantity
                                : qty,
                        )
                    }
                    returnKeyType="done"
                    value={ingredient.quantity.toString()}
                    onFocus={() => setHighlighted({ quantity: true })}
                    onBlur={() => setHighlighted({ quantity: false })}
                />
                <TextInput
                    ref={unitInput}
                    maxLength={8}
                    placeholder="Units"
                    onChangeText={event => handleChange("units", event)}
                    value={ingredient.units}
                    onFocus={() => setHighlighted({ units: true })}
                    onBlur={() => setHighlighted({ units: false })}
                />
                <TextInput
                    ref={nameInput}
                    style={{
                        minHeight: theme.INPUT_HEIGHT,
                        width: "40%",
                        borderWidth: theme.INPUT_BORDER_WIDTH,
                        borderColor: highlighted.name
                            ? theme.INPUT_BORDER_HIGHLIGHT_COLOR
                            : theme.INPUT_BORDER_COLOR,
                        borderRadius: theme.INPUT_BORDER_RADIUS,
                        textAlign: "left",
                        paddingLeft: 12,
                        paddingBottom: 5,
                    }}
                    multiline
                    maxLength={44}
                    placeholder="Ingredient Name"
                    onChangeText={event => handleChange("name", event)}
                    value={ingredient.name}
                    onFocus={() => setHighlighted({ name: true })}
                    onBlur={() => setHighlighted({ name: false })}
                />

                <XDeleteButton
                    parent="ingredient"
                    action={
                        parent === "create"
                            ? () => removeIng(index)
                            : () => dispatch(deleteIngredient(index))
                    }
                />
            </View>
        </View>
    );
};

export default Ingredient;
