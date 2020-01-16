import React from "react";
import styles from "../styles/recipe-styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import placeholder from "../assets/recipe-image-placeholder.png";

const Recipe = props => {
    const { navigation, recipe } = props;

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
                    style={{ width: "100%", height: 200 }}
                />

                <Text style={styles.text}>{recipe.title}</Text>

                <View style={styles.prepView}>
                    <Text style={styles.username}>
                        {recipe.username || recipe.author}
                    </Text>
                    <Text style={styles.prep}>{recipe.minutes} min.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Recipe);
