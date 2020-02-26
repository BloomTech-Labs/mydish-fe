import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../../styles/recipeImageStyles";

function RecipeImage({ image, addImage, setImageModalVisible }) {
    const alfImg =
        "https://pmcvariety.files.wordpress.com/2018/08/alf.jpg?w=1000&h=562&crop=1"; //For some fun testing
    return (
        <View style={styles.imageContainer}>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                    <Icon
                        color="#8FCC70"
                        size={100}
                        name="photo"
                        type="font-awesome"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

export default RecipeImage;
