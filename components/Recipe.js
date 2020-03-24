import React from "react";
import styles from "../styles/recipe-styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { savedPlaceholder } from "../constants/imagePlaceholders";
import { maxUsername } from "../constants/maxLenth";
//Analytics
import { Analytics, Event } from "expo-analytics";
const analytics = new Analytics("UA-160806654-1");

const Recipe = props => {
    const { navigation, recipe, parent } = props;

    const totalCookTime = (recipe.prep_time || 0) + (recipe.cook_time || 0);

    const handlePress = () => {
        navigation.navigate("IndividualR", {
            recipeID: recipe.id,
        });
        analytics
            .event(new Event("Recipe", "User taps on recipe card"))
            .then(() => console.log("Recipe tapped"))
            .catch(e => console.log(e.message));
    };

    return (
        <TouchableOpacity
            style={
                parent === "Cookbook"
                    ? styles.cookbookContainer
                    : styles.recipeContainer
            }
            onPress={handlePress}
        >
            <Image
                source={recipe.img ? { uri: recipe.img } : savedPlaceholder}
                style={{
                    width: parent === "Cookbook" ? "38%" : "100%",
                    height: parent === "Cookbook" ? 75 : 200,
                    borderRadius: 5,
                }}
            />

            <Text
                style={
                    parent === "Cookbook" ? styles.cookbookText : styles.text
                }
            >
                {recipe.title}
            </Text>

            <View
                style={
                    parent === "Cookbook"
                        ? styles.cookbookPrepView
                        : styles.prepView
                }
            >
                {parent === "Cookbook" ? (
                    <></>
                ) : (
                    <>
                        <Text style={styles.username}>
                            {recipe.owner.username.length > maxUsername
                                ? `${recipe.owner.username.slice(
                                      0,
                                      maxUsername,
                                  )}...`
                                : recipe.owner.username}
                        </Text>
                        <Text style={styles.prep}>{totalCookTime} min.</Text>
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default withNavigation(Recipe);
