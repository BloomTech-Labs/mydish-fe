import React from "react";
import styles from "../styles/recipe-styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import placeholder from "../assets/recipe-image-placeholder.png";
import { maxUsername } from "../constants/maxLenth";
//Analytics
import { Analytics, Event} from 'expo-analytics';
const analytics = new Analytics('UA-159002245-1');

const Recipe = props => {
    const { navigation, recipe } = props;

    const totalCookTime = (recipe.prep_time || 0) + (recipe.cook_time || 0);

    const handlePress = () => {
        navigation.navigate("IndividualR", {
            recipeID: recipe.id,
        })
        analytics.event(new Event('Recipe', 'User taps on recipe card'))
        .then(() => console.log("Recipe tapped"))
        .catch(e => console.log(e.message));
    }

    return (
        <View style={styles.recipeContainer}>
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 1,
                    marginRight: 10,
                }}
            ></View>

            <TouchableOpacity
                onPress={handlePress}
            >
                <Image
                    source={recipe.img ? { uri: recipe.img } : placeholder}
                    style={{ width: "100%", height: 200, borderRadius: 5 }}
                />

                <Text style={styles.text}>{recipe.title}</Text>

                <View style={styles.prepView}>
                    <Text style={styles.username}>
                    {recipe.owner.username.length > maxUsername
                            ? `${recipe.owner.username.slice(
                                  0,
                                  maxUsername,
                              )}...`
                            : recipe.owner.username}
                    </Text>
                    <Text style={styles.prep}>{totalCookTime} min.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Recipe);
