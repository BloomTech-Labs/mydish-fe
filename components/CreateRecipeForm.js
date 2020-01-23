import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/createRecipeStyles";

import RecipeName from "./RecipeName";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import TagButton from "./TagButton";
import Add from "./Add";
import Notes from "./Notes";

import DoneImg from "../assets/done_button.png";
import axiosWithAuth from "../utils/axiosWithAuth";
import { validateFields } from "../utils/helperFunctions/vaildateFields";

function CreateRecipeForm(props) {
    const initialFormState = {
        title: "",
        prep_time: "",
        cook_time: "",
        tags: [],
        ingredients: [{ name: "", quantity: "", units: "" }],
        instructions: [""],
        notes: [""],
    };

    const [recipe, setRecipe] = useState(initialFormState);
    let [errors, setErrors] = useState([]);

    const courses = [
        "Breakfast",
        "Brunch",
        "Lunch",
        "Dinner",
        "Dessert",
        "Snack",
    ];

    const postRecipe = async () => {
        const postRecipe = {
            ...recipe,
            // Remove any ingredients that are empty
            ingredients: recipe.ingredients.filter(
                ing => ing.name.length && ing.quantity.length && ing.units,
            ),
            instructions: recipe.instructions
                .filter(step => step.length) // Remove empty instructions
                .map((step, i) => ({
                    step_number: i + 1, // Add the step number
                    description: step.replace(/\n+/g, " "), // Remove any newlines
                })),
        };

        const errMessages = validateFields(
            postRecipe,
            courses,
            (edit = false),
            {},
        );

        if (errMessages.length) {
            setErrors(errMessages);
            return; //if any missing fields exists, do not submit the data and set the errors state variable array.
        }

        try {
            const axiosCustom = await axiosWithAuth();
            const res = await axiosCustom.post("recipes", postRecipe);

            recipeID = res.data.recipe_id;
            setRecipe(initialFormState);
            props.navigation.navigate("IndividualR", { recipe, recipeID });
        } catch (err) {
            console.log("error from adding new recipe", err);
        }
    };

    const addIng = () => {
        const newIng = { name: "", quantity: "", units: "" };
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            ingredients: [...oldRecipe.ingredients, newIng],
        }));
    };

    const addInstruction = () => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            instructions: [...oldRecipe.instructions, ""],
        }));
    };

    const removeIng = index => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            ingredients: oldRecipe.ingredients.filter((val, i) => i !== index),
        }));
    };

    const removeInstruction = index => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            instructions: oldRecipe.instructions.filter(
                (val, i) => i !== index,
            ),
        }));
    };

    const addIngredients = () => {
        return recipe.ingredients.map((ingredient, i) => (
            <Ingredient
                key={i}
                index={i}
                removeIng={removeIng}
                recipeIng={ingredient}
                recipe={recipe}
                setRecipe={setRecipe}
                parent="create"
            />
        ));
    };

    const addInstructions = () => {
        return recipe.instructions.map((instruction, i) => (
            <Instruction
                key={i}
                index={i}
                removeInstruction={removeInstruction}
                instruction={instruction}
                setRecipe={setRecipe}
            />
        ));
    };

    return (
        <KeyboardAwareScrollView>
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            {errors.map((err, i) => (
                                <Text key={i} style={styles.errors}>
                                    {err}
                                </Text>
                            ))}

                            <RecipeName recipe={recipe} setRecipe={setRecipe} />

                            <Text style={styles.heading}>
                                Total Cook Time (minutes)
                            </Text>
                            <TextInput
                                style={styles.totalTimeContainer}
                                placeholder="Prep Time"
                                keyboardType={"numeric"}
                                onChangeText={min => {
                                    if (isNaN(Number(min))) return;
                                    setRecipe({ ...recipe, prep_time: min });
                                }}
                                value={String(recipe.prep_time)}
                            />
                            <TextInput
                                style={styles.totalTimeContainer}
                                placeholder="Cook Time"
                                keyboardType={"numeric"}
                                onChangeText={min => {
                                    if (isNaN(Number(min))) return;
                                    setRecipe({ ...recipe, cook_time: min });
                                }}
                                value={String(recipe.cook_time)}
                            />

                            <Text style={styles.heading}>Course Type</Text>

                            <View style={styles.tagGroup}>
                                {courses.map((course, i) => (
                                    <TagButton
                                        key={i}
                                        tag={course}
                                        isSelected={recipe.tags.includes(
                                            course,
                                        )}
                                        setRecipe={setRecipe}
                                    />
                                ))}
                            </View>

                            <Text style={styles.heading}>Ingredients</Text>

                            {addIngredients()}
                            <Add text="Add Ingredient" submit={addIng} />

                            <Text style={styles.heading}>Instructions</Text>
                            {addInstructions()}
                            <Add text="Add A Step" submit={addInstruction} />

                            <Notes recipe={recipe} setRecipe={setRecipe} />

                            <TouchableOpacity
                                style={styles.doneView}
                                onPress={postRecipe}
                            >
                                <Image
                                    source={DoneImg}
                                    style={styles.doneCreateBtn}
                                />
                            </TouchableOpacity>

                            {errors.map((err, i) => (
                                <Text key={i} style={styles.errors}>
                                    {err}
                                </Text>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAwareScrollView>
    );
}
CreateRecipeForm.navigationOptions = {
    tabBarLabel: "create new recipe",
    headerTitle: "Create Recipe",
    headerTitleStyle: {
        fontSize: 22,
        color: "#42C200",
    },
};

export default CreateRecipeForm;
