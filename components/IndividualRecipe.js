import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    SafeAreaView,
    AsyncStorage,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRecipe,
    resetRecipe,
    stopEdit,
    resetCurrentActive,
    stopEditMode,
    startEditMode,
} from "../store/singleRecipe/singleRecipeActions";
import styles from "../styles/individualRecipeStyles.js";

import clock from "../assets/timer.png";
import logo from "../assets/background.png";
import placeholder from "../assets/recipe-image-placeholder.png";

import Title from "./EditRecipeComponents/Title";
import Tab from "./Tab";
import IndividualRecipeIngredient from "./EditRecipeComponents/IndividualRecipeIngredient";
import AddIngredient from "./AddRecipeFields/AddIngredient";
import IndividualRecipeInstruction from "./EditRecipeComponents/IndividualRecipeInstruction";
import AddInstruction from "./AddRecipeFields/AddInstruction";
import IndividualRecipeNotes from "./EditRecipeComponents/IndividualRecipeNotes";
import AddNote from "./AddRecipeFields/AddNote";
import DisplayRecipeIngredient from "./DisplayRecipeComponents/DisplayRecipeIngredient";
import DisplayRecipeInstruction from "./DisplayRecipeComponents/DisplayRecipeInstruction";
import DisplayRecipeNotes from "./DisplayRecipeComponents/DisplayRecipeNotes";
import DisplayTitle from "./DisplayRecipeComponents/DisplayTitle";
import { FontAwesome } from "@expo/vector-icons";
import RecipeShareLogo from "./RecipeShareLogo";

