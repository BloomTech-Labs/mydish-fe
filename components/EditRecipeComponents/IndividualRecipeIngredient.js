import React, { useState, useRef } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../../styles/individualRecipeStyles";
import { Swipeable } from "react-native-gesture-handler";

const IndividualRecipeIngredient = ({ ing, color, setMainEditing, mainEditing }) => {
    const [editing, setEditing] = useState(false)
    const [recipeIng, setRecipeIng] = useState({
        ingName: null,
        quantity: null,
        unit: null
    })

    const swipeableEl = useRef(null)

    const editHandler = () => {
        setEditing(true)
        setMainEditing(true)
        swipeableEl.current.close()

    }

    return (
        <View style={styles.swipeableContainer}>
            <Swipeable
                ref={swipeableEl}
                renderRightActions={() => (
                    <View style={styles.buttonContainer}>
                        <View style={styles.editButton}>
                            <Text onPress={editHandler}>Edit</Text>
                        </View>
                        <View style={styles.deleteButton}>
                            <Text>Delete</Text>
                        </View>
                    </View>)}>


                {/*Text Input*/}
                {editing && mainEditing ? (
                    <View style={styles.ingredientContainer}>

                        <TextInput
                            value={recipeIng.ingName ? recipeIng.ingName : ing.name}

                            onChangeText={name => setRecipeIng({
                                ...recipeIng,
                                ingName: name

                            })}
                            style={styles.input}
                        />
                        <TextInput
                            value={recipeIng.quantity ? recipeIng.quantity : String(ing.quantity)}

                            onChangeText={qty => setRecipeIng({
                                ...recipeIng,
                                quantity: qty

                            })}
                            style={styles.input}
                        />
                        <TextInput
                            value={recipeIng.unit ? recipeIng.unit : ing.unit}

                            onChangeText={unit => setRecipeIng({
                                ...recipeIng,
                                unit: unit

                            })}
                            style={styles.input}
                        />


                    </View>
                ) : (
                        <View
                            style={
                                color.active.includes("Instructions")
                                    ? styles.hidden
                                    : styles.ingredientList
                            }
                        >
                            <View style={styles.ingredientView}>
                                <Text style={styles.ingredientText}>


                                    {recipeIng.quantity ? recipeIng.quantity : ing.quantity} {recipeIng.unit ? recipeIng.unit : ing.unit}
                                </Text>
                            </View>
                            <View style={styles.ingredientView}>
                                <Text style={styles.ingredientText}>{recipeIng.ingName ? recipeIng.ingName : ing.name}</Text>
                            </View>
                        </View>
                    )
                }

            </Swipeable >
        </View>
    );
};

export default IndividualRecipeIngredient;

