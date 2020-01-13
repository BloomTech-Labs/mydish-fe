import React, { useState, useEffect } from "react";
import styles from "../styles/recipe-styles";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
} from "react-native";
import { withNavigation } from "react-navigation";
import LikeModal from "./LikekModal";
import UnlikeModal from "./UnlikeModal";
import Like from "./StyledComponents/Like";
import Fork from "./StyledComponents/Fork";
import UserPrepTime from "./StyledComponents/UserPrepTime";
import RecipeContainer from "./StyledComponents/RecipeContainer";
import clearHeart from "../assets/orangeBorder.png";
import solidHeart from "../assets/orangeFill.png";
import axiosWithAuth from "../utils/axiosWithAuth";
import placeholder from "../assets/recipe-image-placeholder.png";
import forkLogo from "../assets/background.png";

const Recipe = props => {
    const { navigation, recipe } = props;

    console.log(recipe);
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
