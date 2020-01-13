import React from "react";
import styles from "../styles/recipe-styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import UserPrepTime from "./StyledComponents/UserPrepTime";
import RecipeContainer from "./StyledComponents/RecipeContainer";
import placeholder from "../assets/recipe-image-placeholder.png";

const Recipe = props => {
    const { navigation, recipe } = props;

    return (
        <RecipeContainer>
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 1,
                    marginRight: 10,
                }}
            ></View>

            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("IndividualR", {
                        recipeID: recipe.id,
                    })
                }
            >
                <Image
                    source={recipe.img ? { uri: recipe.img } : placeholder}
                    style={{ width: "100%", height: 200 }}
                />

                <Text style={styles.text}>{recipe.title}</Text>

                <UserPrepTime>
                    <Text style={styles.username}>
                        {recipe.username || recipe.author}
                    </Text>
                    <Text style={styles.prep}>{recipe.minutes} min.</Text>
                </UserPrepTime>
            </TouchableOpacity>
        </RecipeContainer>
    );
};

export default withNavigation(Recipe);
