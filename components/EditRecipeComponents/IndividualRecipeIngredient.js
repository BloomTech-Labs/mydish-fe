import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../../styles/individualRecipeStyles";
import { Swipeable } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import Ingredient from "../Ingredient";
import {
    stopEdit,
    deleteIngredient,
    setCurrentActive,
    resetCurrentActive,
} from "../../store/singleRecipe/singleRecipeActions";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const IndividualRecipeIngredient = ({ index, currentActive }) => {
    const dispatch = useDispatch();
    const ingredients = useSelector(
        state => state.singleRecipe.recipe.ingredients,
    );

    const recipeIng =
        ingredients && ingredients[index] ? ingredients[index] : {};
    const [editing, setEditing] = useState(false);

    const swipeableEl = useRef(null);

    const closeSwipe = () => swipeableEl.current.close();
    const closeEdit = () => setEditing(false);

    const makeActive = (type, close) => {
        dispatch(setCurrentActive({ type, field: "ingredient", index, close }));
    };

    const checkActive = () =>
        (currentActive.field && currentActive.field !== "ingredient") ||
        (currentActive.field && currentActive.index !== index);

    const editHandler = () => {
        setEditing(true);
        closeSwipe();
        makeActive("edit", closeEdit);
    };

    const handleWillOpen = () => {
        if (checkActive()) currentActive.close();
        // dispatch(stopEdit());
    };

    const checkIfCurrentActiveIsAdd = () =>
        currentActive && currentActive.type === "add";

    return (
        <View style={styles.swipeableContainer}>
            <Swipeable
                ref={swipeableEl}
                onSwipeableWillOpen={handleWillOpen}
                onSwipeableOpen={() => makeActive("swipe", closeSwipe)}
                friction={checkIfCurrentActiveIsAdd() ? 10 : 1}
                renderRightActions={() => (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={editHandler}
                            style={styles.editButton}
                        >
                            <FontAwesome
                                name="pencil-square-o"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(deleteIngredient(index));
                                dispatch(resetCurrentActive());
                            }}
                            style={styles.deleteButton}
                        >
                            <FontAwesome
                                name="trash-o"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            >
                {/*Text Input*/}
                {editing ? (
                    <View style={{ marginTop: 10, backgroundColor: "white" }}>
                        <Ingredient
                            index={index}
                            recipeIng={recipeIng}
                            parent="IndividualRecipeIngredient"
                            closeEdit={closeEdit}
                        />
                    </View>
                ) : (
                    <View style={styles.ingredientList}>
                        <View style={styles.ingredientView}>
                            <Text style={styles.ingredientText}>
                                {recipeIng.quantity} {recipeIng.unit}
                            </Text>
                            <MaterialCommunityIcons
                                name="drag-vertical"
                                size={32}
                                color="#2E2E2E"
                            />
                        </View>
                        <View style={styles.ingredientView}>
                            <Text style={styles.ingredientText}>
                                {recipeIng.name}
                            </Text>
                        </View>
                    </View>
                )}
            </Swipeable>
        </View>
    );
};

export default IndividualRecipeIngredient;
