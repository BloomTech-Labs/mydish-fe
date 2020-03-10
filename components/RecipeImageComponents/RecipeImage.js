import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import placeholder from "../../assets/recipe-image-placeholder-2.png";
import styles from "../../styles/recipeImageStyles";
import CameraIcon from "./CameraIcon";

function RecipeImage({ image, setImageModalVisible }) {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground
                style={styles.image}
                source={image ? { uri: image } : placeholder}
            >
                <CameraIcon setImageModalVisible={setImageModalVisible} />
            </ImageBackground>
        </View>
    );
}

export default RecipeImage;
