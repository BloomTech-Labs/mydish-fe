import React, { useState } from "react";
import { Text, TextInput, View, Image, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles/createRecipeStyles.js";

import RecipeName from "./RecipeName";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import TagButton from "./TagButton.js";
import Add from "./Add";
import Notes from "./Notes";

import RecipeFormContainer from "./StyledComponents/RecipeFormContainer";
import DoneButton from "./StyledComponents/DoneButton";
import TagGroup from "./StyledComponents/TagGroup";
// import ImageUpload from './ImageUpload';

// import add from '../assets/add_circle_32px.png';;
import done from "../assets/done_button.png";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import {
    toggleBackgroundColor,
    tagsIncluded,
    toggleDifficultyColor,
    difficultyTags,
} from "../utils/helperFunctions/tagFunctions";
import { validateFields } from "../utils/helperFunctions/vaildateFields";

function CreateRecipeForm(props) {
    const initialFormState = {
        title: "",
        minutes: "",
        notes: "",
        categories: [],
        ingredients: [{ name: "", quantity: "", unit: "" }],
        steps: [""],
        ancestor: null,
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
    const cuisines = [
        "American",
        "Thai",
        "Chinese",
        "Italian",
        "Mexican",
        "Japanese",
        "Middle-Eastern",
        "Other",
    ];
    const diets = [
        "Alcohol-Free",
        "Nut-free",
        "Vegan",
        "Gluten-Free",
        "Vegetarian",
        "Sugar-Free",
        "Paleo",
    ];
    const difficulty = ["Easy", "Intermediate", "Difficult"];
    const [color, setColor] = useState({ active: [] });

    const postRecipe = async () => {
        const postRecipe = {
            ...recipe,
            // Remove any ingredients that are empty
            ingredients: recipe.ingredients.filter(
                ing => ing.name.length && ing.quantity.length && ing.unit,
            ),
            steps: recipe.steps
                .map(step => step.replace(/\n+/g, " ")) // Remove any newlines
                .filter(step => step.length), // Remove empty steps
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
        const newIng = { name: "", quantity: "", unit: "" };
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            ingredients: [...oldRecipe.ingredients, newIng],
        }));
    };

    const addInstruction = () => {
        setRecipe(oldRecipe => ({
            ...oldRecipe,
            steps: [...oldRecipe.steps, ""],
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
            steps: oldRecipe.steps.filter((val, i) => i !== index),
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
        return recipe.steps.map((instruction, i) => (
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
                    <RecipeFormContainer>
                        {/* <ImageUpload recipe={recipe} setRecipe={setRecipe} setPic={setPic} /> */}

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
                                placeholder="Time"
                                keyboardType={"numeric"}
                                onChangeText={min => {
                                    if (isNaN(Number(min))) return;
                                    setRecipe({ ...recipe, minutes: min });
                                }}
                                value={String(recipe.minutes)}
                            />

                            <Text style={styles.heading}>Course Type</Text>

                            <TagGroup>
                                {courses.map((course, i) => (
                                    <TagButton
                                        key={i}
                                        tag={course}
                                        recipe={recipe}
                                        setRecipe={setRecipe}
                                        color={color}
                                        setColor={setColor}
                                        toggleColor={toggleBackgroundColor}
                                        tagsIncluded={tagsIncluded}
                                    />
                                ))}
                            </TagGroup>

                            <Text style={styles.heading}>Cuisine</Text>
                            <TagGroup>
                                {cuisines.map((cuisine, i) => (
                                    <TagButton
                                        key={i}
                                        tag={cuisine}
                                        recipe={recipe}
                                        setRecipe={setRecipe}
                                        color={color}
                                        setColor={setColor}
                                        toggleColor={toggleBackgroundColor}
                                        tagsIncluded={tagsIncluded}
                                    />
                                ))}
                            </TagGroup>

                            <Text style={styles.heading}>Diet</Text>
                            <TagGroup>
                                {diets.map((diet, i) => (
                                    <TagButton
                                        key={i}
                                        tag={diet}
                                        recipe={recipe}
                                        setRecipe={setRecipe}
                                        color={color}
                                        setColor={setColor}
                                        toggleColor={toggleBackgroundColor}
                                        tagsIncluded={tagsIncluded}
                                    />
                                ))}
                            </TagGroup>

                            <Text style={styles.heading}>Difficulty</Text>
                            <TagGroup>
                                {difficulty.map((dif, i) => (
                                    <TagButton
                                        key={i}
                                        tag={dif}
                                        recipe={recipe}
                                        setRecipe={setRecipe}
                                        color={color}
                                        setColor={setColor}
                                        toggleColor={toggleDifficultyColor}
                                        tagsIncluded={difficultyTags}
                                    />
                                ))}
                            </TagGroup>

                            <Text style={styles.heading}>Ingredients</Text>

                            {addIngredients()}
                            <Add text="Add Ingredient" submit={addIng} />

                            <Text style={styles.heading}>Instructions</Text>
                            {addInstructions()}
                            <Add text="Add A Step" submit={addInstruction} />

                            <Notes recipe={recipe} setRecipe={setRecipe} />

                            <DoneButton onPress={postRecipe}>
                                <Image
                                    source={done}
                                    style={styles.doneCreateBtn}
                                />
                            </DoneButton>

                            {errors.map((err, i) => (
                                <Text key={i} style={styles.errors}>
                                    {err}
                                </Text>
                            ))}
                        </View>
                    </RecipeFormContainer>
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
