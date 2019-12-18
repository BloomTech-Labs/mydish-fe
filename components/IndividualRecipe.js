import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    AsyncStorage,
    TouchableWithoutFeedback
} from "react-native";
import axios from "axios";
import styles from "../styles/individualRecipeStyles.js";
import clock from "../assets/timer.png";
import logo from "../assets/background.png";
import IndividualRecipeIngredient from "./IndividualRecipeIngredient";
import IndividualRecipeInstruction from "./IndividualRecipeInstruction";
import IndividualRecipeNotes from "./IndividualRecipeNotes";
import EditButton from "./EditButton";
import Tab from "./Tab";
import placeholder from "../assets/recipe-image-placeholder.png";
import Version from "./Version";
import Innovator from "./StyledComponents/Innovator";
import CookTime from "./StyledComponents/CookTime";
import RecipeTabs from "./StyledComponents/RecipeTabs";
import Details from "./StyledComponents/Details";
import TagBox from "./StyledComponents/TagBox";

import Title from "./EditRecipeComponents/Title";

function IndividualRecipe(props) {
    const [recipe, setRecipe] = useState({});
    const [userToken, setUserToken] = useState(null);
    const [color, setColor] = useState({ active: "Ingredients" });
    const id = props.navigation.getParam("recipeID", "params not passed");
    const [forks, setForks] = useState([]);
    const [mainEditing, setMainEditing] = useState(false)

    useEffect(() => {
        getToken();
        getSingleRecipe();
        getForks();
        console.log("recipe id of <IndividualRecipe>", id);
    }, [id]);

    async function getToken() {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
        return token;
    }

    function getSingleRecipe() {
        axios
            .get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
            .then(res => {
                setRecipe(res.data);
            })
            .catch(err => console.log(err));
    }

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

    const capitalize = string => {
        const newString = string.replace(/^\w/, c => c.toUpperCase());
        return newString;
    };

    const navigateToEdits = () => {
        props.navigation.navigate("Edit", { recipe });
    };

    return (
        <TouchableWithoutFeedback onPress={() => setMainEditing(false)}>
            <ScrollView>
                <Image
                    source={recipe.img ? { uri: recipe.img } : placeholder}
                    style={styles.placeholder}
                />

                {/* <Text style={styles.title}>{recipe.title}</Text> */}
                <Title title={recipe.title} mainEditing={mainEditing} setMainEditing={setMainEditing} />

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

                {/* {console.log('recipe categories', recipe.categories)}  */}

                <Text style={styles.tags}>Tags</Text>
                <TagBox>
                    {recipe.categories &&
                        recipe.categories.map(cat => (
                            <Text key={cat} style={styles.individualTags}>
                                {capitalize(cat)}
                            </Text>
                        ))}
                    {/* Why do we have to capitalize every category with a function? They already appear to be capitalized.. */}
                </TagBox>

                {userToken && <EditButton navigate={navigateToEdits} />}

                <RecipeTabs>
                    <Tab text="Ingredients" color={color} toggleTab={tabsDisplay} />
                    <Tab
                        text="Instructions"
                        color={color}
                        toggleTab={tabsDisplay}
                    />
                </RecipeTabs>

                <Details>
                    {recipe.ingredients &&
                        recipe.ingredients.map(ing => (
                            <IndividualRecipeIngredient
                                key={ing.name}
                                ing={ing}
                                color={color}
                            />
                        ))}

                    {recipe.steps &&
                        recipe.steps.map(step => (
                            <IndividualRecipeInstruction
                                key={step.ordinal}
                                step={step}
                                color={color}
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
