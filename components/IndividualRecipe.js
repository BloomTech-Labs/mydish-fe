import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    TouchableWithoutFeedback,
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
import IndividualRecipeIngredient from "./EditRecipeComponents/IndividualRecipeIngredient";
import IndividualRecipeNotes from "./IndividualRecipeNotes";
import Tab from "./Tab";
import placeholder from "../assets/recipe-image-placeholder.png";
import Version from "./Version";
import Innovator from "./StyledComponents/Innovator";
import CookTime from "./StyledComponents/CookTime";
import RecipeTabs from "./StyledComponents/RecipeTabs";
import Details from "./StyledComponents/Details";
import TagBox from "./StyledComponents/TagBox";

import Title from "./EditRecipeComponents/Title";
import IndividualRecipeInstruction from "./EditRecipeComponents/IndividualRecipeInstruction";

function IndividualRecipe(props) {
    const [color, setColor] = useState({ active: "Ingredients" });
    const id = props.navigation.getParam("recipeID", "params not passed");
    const [forks, setForks] = useState([]);
    const [mainEditing, setMainEditing] = useState(false);
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.singleRecipe.recipe);

    useEffect(() => {
        dispatch(fetchRecipe(id));
        getForks();
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

    return (
        <TouchableWithoutFeedback onPress={() => dispatch(stopEdit())}>
            <ScrollView>
                <Image
                    source={recipe.img ? { uri: recipe.img } : placeholder}
                    style={styles.placeholder}
                />
                <Title />

                <View style={styles.innovatorTime}>
                    <Innovator>
                        <Image source={logo} style={styles.icon} />
                        <Text>{recipe.innovator_name}</Text>
                    </Innovator>

                    <CookTime>
                        <Image source={clock} style={styles.icon} />
                        <Text>{recipe.minutes} minutes</Text>
                    </CookTime>
                </View>

                <Text style={styles.tags}>Tags</Text>
                <TagBox>
                    {recipe.categories &&
                        recipe.categories.map(cat => (
                            <Text key={cat} style={styles.individualTags}>
                                {cat}
                            </Text>
                        ))}
                </TagBox>

                <RecipeTabs>
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
                </RecipeTabs>

                <Details>
                    {recipe.ingredients &&
                        recipe.ingredients.map((ing, i) => (
                            <IndividualRecipeIngredient
                                key={i}
                                index={i}
                                color={color}
                            />
                        ))}

                    {recipe.steps &&
                        recipe.steps.map((step, i) => (
                            <IndividualRecipeInstruction
                                key={step.ordinal}
                                index={i}
                                step={step}
                                color={color}
                                mainEditing={mainEditing}
                                setMainEditing={setMainEditing}
                            />
                        ))}

                    <IndividualRecipeNotes color={color} notes={recipe.notes} />
                </Details>

                <FlatList
                    horizontal={true}
                    data={forks}
                    renderItem={({ item }) => (
                        <Version recipe={item} navigation={props.navigation} />
                    )}
                    keyExtractor={item => String(item.id)}
                />
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

export default IndividualRecipe;
