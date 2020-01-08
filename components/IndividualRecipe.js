import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRecipe,
    resetRecipe,
    stopEdit,
} from "../store/singleRecipe/singleRecipeActions";
import axios from "axios";
import styles from "../styles/individualRecipeStyles.js";

import clock from "../assets/timer.png";
import logo from "../assets/background.png";
import placeholder from "../assets/recipe-image-placeholder.png";

import Title from "./EditRecipeComponents/Title";
import Tab from "./Tab";
import IndividualRecipeIngredient from "./EditRecipeComponents/IndividualRecipeIngredient";
import AddIngredient from "./AddRecipeFields/AddIngredient";
import Add from "./Add";
import IndividualRecipeInstruction from "./EditRecipeComponents/IndividualRecipeInstruction";
import IndividualRecipeNotes from "./EditRecipeComponents/IndividualRecipeNotes";
import Version from "./Version";
import DisplayRecipeIngredient from "./DisplayRecipeComponents/DisplayRecipeIngredient";
import DisplayRecipeInstruction from "./DisplayRecipeComponents/DisplayRecipeInstruction";
import DisplayRecipeNotes from "./DisplayRecipeComponents/DisplayRecipeNotes";
import DisplayTitle from "./DisplayRecipeComponents/DisplayTitle";

function IndividualRecipe(props) {
    const [color, setColor] = useState({ active: "Ingredients" });
    const id = props.navigation.getParam("recipeID", "params not passed");
    const [forks, setForks] = useState([]);
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.singleRecipe.recipe);

    useEffect(() => {
        dispatch(fetchRecipe(id));
        getForks();
        //below is a cleanup that resets the initState of singleRecipe to null values,
        //which is important for a smooth user experience
        return () => dispatch(resetRecipe());
    }, []);

    async function getForks() {
        try {
            const res = await axios.get(
                `https://recipeshare-development.herokuapp.com/recipes/all`,
            );
            const allRecipes = res.data;
            const children = allRecipes.filter(rec => rec.ancestor === id);
            setForks(children);
        } catch (err) {
            console.log(err);
        }
    }

    const tabsDisplay = cat => {
        const newActive = cat;
        setColor({ active: newActive });
    };

    if (!recipe) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const editableRecipeDisplay = () => {
        return (
            <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>
                <SafeAreaView>
                    <TouchableWithoutFeedback
                        onPress={() => dispatch(stopEdit())}
                    >
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
                                    <Title />
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
                                    {recipe.ingredients &&
                                        recipe.ingredients.map((ing, i) => (
                                            <IndividualRecipeIngredient
                                                key={i}
                                                index={i}
                                                color={color}
                                            />
                                        ))}

                                    <AddIngredient color={color} />

                                    {recipe.steps &&
                                        recipe.steps.map((step, i) => (
                                            <IndividualRecipeInstruction
                                                key={step.ordinal}
                                                index={i}
                                                color={color}
                                            />
                                        ))}

                                    <IndividualRecipeNotes
                                        color={color}
                                        notes={recipe.notes}
                                    />
                                </View>

                                <FlatList
                                    horizontal={true}
                                    data={forks}
                                    renderItem={({ item }) => (
                                        <Version
                                            recipe={item}
                                            navigation={props.navigation}
                                        />
                                    )}
                                    keyExtractor={item => String(item.id)}
                                />
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
                            {recipe.ingredients &&
                                recipe.ingredients.map((ing, i) => (
                                    <DisplayRecipeIngredient
                                        key={i}
                                        index={i}
                                        color={color}
                                    />
                                ))}
                            {recipe.steps &&
                                recipe.steps.map((step, i) => (
                                    <DisplayRecipeInstruction
                                        key={step.ordinal}
                                        index={i}
                                        color={color}
                                    />
                                ))}

                            <DisplayRecipeNotes
                                color={color}
                                notes={recipe.notes}
                            />
                        </View>

                        <FlatList
                            horizontal={true}
                            data={forks}
                            renderItem={({ item }) => (
                                <Version
                                    recipe={item}
                                    navigation={props.navigation}
                                />
                            )}
                            keyExtractor={item => String(item.id)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };

    return true ? editableRecipeDisplay() : nonEditableRecipeDisplay();
}

export default IndividualRecipe;
