import React, { useState, useEffect } from "react";
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
    Modal,
    ImageBackground
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRecipe,
    resetRecipe,
    stopEdit,
    resetCurrentActive,
    stopEditMode,
    startEditMode,
    submitEditedRecipe,
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
import { Octicons } from "@expo/vector-icons";
import RecipeShareLogo from "./RecipeShareLogo";
import { TextInput } from "react-native-gesture-handler";

function IndividualRecipe(props) {
    const dispatch = useDispatch();
    const [color, setColor] = useState({ active: "Ingredients" });
    const [userId, setUserId] = useState(null);
    const [modal, setModal] = useState({ save: false, cancel: false });
    const recipe = useSelector(state => state.singleRecipe.recipe);
    const isLoading = useSelector(state => state.singleRecipe.isLoading);
    const editMode = useSelector(state => state.singleRecipe.editMode);
    const currentActive = useSelector(
        state => state.singleRecipe.currentActive,
    );
    const id = props.navigation.getParam("recipeID", "params not passed");

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
        // dispatch(stopEdit());
    };

    const startEditModeButton = () => {
        if (!recipe.innovator || userId !== recipe.innovator)
            return dispatch(stopEditMode());
        dispatch(startEditMode());
    };

    const saveButtonEditedRecipe = () => {
        dispatch(submitEditedRecipe(id));
        dispatch(stopEditMode());
    };

    const cancelButtonEditedRecipe = () => {
        dispatch(stopEditMode());
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

    const editableRecipeDisplay = () => {
        return (
            <KeyboardAvoidingView behavior={"position"} style={{ flex: 1 }}>
                <SafeAreaView>
                    <TouchableWithoutFeedback onPress={stopEditPress}>
                        <ScrollView>
                            <View style={styles.recipeContainer}>
                                <View style={{ flexDirection: "row" }}>
                                    <Modal
                                        visible={modal.save}
                                        animationType="fade"
                                        transparent
                                    >
                                        <View
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                backgroundColor:
                                                    "rgba(122, 122, 122, 0.7)",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <KeyboardAvoidingView
                                                behavior={"position"}
                                            >
                                                <View
                                                    style={{
                                                        marginHorizontal: 20,
                                                        marginTop: 300,
                                                        backgroundColor:
                                                            "white",
                                                        borderRadius: 6,
                                                    }}
                                                >
                                                    <Text>
                                                        Please leave a brief
                                                        comment describing your
                                                        recipe changes.
                                                    </Text>
                                                    <TextInput
                                                        style={{
                                                            minHeight: 40,
                                                            width: 300,
                                                            borderRadius: 4,
                                                            borderWidth: 1,
                                                            borderColor:
                                                                "black",
                                                        }}
                                                    />
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            setModal({
                                                                save: false,
                                                                cancel: false,
                                                            })
                                                        }
                                                    >
                                                        <Text>Back</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={
                                                            saveButtonEditedRecipe
                                                        }
                                                    >
                                                        <Text>Submit</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </KeyboardAvoidingView>
                                        </View>
                                    </Modal>

                                </View>
                                <ImageBackground
                                    source={
                                        recipe.img
                                            ? { uri: recipe.img }
                                            : placeholder
                                    }
                                    style={styles.image}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal({
                                                save: true,
                                                cancel: false,
                                            });
                                        }}
                                        style={styles.editButton}
                                    >
                                        <FontAwesome
                                            name="check"
                                            size={20}
                                            color="white"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={cancelButtonEditedRecipe}
                                        style={styles.deleteButton}
                                    >
                                        <Octicons
                                            name="x"
                                            size={20}
                                            color="white"
                                        />
                                    </TouchableOpacity>

                                </ImageBackground>
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

                        <ImageBackground
                            source={
                                recipe.img ? { uri: recipe.img } : placeholder
                            }
                            style={styles.image}
                        >
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
                        </ImageBackground>
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
