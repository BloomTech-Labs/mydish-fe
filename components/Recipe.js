import React from "react";
import styles from "../styles/recipe-styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import placeholder from "../assets/recipe-image-placeholder.png";

const Recipe = props => {
    const { navigation, recipe } = props;

    const totalCookTime = (recipe.prep_time || 0) + (recipe.cook_time || 0);

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
                onPress={() =>
                    navigation.navigate("IndividualR", {
                        recipeID: recipe.id,
                    })
                }
            >
                <Image
                    source={recipe.img ? { uri: recipe.img } : placeholder}
                    style={{ width: "100%", height: 200, borderRadius: 5 }}
                />

                <Text style={styles.text}>{recipe.title}</Text>

                <View style={styles.prepView}>
                    <Text style={styles.username}>
                        {recipe.owner.username.length > 15
                            ? `${recipe.owner.username.slice(0, 15)}...`
                            : recipe.owner.username}
                    </Text>
                    <Text style={styles.prep}>{totalCookTime} min.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Recipe);