function IndividualRecipe(props) {
    const dispatch = useDispatch();
    const [color, setColor] = useState({ active: "Ingredients" });
    const [userId, setUserId] = useState(null);
    const recipe = useSelector(state => state.singleRecipe.recipe);
    const isLoading = useSelector(state => state.singleRecipe.isLoading);
    const editMode = useSelector(state => state.singleRecipe.editMode);
    const currentActive = useSelector(
        state => state.singleRecipe.currentActive,
    );
    const id = props.navigation.getParam("recipeID", "params not passed");

    const [isLoading, setIsLoading] = useState(true)

    const loadRecipe = useCallback(async () => {
        setIsLoading(true)
        try {
            await dispatch(fetchRecipe(id))

        } catch (error) {
            throw new Error("This is an error")
        }
        console.log(isLoading)
        setIsLoading(false)
        console.log(isLoading)
    }, [setIsLoading])

    useEffect(() => {
        dispatch(fetchRecipe(id));
        fetchUserId();
        //below is a cleanup that resets the initState of singleRecipe to null values,
        //which is important for a smooth user experience
        return () => dispatch(resetRecipe());
    }, [id]);

    async function fetchUserId() {
        try {
            const fetchId = await AsyncStorage.getItem("userID");
            setUserId(Number(fetchId));
        } catch (err) {
            console.log(err);
        }
    }

    const tabsDisplay = cat => {
        const newActive = cat;
        setColor({ active: newActive });
        if (currentActive && currentActive.field === "title") {
            currentActive.close();
        }
        dispatch(resetCurrentActive());
    };

    const stopEditPress = () => {
        if (currentActive.type === "edit") {
            currentActive.close();
        }
        dispatch(stopEdit());
    };

    const startEditModeButton = () => {
        if (!recipe.innovator || userId !== recipe.innovator)
            return dispatch(stopEditMode());
        dispatch(startEditMode());
    };

    if (!recipe.title || isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <RecipeShareLogo />
                <ActivityIndicator size="large" color="#444444" />
            </View>
        );
    }
    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }

    const editableRecipeDisplay = () => {
        return (
            <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>
                <SafeAreaView>
                    <TouchableWithoutFeedback onPress={stopEditPress}>
                        <ScrollView>
                            <View style={styles.recipeContainer}>
                                <Image
                                    source={
                                        recipe.img
                                            ? { uri: recipe.img }
                                            : placeholder
                                    }
                                    style={styles.image}
                                />
                                <View style={styles.titleWrapper}>
                                    <Title currentActive={currentActive} />
                                </View>
                                <View style={styles.innovatorTime}>
                                    <View style={styles.innovatorContainer}>
                                        <Image
                                            source={logo}
                                            style={styles.icon}
                                        />
                                        <Text>{recipe.innovator_name}</Text>
                                    </View>

                                    <View style={styles.timeContainer}>
                                        <Image
                                            source={clock}
                                            style={styles.icon}
                                        />
                                        <Text>{recipe.minutes} minutes</Text>
                                    </View>
                                </View>

                                <Text style={styles.tags}>Tags</Text>
                                <View style={styles.tagBox}>
                                    {recipe.categories &&
                                        recipe.categories.map(cat => (
                                            <Text
                                                key={cat}
                                                style={styles.individualTags}
                                            >
                                                {cat}
                                            </Text>
                                        ))}
                                </View>

                                <View style={styles.tabsContainer}>
                                    <Tab
                                        text="Ingredients"
                                        color={color}
                                        toggleTab={tabsDisplay}
                                    />
                                    <Tab
                                        text="Instructions"
                                        color={color}
                                        toggleTab={tabsDisplay}
                                    />
                                </View>

                                <View style={styles.recipeDetails}>
                                    {color.active === "Ingredients" && (
                                        <>
                                            {recipe.ingredients &&
                                                recipe.ingredients.map(
                                                    (ing, i) => (
                                                        <IndividualRecipeIngredient
                                                            key={i}
                                                            index={i}
                                                            currentActive={
                                                                currentActive
                                                            }
                                                        />
                                                    ),
                                                )}

                                            <AddIngredient
                                                currentActive={currentActive}
                                            />
                                        </>
                                    )}

                                    {color.active === "Instructions" && (
                                        <>
                                            {recipe.steps &&
                                                recipe.steps.map((step, i) => (
                                                    <IndividualRecipeInstruction
                                                        key={step.ordinal}
                                                        index={i}
                                                        currentActive={
                                                            currentActive
                                                        }
                                                    />
                                                ))}

                                            <AddInstruction
                                                currentActive={currentActive}
                                            />

                                            {recipe.notes ? (
                                                <IndividualRecipeNotes
                                                    notes={recipe.notes}
                                                />
                                            ) : (
                                                <AddNote
                                                    currentActive={
                                                        currentActive
                                                    }
                                                />
                                            )}
                                        </>
                                    )}
                                </View>
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    };

    const nonEditableRecipeDisplay = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.recipeContainer}>
                        {recipe.innovator && userId === recipe.innovator && (
                            <TouchableOpacity
                                onPress={startEditModeButton}
                                style={styles.editButton}
                            >
                                <FontAwesome
                                    name="pencil-square-o"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                        )}
                        <Image
                            source={
                                recipe.img ? { uri: recipe.img } : placeholder
                            }
                            style={styles.image}
                        />
                        <View style={styles.titleWrapper}>
                            <DisplayTitle />
                        </View>
                        <View style={styles.innovatorTime}>
                            <View style={styles.innovatorContainer}>
                                <Image source={logo} style={styles.icon} />
                                <Text>{recipe.innovator_name}</Text>
                            </View>

                            <View style={styles.timeContainer}>
                                <Image source={clock} style={styles.icon} />
                                <Text>{recipe.minutes} minutes</Text>
                            </View>
                        </View>

                        <Text style={styles.tags}>Tags</Text>
                        <View style={styles.tagBox}>
                            {recipe.categories &&
                                recipe.categories.map(cat => (
                                    <Text
                                        key={cat}
                                        style={styles.individualTags}
                                    >
                                        {cat}
                                    </Text>
                                ))}
                        </View>

                        <View style={styles.tabsContainer}>
                            <Tab
                                text="Ingredients"
                                color={color}
                                toggleTab={tabsDisplay}
                            />
                            <Tab
                                text="Instructions"
                                color={color}
                                toggleTab={tabsDisplay}
                            />
                        </View>

                        <View style={styles.recipeDetails}>
                            {color.active === "Ingredients" && (
                                <>
                                    {recipe.ingredients &&
                                        recipe.ingredients.map((ing, i) => (
                                            <DisplayRecipeIngredient
                                                key={i}
                                                index={i}
                                            />
                                        ))}
                                </>
                            )}
                            {color.active === "Instructions" && (
                                <>
                                    {recipe.steps &&
                                        recipe.steps.map((step, i) => (
                                            <DisplayRecipeInstruction
                                                key={step.ordinal}
                                                index={i}
                                            />
                                        ))}

                                    <DisplayRecipeNotes notes={recipe.notes} />
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };

    return editMode ? editableRecipeDisplay() : nonEditableRecipeDisplay();
}

export default IndividualRecipe;
